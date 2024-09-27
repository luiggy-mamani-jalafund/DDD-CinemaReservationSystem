# DDD-CinemaReservationSystem

| Members  |
|----------|
| Luiggy Mamani Condori |
| Salet Yasmin Gutierrez Nava |

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
