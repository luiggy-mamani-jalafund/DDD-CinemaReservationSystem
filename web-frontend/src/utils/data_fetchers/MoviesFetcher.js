export async function fetchSingleMovie(movieId) {
    return {
        _id: "somemovieid",
        title: "Inception",
        description:
            "A thief who steals secrets from dreams is offered the chance to erase his past as payment for a job he must do.",
        image: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
        duration: 148,
        genre: "Science Fiction",
        isActive: true,
    };
}

export async function fetchAvailableMovies() {
    const movies = [
        {
            title: "Inception",
            description:
                "A thief who steals secrets from dreams is offered the chance to erase his past as payment for a job he must do.",
            image: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
            duration: 148,
            genre: "Science Fiction",
            isActive: true,
        },
        {
            title: "The Godfather",
            description:
                "The story of the Corleone crime family and its matriarch, as they fight to maintain their power and legacy in the criminal world.",
            image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
            duration: 175,
            genre: "Crime",
            isActive: true,
        },
        {
            title: "The Shawshank Redemption",
            description:
                "A banker is sentenced to life in a maximum security prison and forms an unexpected friendship with a fellow inmate.",
            image: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
            duration: 142,
            genre: "Drama",
            isActive: true,
        },
        {
            title: "Pulp Fiction",
            description:
                "A series of interconnected stories about the lives of criminals in Los Angeles, intertwined with humor and violence.",
            image: "https://es.web.img3.acsta.net/img/05/66/05663f00b8b5df58b003aaf5c46ef8ad.jpg",
            duration: 154,
            genre: "Crime",
            isActive: true,
        },
        {
            title: "The Dark Knight",
            description:
                "Batman faces the Joker, an anarchic criminal who throws Gotham City into chaos.",
            image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            duration: 152,
            genre: "Action",
            isActive: true,
        },
        {
            title: "Forrest Gump",
            description:
                "The life of a man with a low IQ who becomes a witness to several historical events in the United States.",
            image: "https://m.media-amazon.com/images/S/pv-target-images/f9ddd832d1b566f5b8dd29a4dbc76b7531c420c8c8d9fdfe94eca128bda8e2b1.jpg",
            duration: 142,
            genre: "Drama",
            isActive: true,
        },
        {
            title: "Interstellar",
            description:
                "A group of explorers travel through a wormhole in search of a new home for humanity.",
            image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
            duration: 169,
            genre: "Science Fiction",
            isActive: true,
        },
        {
            title: "The Matrix",
            description:
                "A programmer discovers that the reality he knows is a simulation created by machines that control humanity.",
            image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
            duration: 136,
            genre: "Action",
            isActive: true,
        },
        {
            title: "Gladiator",
            description:
                "A Roman general is betrayed and reduced to slavery, fighting for revenge and justice in the arena.",
            image: "https://www.originalfilmart.com/cdn/shop/products/gladiator_2000_teaser_original_film_art_5000x.jpg?v=1610420463",
            duration: 155,
            genre: "Action",
            isActive: true,
        },
        {
            title: "Titanic",
            description:
                "A love story between two young people from different social classes aboard the famous ocean liner.",
            image: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg",
            duration: 195,
            genre: "Romance",
            isActive: true,
        },
        {
            title: "Avatar",
            description:
                "On an alien world, an ex-marine infiltrates a native tribe and finds himself torn between two worlds.",
            image: "https://es.web.img3.acsta.net/pictures/22/08/30/12/42/0535062.jpg",
            duration: 162,
            genre: "Ciencia ficción",
            isActive: true,
        },
        {
            title: "Fight Club",
            description:
                "A disillusioned man creates an underground fight club as a way to find meaning in his life.",
            image: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
            duration: 139,
            genre: "Drama",
            isActive: true,
        },
        {
            title: "The Silence of the Lambs",
            description:
                "A young FBI agent seeks the help of an imprisoned serial killer to catch another killer on the loose.",
            image: "https://s3.amazonaws.com/criterion-production/films/46014912ca0c20592c472f5bbe33e4f8/L9AQ95Y7z2vOIUf1ntwvpZsZx3kp8B_original.jpg",
            duration: 138,
            genre: "Thriller",
            isActive: true,
        },
        {
            title: "Saving Private Ryan",
            description:
                "A group of soldiers embark on a mission to rescue a paratrooper after the Normandy landings.",
            image: "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_.jpg",
            duration: 169,
            genre: "Guerra",
            isActive: true,
        },
        {
            title: "Jurassic Park",
            description:
                "A theme park housing cloned dinosaurs turns into a nightmare when the animals escape.",
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f00bf346385235.58520f9022451.jpg",
            duration: 127,
            genre: "Aventura",
            isActive: true,
        },
        {
            title: "The Social Network",
            description:
                "The story of the creation of Facebook and the legal disputes that arose between its founders.",
            image: "https://www.videoexpress.be/wp-content/uploads/2019/05/kuq7PstzRa7Sau4DzXvuaKw3zY8.jpg",
            duration: 120,
            genre: "Biografía",
            isActive: true,
        },
        {
            title: "The Lion King",
            description:
                "The story of a young lion who must reclaim his place as king after the death of his father.",
            image: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
            duration: 88,
            genre: "Animación",
            isActive: true,
        },
        {
            title: "WALL-E",
            description:
                "A tiny cleaning robot in a bleak future embarks on an adventure that could save the planet.",
            image: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
            duration: 98,
            genre: "Animación",
            isActive: true,
        },
        {
            title: "Schindler's List",
            description:
                "German businessman saves over 1,000 Jews during Holocaust by creating list of essential workers",
            image: "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg",
            duration: 195,
            genre: "Historia",
            isActive: true,
        },
        {
            title: "The Avengers",
            description:
                "A group of superheroes unite to face a threat that endangers the world.",
            image: "https://files.ekmcdn.com/allwallpapers/images/mural-wallpaper-avengers-movie-poster-37221-1-p.jpg",
            duration: 143,
            genre: "Acción",
            isActive: true,
        },
    ];

    return movies.map((movie) => {
        return {
            _id: "somemovieid",
            ...movie,
        };
    });
}
