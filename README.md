# DDD-CinemaReservationSystem

| Members                     |
| --------------------------- |
| Luiggy Mamani Condori       |
| Salet Yasmin Gutierrez Nava |
| Axel Ayala Siles            |

## How to render the C4 (.dsl files)?

Please copy the file and paste it into [Structrizr's Editor](https://structurizr.com/dsl)

## How to run docker compose in different environments?

### Run this command for _dev environment:_

```bash
docker compose -f docker-compose.dev.yml up -d
```

-   If you want to manage the database from UI, go to [localhost:8081](http://localhost:8081)

### Run this command for _production environment:_

```bash
docker compose up -d
```

---

## Caching 🛢️🚀

1. Redis Integration via Docker Compose

Redis was added to the existing Docker Compose setup to provide a high-performance in-memory data store for caching. The configuration includes:

```
redis:
  image: redis:6.2-alpine
  restart: on-failure
  ports:
    - "6379:6379"
  volumes:
    - redis-data:/data
```

This ensures Redis runs alongside MongoDB in the development environment, enabling seamless caching integration.  
2. Cached Endpoints

The following endpoints leverage Redis caching to improve response times and reduce database queries:  
a. Active Movies `(GET /api/movie/active)`

    Cache Key : active_movies
    Expiration : 5 minutes
    Rationale : Frequently accessed by users to view current listings. Caching avoids repeated database queries for static data.


b. Movie Details `(GET /api/movie/{movieId})`

    Cache Key : movie_{movieId}
    Expiration : 10 minutes
    Rationale : Reduces load for individual movie details, which rarely change during active status.


c. Showtimes by Movie `(GET /api/showtime/movie/{movieId})`

    Cache Key : showtimes_movie_{movieId}
    Expiration : 5 minutes
    Rationale : Aggregates schedules, hours, and seat availability, which are expensive to compute. Caching ensures faster responses for users browsing showtimes.


3. Cache Invalidation for Purchases

When a seat is reserved `(POST /api/purchase/confirmPurchase)`, the system invalidates the relevant cached showtimes to reflect updated seat availability:  
How It Works :

    Purchase Flow :
        A user reserves seats for a specific showtime (linked to a Hour entity).
        The Hour entity’s ReservedSeats list is updated in MongoDB.
        The system retrieves the associated Schedule (via Hour.DayScheduleId) to identify the MovieId.


    Cache Invalidation :
        The cached showtimes for the affected movie (showtimes_movie_{movieId}) are deleted from Redis.
        Subsequent requests for that movie’s showtimes will re-fetch and re-cache fresh data, ensuring users see updated seat availability.



Why This Approach?

    Performance : Avoids frequent database queries for static or semi-static data.
    Consistency : Invalidates cached data only when necessary (e.g., after a purchase), balancing performance and data freshness.


4. Technical Implementation

    Redis Service : A RedisCacheService abstracts Redis operations (GET/SET/DELETE).  
    Asynchronous Design : Caching logic is integrated asynchronously to avoid blocking API responses.  
    Null Safety : All cached data is validated before serialization to prevent runtime errors.

This architecture ensures the system scales efficiently while maintaining responsiveness for end users.`
