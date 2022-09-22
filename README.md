# Namunēra 🍋
Fresh + Silverstripe example integration

## Getting Started 🔧
### Prerequisites ⚙️
- [Docker-Compose](https://docs.docker.com/compose/install/)
- [Deno](https://deno.land/#installation)

### Docker World 🌏
This is a general overview of the services inside of `docker-compose.yml`
- `frontend` (runs the Fresh app frontend)
- `backend` (runs the Silverstripe app backend)
- `graphql` (turns Silverstripe graphql into a typeface for frontend)
- `mysql` (database) 

### Running the Project 🏃
First off, build the project:
```bash
docker-compose build
```

Install dependencies
```bash
docker-compose run --rm backend sake dev/build
docker-compose run --rm backend composer populate
docker-compose run --rm graphql yarn codegen
```

Then run the webserver:
```bash
docker-compose up
```

Then visit http://127.0.0.1:8000 for the backend and http://127.0.0.1:3000 for the frontend.

### Cleaning Up ♻️
When you are finished developing, you stop the project with `Ctrl + C` then:
```bash
docker-compose down
```

### Useful Commands 🐳 
If you are not familiar with docker you may find these commands useful

```bash
docker-compose up # Starts the webserver
docker-compose down # Halts the webserver

docker-compose run --rm <SERVICE> <COMMMAND> # Run a command in a new container
docker-compose run --rm backend composer install # Example - run composer install on the backend

docker-compose exec <SERVICE> <COMMAND> # Run a command in an existing container
docker-compose exec frontend /bin/sh # Log into the standard shell on the frontend
```

