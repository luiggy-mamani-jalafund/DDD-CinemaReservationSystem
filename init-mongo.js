const movies = [
    {
        title: "Inception",
        description:
            "A thief who steals secrets from dreams is offered the chance to erase his past as payment for a job he must do.",
        image: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
        duration: 148,
        genre: "Science Fiction",
    },
    {
        title: "The Godfather",
        description:
            "The story of the Corleone crime family and its matriarch, as they fight to maintain their power and legacy in the criminal world.",
        image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
        duration: 175,
        genre: "Crime",
    },
    {
        title: "The Shawshank Redemption",
        description:
            "A banker is sentenced to life in a maximum security prison and forms an unexpected friendship with a fellow inmate.",
        image: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
        duration: 142,
        genre: "Drama",
    },
    {
        title: "Pulp Fiction",
        description:
            "A series of interconnected stories about the lives of criminals in Los Angeles, intertwined with humor and violence.",
        image: "https://es.web.img3.acsta.net/img/05/66/05663f00b8b5df58b003aaf5c46ef8ad.jpg",
        duration: 154,
        genre: "Crime",
    },
    {
        title: "The Dark Knight",
        description:
            "Batman faces the Joker, an anarchic criminal who throws Gotham City into chaos.",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        duration: 152,
        genre: "Action",
    },
    {
        title: "Forrest Gump",
        description:
            "The life of a man with a low IQ who becomes a witness to several historical events in the United States.",
        image: "https://m.media-amazon.com/images/S/pv-target-images/f9ddd832d1b566f5b8dd29a4dbc76b7531c420c8c8d9fdfe94eca128bda8e2b1.jpg",
        duration: 142,
        genre: "Drama",
    },
    {
        title: "Interstellar",
        description:
            "A group of explorers travel through a wormhole in search of a new home for humanity.",
        image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
        duration: 169,
        genre: "Science Fiction",
    },
    {
        title: "The Matrix",
        description:
            "A programmer discovers that the reality he knows is a simulation created by machines that control humanity.",
        image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
        duration: 136,
        genre: "Action",
    },
    {
        title: "Gladiator",
        description:
            "A Roman general is betrayed and reduced to slavery, fighting for revenge and justice in the arena.",
        image: "https://www.originalfilmart.com/cdn/shop/products/gladiator_2000_teaser_original_film_art_5000x.jpg?v=1610420463",
        duration: 155,
        genre: "Action",
    },
    {
        title: "Titanic",
        description:
            "A love story between two young people from different social classes aboard the famous ocean liner.",
        image: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg",
        duration: 195,
        genre: "Romance",
    },
    {
        title: "Avatar",
        description:
            "En un mundo alienígena, un exmarine se infiltra en una tribu nativa y se encuentra dividido entre dos mundos.",
        image: "https://es.web.img3.acsta.net/pictures/22/08/30/12/42/0535062.jpg",
        duration: 162,
        genre: "Ciencia ficción",
    },
    {
        title: "Fight Club",
        description:
            "Un hombre desilusionado crea un club de lucha clandestino como una forma de encontrar un sentido a su vida.",
        image: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
        duration: 139,
        genre: "Drama",
    },
    {
        title: "The Silence of the Lambs",
        description:
            "Una joven agente del FBI busca la ayuda de un asesino en serie encarcelado para atrapar a otro asesino suelto.",
        image: "https://s3.amazonaws.com/criterion-production/films/46014912ca0c20592c472f5bbe33e4f8/L9AQ95Y7z2vOIUf1ntwvpZsZx3kp8B_original.jpg",
        duration: 138,
        genre: "Thriller",
    },
    {
        title: "Saving Private Ryan",
        description:
            "Un grupo de soldados se embarca en una misión para rescatar a un paracaidista tras el desembarco de Normandía.",
        image: "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_.jpg",
        duration: 169,
        genre: "Guerra",
    },
    {
        title: "Jurassic Park",
        description:
            "Un parque temático que alberga dinosaurios clonados se convierte en una pesadilla cuando los animales escapan.",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f00bf346385235.58520f9022451.jpg",
        duration: 127,
        genre: "Aventura",
    },
    {
        title: "The Social Network",
        description:
            "La historia de la creación de Facebook y las disputas legales que surgieron entre sus fundadores.",
        image: "https://www.videoexpress.be/wp-content/uploads/2019/05/kuq7PstzRa7Sau4DzXvuaKw3zY8.jpg",
        duration: 120,
        genre: "Biografía",
    },
    {
        title: "The Lion King",
        description:
            "La historia de un joven león que debe reclamar su lugar como rey después de la muerte de su padre.",
        image: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
        duration: 88,
        genre: "Animación",
    },
    {
        title: "WALL-E",
        description:
            "Un pequeño robot de limpieza en un futuro desolado se embarca en una aventura que podría salvar el planeta.",
        image: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
        duration: 98,
        genre: "Animación",
    },
    {
        title: "Schindler's List",
        description:
            "Un empresario alemán salva a más de mil judíos durante el Holocausto creando una lista de trabajadores esenciales.",
        image: "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg",
        duration: 195,
        genre: "Historia",
    },
    {
        title: "The Avengers",
        description:
            "Un grupo de superhéroes se une para enfrentar a una amenaza que pone en peligro al mundo.",
        image: "https://files.ekmcdn.com/allwallpapers/images/mural-wallpaper-avengers-movie-poster-37221-1-p.jpg",
        duration: 143,
        genre: "Acción",
    },
    {
        title: "Avatar",
        description:
            "On an alien world, a former marine infiltrates a native tribe and finds himself torn between two worlds.",
        image: "https://en.web.img3.acsta.net/pictures/22/08/30/12/42/0535062.jpg",
        duration: 162,
        genre: "Science Fiction",
    },
    {
        title: "Fight Club",
        description:
            "A disillusioned man forms an underground fight club as a way to find meaning in his life.",
        image: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
        duration: 139,
        genre: "Drama",
    },
    {
        title: "The Silence of the Lambs",
        description:
            "A young FBI agent seeks the help of an imprisoned serial killer to catch another killer on the loose.",
        image: "https://s3.amazonaws.com/criterion-production/films/46014912ca0c20592c472f5bbe33e4f8/L9AQ95Y7z2vOIUf1ntwvpZsZx3kp8B_original.jpg",
        duration: 138,
        genre: "Thriller",
    },
    {
        title: "Saving Private Ryan",
        description:
            "A group of soldiers embark on a mission to rescue a paratrooper after the Normandy landings.",
        image: "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_.jpg",
        duration: 169,
        genre: "War",
    },
    {
        title: "Jurassic Park",
        description:
            "A theme park home to cloned dinosaurs turns into a nightmare when the animals escape.",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f00bf346385235.58520f9022451.jpg",
        duration: 127,
        genre: "Adventure",
    },
    {
        title: "The Social Network",
        description:
            "The story of the creation of Facebook and the legal disputes that arose between its founders.",
        image: "https://www.videoexpress.be/wp-content/uploads/2019/05/kuq7PstzRa7Sau4DzXvuaKw3zY8.jpg",
        duration: 120,
        genre: "Biography",
    },
    {
        title: "The Lion King",
        description:
            "The story of a young lion who must reclaim his place as king after the death of his father.",
        image: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
        duration: 88,
        genre: "Animation",
    },
    {
        title: "WALL-E",
        description:
            "A small cleaning robot in a bleak future embarks on an adventure that could save the planet.",
        image: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
        duration: 98,
        genre: "Animation",
    },
    {
        title: "Schindler's List",
        description:
            "A German businessman saves over a thousand Jews during the Holocaust by creating a list of essential workers.",
        image: "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg",
        duration: 195,
        genre: "History",
    },
    {
        title: "The Avengers",
        description:
            "A group of superheroes unite to face a threat that endangers the world.",
        image: "https://files.ekmcdn.com/allwallpapers/images/mural-wallpaper-avengers-movie-poster-37221-1-p.jpg",
        duration: 143,
        genre: "Action",
    },
];

const theaters = [
    {
        name: "Theater 1",
        sists: [
            {
                columns: 3,
                rows: 4,
                sits: [
                    { id: "a-1" },
                    { id: "a-2" },
                    { id: "a-3" },
                    { id: "a-4" },
                    { id: "a-5" },
                    { id: "a-6" },
                    { id: "a-7" },
                    { id: "a-8" },
                    { id: "a-9" },
                    { id: "a-10" },
                    { id: "a-11" },
                    { id: "a-12" },
                ],
            },
            {
                columns: 2,
                rows: 3,
                sits: [
                    { id: "b-1" },
                    { id: "b-2" },
                    { id: "b-3" },
                    { id: "b-4" },
                    { id: "b-5" },
                    { id: "b-6" },
                ],
            },
        ],
    },
    {
        name: "Theater 2",
        sists: [
            {
                columns: 4,
                rows: 5,
                sits: [
                    { id: "c-1" },
                    { id: "c-2" },
                    { id: "c-3" },
                    { id: "c-4" },
                    { id: "c-5" },
                    { id: "c-6" },
                    { id: "c-7" },
                    { id: "c-8" },
                    { id: "c-9" },
                    { id: "c-10" },
                    { id: "c-11" },
                    { id: "c-12" },
                    { id: "c-13" },
                    { id: "c-14" },
                    { id: "c-15" },
                    { id: "c-16" },
                ],
            },
        ],
    },
    {
        name: "Theater 3",
        sists: [
            {
                columns: 5,
                rows: 6,
                sits: [
                    { id: "d-1" },
                    { id: "d-2" },
                    { id: "d-3" },
                    { id: "d-4" },
                    { id: "d-5" },
                    { id: "d-6" },
                    { id: "d-7" },
                    { id: "d-8" },
                    { id: "d-9" },
                    { id: "d-10" },
                    { id: "d-11" },
                    { id: "d-12" },
                    { id: "d-13" },
                    { id: "d-14" },
                    { id: "d-15" },
                    { id: "d-16" },
                    { id: "d-17" },
                    { id: "d-18" },
                    { id: "d-19" },
                    { id: "d-20" },
                    { id: "d-21" },
                    { id: "d-22" },
                ],
            },
        ],
    },
    {
        name: "Theater 4",
        sists: [
            {
                columns: 6,
                rows: 3,
                sits: [
                    { id: "e-1" },
                    { id: "e-2" },
                    { id: "e-3" },
                    { id: "e-4" },
                    { id: "e-5" },
                    { id: "e-6" },
                    { id: "e-7" },
                    { id: "e-8" },
                    { id: "e-9" },
                    { id: "e-10" },
                    { id: "e-11" },
                    { id: "e-12" },
                    { id: "e-13" },
                    { id: "e-14" },
                    { id: "e-15" },
                    { id: "e-16" },
                    { id: "e-17" },
                    { id: "e-18" },
                ],
            },
        ],
    },
    {
        name: "Theater 5",
        sists: [
            {
                columns: 2,
                rows: 6,
                sits: [
                    { id: "f-1" },
                    { id: "f-2" },
                    { id: "f-3" },
                    { id: "f-4" },
                    { id: "f-5" },
                    { id: "f-6" },
                    { id: "f-7" },
                    { id: "f-8" },
                    { id: "f-9" },
                    { id: "f-10" },
                    { id: "f-11" },
                    { id: "f-12" },
                ],
            },
        ],
    },
];

db = db.getSiblingDB("ddd");

const movieIds = db.movies.insertMany(movies).insertedIds;
const theaterIds = db.theaters.insertMany(theaters).insertedIds;

const schedules = [
    {
        date: "2024-10-24",
        movieId: movieIds[0],
    },
    {
        date: "2024-10-25",
        movieId: movieIds[1],
    },
    {
        date: "2024-10-26",
        movieId: movieIds[2],
    },
    {
        date: "2024-10-27",
        movieId: movieIds[3],
    },
    {
        date: "2024-10-28",
        movieId: movieIds[4],
    },
];

const scheduleIds = db.schedules.insertMany(schedules).insertedIds;

const hours = [
    {
        hour: "14:00:00",
        dayScheduleId: scheduleIds[0],
        theaterId: theaterIds[0],
        price: 40.1,
        reservedSeats: [],
        isAvailable: true,
    },
    {
        hour: "17:30:00",
        dayScheduleId: scheduleIds[0],
        theaterId: theaterIds[0],
        price: 40.1,
        reservedSeats: [],
        isAvailable: true,
    },
    {
        hour: "21:00:00",
        dayScheduleId: scheduleIds[0],
        theaterId: theaterIds[0],
        price: 40.1,
        reservedSeats: [],
        isAvailable: true,
    },
    {
        hour: "15:00:00",
        dayScheduleId: scheduleIds[1],
        theaterId: theaterIds[1],
        price: 35.5,
        reservedSeats: [],
        isAvailable: true,
    },
    {
        hour: "18:30:00",
        dayScheduleId: scheduleIds[1],
        theaterId: theaterIds[1],
        price: 35.5,
        reservedSeats: [],
        isAvailable: true,
    },
    {
        hour: "22:00:00",
        dayScheduleId: scheduleIds[1],
        theaterId: theaterIds[1],
        price: 35.5,
        reservedSeats: [],
        isAvailable: true,
    },
    {
        hour: "12:00:00",
        dayScheduleId: scheduleIds[2],
        theaterId: theaterIds[2],
        price: 30.0,
        reservedSeats: [],
        isAvailable: true,
    },
    {
        hour: "16:15:00",
        dayScheduleId: scheduleIds[2],
        theaterId: theaterIds[2],
        price: 30.0,
        reservedSeats: [],
        isAvailable: true,
    },
    {
        hour: "20:30:00",
        dayScheduleId: scheduleIds[2],
        theaterId: theaterIds[2],
        price: 30.0,
        reservedSeats: [],
        isAvailable: true,
    },
];

db.hours.insertMany(hours);
