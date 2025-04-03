from locust import HttpUser, task, between
import random

class CinemaUser(HttpUser):
    # Tiempo de espera entre tareas (simula comportamiento humano)
    wait_time = between(1, 5)

    # URL base de tu API
    host = "http://localhost:5121"

    # Método que se ejecuta al iniciar cada usuario simulado
    def on_start(self):
        # Obtener IDs de películas activas dinámicamente
        response = self.client.get("/api/movie/active")
        if response.status_code == 200:
            movies = response.json()
            self.movie_ids = [movie["id"] for movie in movies]
        else:
            self.movie_ids = ["67ede5892dca307b856b140c"]
            print(f"Error al obtener películas activas: {response.status_code}, {response.text}")

        # Obtener IDs de teatros (usamos el theaterId del hour que compartiste)
        initial_theater_id = "67ede5892dca307b856b1422"
        response = self.client.get(f"/api/theater/{initial_theater_id}")
        if response.status_code == 200:
            theater = response.json()
            self.theater_ids = [theater["id"]]
            self.seating_sets = theater["seatingSet"]
        else:
            self.theater_ids = [initial_theater_id]
            self.seating_sets = []
            print(f"Error al obtener teatro con ID {initial_theater_id}: {response.status_code}, {response.text}")

        # Inicializar hour_ids y reserved_seats con valores por defecto
        self.hour_ids = ["67ede5892dca307b856b143d"]
        self.reserved_seats = [
            "theater-four-d-42",
            "theater-four-d-54",
            "theater-four-d-13",
            "theater-four-d-76",
            "theater-four-e-17",
            "theater-four-d-16",
            "theater-four-d-65",
            "theater-four-d-22",
            "theater-four-d-60",
            "theater-four-d-66",
            "theater-four-d-20",
            "theater-four-a-28",
            "theater-four-d-59",
            "theater-four-b-60",
            "theater-four-a-4"
        ]

        # Obtener más horarios dinámicamente usando un movieId que sabemos que tiene horarios
        movie_id = "67ede5892dca307b856b140c"
        response = self.client.get(f"/api/showtime/movie/{movie_id}")
        if response.status_code == 200:
            showtimes = response.json()
            for showtime in showtimes:
                hours = showtime.get("hours", [])
                if hours:
                    self.hour_ids.extend([hour["id"] for hour in hours])
                    if hours[0]["reservedSeats"]:
                        self.reserved_seats.extend(hours[0]["reservedSeats"])
        else:
            print(f"Error al obtener horarios para movieId {movie_id}: {response.status_code}, {response.text}")

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

    # Tarea 3: Obtener horarios por película (GET /api/showtime/movie/{movieId})
    @task(2)
    def get_showtimes_by_movie(self):
        if not self.movie_ids:
            return
        movie_id = random.choice(self.movie_ids)
        response = self.client.get(f"/api/showtime/movie/{movie_id}")
        if response.status_code != 200:
            response.failure(f"Failed to get showtimes: {response.status_code}")

    # Tarea 4: Confirmar una compra (POST /api/purchase/confirmPurchase)
    @task(1)
    def confirm_purchase(self):
        if not self.hour_ids or not self.reserved_seats:
            return
        hour_id = random.choice(self.hour_ids)
        # Usar un asiento reservado real de los horarios
        seat_id = random.choice(self.reserved_seats)
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

    # Tarea 5: Obtener asientos ocupados (POST /api/theater/occupiedseats)
    @task(1)
    def get_occupied_seats(self):
        if not self.seating_sets or not self.reserved_seats:
            return
        # Usar el seatingSet del teatro y algunos reservedSeats
        occupied_seats_data = {
            "SeatingSet": self.seating_sets,
            "ReservedSeats": self.reserved_seats[:2]  # Tomamos solo 2 para la prueba
        }
        response = self.client.post(
            "/api/theater/occupiedseats",
            json=occupied_seats_data
        )
        if response.status_code != 200:
            response.failure(f"Failed to get occupied seats: {response.status_code}, {response.text}")