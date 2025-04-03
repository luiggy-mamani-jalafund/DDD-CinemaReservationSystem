from locust import HttpUser, task, between
import random

class CinemaUser(HttpUser):
    # Tiempo de espera entre tareas (simula comportamiento humano)
    wait_time = between(1, 5)

    # URL base de tu API, ajustada al puerto 5011
    host = "http://localhost:5011"

    # Método que se ejecuta al iniciar cada usuario simulado
    def on_start(self):
        # Obtener IDs de películas activas dinámicamente
        response = self.client.get("/api/movie/active")
        if response.status_code == 200:
            movies = response.json()
            self.movie_ids = [movie["id"] for movie in movies]
        else:
            self.movie_ids = []  # Fallback si falla
            print("Error al obtener películas activas")

        # Obtener IDs de teatros (como no hay endpoint para listar todos, usamos uno inicial)
        # Reemplaza este ID con uno válido de tu colección 'theaters' en MongoDB
        initial_theater_id = "67edb8befa21bf398e6b141f"  # Ejemplo: "661c2f5b9e8f1b2c3d4e5f6a"
        response = self.client.get(f"/api/theater/{initial_theater_id}")
        if response.status_code == 200:
            self.theater_ids = [response.json()["id"]]
        else:
            self.theater_ids = [initial_theater_id]  # Fallback
            print(f"Error al obtener teatro con ID {initial_theater_id}")

        # Obtener IDs de horarios usando el primer movieId
        if self.movie_ids:
            response = self.client.get(f"/api/showtime/{self.movie_ids[0]}")
            if response.status_code == 200:
                showtimes = response.json()
                # Ajustado según la estructura de tu endpoint /api/showtime/{movieId}
                self.hour_ids = [hour["id"] for showtime in showtimes for hour in showtime["hours"]]
            else:
                self.hour_ids = ["67edb8bffa21bf398e6b1439"]  # Fallback
                print(f"Error al obtener horarios para movieId {self.movie_ids[0]}")

    # Tarea 1: Obtener películas activas (GET /api/movie/active)
    @task(3)
    def get_active_movies(self):
        response = self.client.get("/api/movie/active")
        if response.status_code != 200:
            response.failure(f"Failed to get active movies: {response.status_code}")

    # Tarea 2: Obtener un teatro por ID (GET /api/theater/{id})
    @task(2)
    def get_theater_by_id(self):
        theater_id = random.choice(self.theater_ids)
        response = self.client.get(f"/api/theater/{theater_id}")
        if response.status_code != 200:
            response.failure(f"Failed to get theater: {response.status_code}")

    # Tarea 3: Obtener horarios por película (GET /api/showtime/{movieId})
    @task(2)
    def get_showtimes_by_movie(self):
        if not self.movie_ids:
            return
        movie_id = random.choice(self.movie_ids)
        response = self.client.get(f"/api/showtime/{movie_id}")
        if response.status_code != 200:
            response.failure(f"Failed to get showtimes: {response.status_code}")

    # Tarea 4: Confirmar una compra (POST /api/purchase/confirmPurchase)
    @task(1)
    def confirm_purchase(self):
        if not self.hour_ids:
            return
        hour_id = random.choice(self.hour_ids)
        # Generar un seatId basado en tu estructura de init-mongo.js
        seat_id = f"theater-{random.choice(['one', 'two', 'three'])}-a-{random.randint(1, 9)}"
        purchase_data = {
            "HourScheduleId": hour_id,
            "ReservedSeats": [seat_id],
            "Client": {
                "Ci": random.randint(1000000, 9999999),
                "FullName": "Test User",
                "Email": f"test{random.randint(1, 100)}@example.com"
            }
        }
        response = self.client.post(
            "/api/purchase/confirmPurchase",
            json=purchase_data
        )
        if response.status_code != 200:
            response.failure(f"Failed to confirm purchase: {response.status_code}, {response.text}")