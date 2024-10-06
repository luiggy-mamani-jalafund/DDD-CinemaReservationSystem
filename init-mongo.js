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

function generateSeat(id) {
    return {
        seatId: id,
    };
}

function generateSeats(columns, rows, commonId) {
    let totalOfSeats = columns * rows;
    let seats = [];
    let uniqueId;
    let seatId;
    for (let i = 0; i < totalOfSeats; i++) {
        uniqueId = i + 1;
        seatId = commonId.concat("-").concat(uniqueId.toString());
        seats[i] = generateSeat(seatId);
    }

    return {
        columns: columns,
        rows: rows,
        seats: seats,
    };
}

const theaters = [
    {
        name: "Theater 1",
        seatingSet: [
            generateSeats(3, 3, "theater-one-a"),
            generateSeats(3, 4, "theater-one-b"),
            generateSeats(2, 1, "theater-one-c"),
            generateSeats(3, 4, "theater-one-d"),
            generateSeats(3, 3, "theater-one-e"),
        ],
    },
    {
        name: "Theater 2",
        seatingSet: [
            generateSeats(3, 3, "theater-two-a"),
            generateSeats(3, 4, "theater-two-b"),
            generateSeats(3, 3, "theater-two-c"),
        ],
    },
    {
        name: "Theater 3",
        seatingSet: [
            generateSeats(5, 6, "theater-three-a"),
            generateSeats(10, 8, "theater-three-b"),
            generateSeats(5, 6, "theater-three-c"),
        ],
    },
    {
        name: "Theater 4",
        seatingSet: [
            generateSeats(5, 6, "theater-four-a"),
            generateSeats(10, 8, "theater-four-b"),
            generateSeats(2, 1, "theater-four-c"),
            generateSeats(10, 8, "theater-four-d"),
            generateSeats(5, 6, "theater-four-e"),
        ],
    },
    {
        name: "Theater 5",
        seatingSet: [
            generateSeats(2, 4, "theater-five-a"),
            generateSeats(5, 8, "theater-five-b"),
            generateSeats(2, 1, "theater-five-c"),
            generateSeats(5, 8, "theater-five-d"),
            generateSeats(2, 4, "theater-five-e"),
        ],
    },
];

function generateDaySchedule(day, movieId) {
    return {
        date: day,
        movieId: movieId,
    };
}

function generateDaySchedules(movieIds) {
    return [
        generateDaySchedule("2024-10-24", movieIds[0]),
        generateDaySchedule("2024-10-25", movieIds[1]),
        generateDaySchedule("2024-10-26", movieIds[2]),
        generateDaySchedule("2024-10-27", movieIds[3]),
        generateDaySchedule("2024-10-28", movieIds[4]),
        generateDaySchedule("2024-10-29", movieIds[5]),
        generateDaySchedule("2024-11-21", movieIds[6]),
        generateDaySchedule("2024-11-22", movieIds[7]),
        generateDaySchedule("2024-11-23", movieIds[8]),
        generateDaySchedule("2024-11-25", movieIds[9]),
        generateDaySchedule("2024-11-26", movieIds[10]),
        generateDaySchedule("2024-11-27", movieIds[11]),
        generateDaySchedule("2024-12-12", movieIds[12]),
        generateDaySchedule("2024-12-13", movieIds[13]),
        generateDaySchedule("2024-12-14", movieIds[14]),
        generateDaySchedule("2024-12-15", movieIds[15]),
        generateDaySchedule("2024-12-16", movieIds[16]),
        generateDaySchedule("2024-12-17", movieIds[17]),
        generateDaySchedule("2024-12-18", movieIds[18]),
        generateDaySchedule("2024-12-19", movieIds[19]),
    ];
}

function getRandomSeatIds(theater, maxSeats = 15) {
    const allSeats = theater.seatingSet.flatMap(set => set.seats.map(seat => seat.seatId));
    const shuffledSeats = allSeats.sort(() => Math.random() - 0.5);
    
    return shuffledSeats.slice(0, maxSeats);
}

function generateHourSchedule(hour, dayScheduleId, theaterId, theater, price) {
    return {
        hour: hour,
        dayScheduleId: dayScheduleId,
        theaterId: theaterId,
        price: price,
        reservedSeats: getRandomSeatIds(theater, 15),
        isAvailable: true,
    };
}

function generateHourSchedules(scheduleIds, theaterIds, theaters) {
    return [
        generateHourSchedule("14:00:00", scheduleIds[0], theaterIds[0], theaters[0], 40.1),
        generateHourSchedule("17:30:00", scheduleIds[0], theaterIds[1], theaters[1], 45.1),
        generateHourSchedule("21:30:00", scheduleIds[0], theaterIds[2], theaters[2], 46.1),

        generateHourSchedule("14:00:00", scheduleIds[1], theaterIds[1], theaters[1], 40.1),
        generateHourSchedule("21:30:00", scheduleIds[1], theaterIds[3], theaters[3], 46.1),

        generateHourSchedule("09:30:00", scheduleIds[2], theaterIds[3], theaters[3], 35.5),
        generateHourSchedule("12:30:00", scheduleIds[2], theaterIds[4], theaters[4], 35.5),
        generateHourSchedule("17:00:00", scheduleIds[2], theaterIds[0], theaters[0], 35.5),

        generateHourSchedule("09:30:00", scheduleIds[3], theaterIds[0], theaters[0], 45.5),
        generateHourSchedule("12:30:00", scheduleIds[3], theaterIds[2], theaters[2], 45.9),

        generateHourSchedule("10:30:00", scheduleIds[4], theaterIds[1], theaters[1], 45.5),
        generateHourSchedule("14:30:00", scheduleIds[4], theaterIds[2], theaters[2], 45.9),

        generateHourSchedule("12:30:00", scheduleIds[5], theaterIds[0], theaters[0], 45.5),
        generateHourSchedule("17:30:00", scheduleIds[5], theaterIds[3], theaters[3], 45.9),

        generateHourSchedule("11:30:00", scheduleIds[6], theaterIds[1], theaters[1], 45.5),
        generateHourSchedule("13:30:00", scheduleIds[6], theaterIds[4], theaters[4], 45.9),

        generateHourSchedule("15:30:00", scheduleIds[7], theaterIds[3], theaters[3], 45.5),
        generateHourSchedule("18:30:00", scheduleIds[7], theaterIds[1], theaters[1], 45.9),

        generateHourSchedule("09:30:00", scheduleIds[8], theaterIds[2], theaters[2], 45.5),
        generateHourSchedule("12:30:00", scheduleIds[8], theaterIds[3], theaters[3], 45.9),

        generateHourSchedule("10:30:00", scheduleIds[9], theaterIds[2], theaters[2], 45.5),
        generateHourSchedule("12:30:00", scheduleIds[9], theaterIds[4], theaters[4], 45.9),

        generateHourSchedule("15:30:00", scheduleIds[10], theaterIds[1], theaters[1], 45.5),
        generateHourSchedule("20:30:00", scheduleIds[10], theaterIds[4], theaters[4], 45.9),

        generateHourSchedule("20:30:00", scheduleIds[11], theaterIds[3], theaters[3], 45.5),
        generateHourSchedule("21:30:00", scheduleIds[11], theaterIds[0], theaters[0], 45.9),

        generateHourSchedule("10:30:00", scheduleIds[12], theaterIds[2], theaters[2], 45.5),
        generateHourSchedule("12:30:00", scheduleIds[12], theaterIds[1], theaters[1], 45.9),

        generateHourSchedule("08:30:00", scheduleIds[13], theaterIds[1], theaters[1], 45.5),
        generateHourSchedule("11:30:00", scheduleIds[13], theaterIds[4], theaters[4], 45.9),

        generateHourSchedule("11:30:00", scheduleIds[14], theaterIds[3], theaters[3], 45.5),
        generateHourSchedule("10:30:00", scheduleIds[14], theaterIds[0], theaters[0], 45.9),

        generateHourSchedule("11:30:00", scheduleIds[15], theaterIds[2], theaters[2], 45.5),
        generateHourSchedule("12:30:00", scheduleIds[15], theaterIds[1], theaters[1], 45.9),

        generateHourSchedule("09:30:00", scheduleIds[16], theaterIds[3], theaters[3], 45.5),
        generateHourSchedule("15:30:00", scheduleIds[16], theaterIds[4], theaters[4], 45.9),

        generateHourSchedule("11:30:00", scheduleIds[17], theaterIds[0], theaters[0], 45.5),
        generateHourSchedule("18:30:00", scheduleIds[17], theaterIds[1], theaters[1], 45.9),

        generateHourSchedule("13:30:00", scheduleIds[18], theaterIds[0], theaters[0], 45.5),
        generateHourSchedule("19:30:00", scheduleIds[18], theaterIds[4], theaters[4], 45.9),

        generateHourSchedule("12:30:00", scheduleIds[19], theaterIds[3], theaters[3], 45.5),
        generateHourSchedule("20:30:00", scheduleIds[19], theaterIds[0], theaters[0], 45.9),
    ];
}

const purchase =
    [{
        hourScheduleId: null,
        reservedSeats: [],
        createdAt: null,
        client: {
            ci: null,
            fullName: null,
            email: null,
    },
}];


db = db.getSiblingDB("ddd");

const movieIds = db.movies.insertMany(movies).insertedIds;
const theaterIds = db.theaters.insertMany(theaters).insertedIds;

const schedules = generateDaySchedules(movieIds);

const scheduleIds = db.schedules.insertMany(schedules).insertedIds;

const hours = generateHourSchedules(scheduleIds, theaterIds, theaters);

const purchaseIds = db.purchase.insertMany(purchase).insertedIds;

db.hours.insertMany(hours);