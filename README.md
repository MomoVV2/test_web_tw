# Hi from Hamburg (Docker website)

Lightweight static website that displays **"Hi from Hamburg!"** and runs in Docker.

## Run with Docker Compose (recommended)

This is set up so `docker compose up` builds the image (if needed) and starts it right away.

```bash
docker compose up -d
```

Default host port is a deliberately unusual one: `39081`.

Open: `http://<your-nas-ip>:39081`

### Optional: choose your own port

```bash
HAMBURG_PORT=43117 docker compose up -d
```

## Build and run without Compose

```bash
docker build -t hi-from-hamburg .
docker run -d --name hi-from-hamburg -p 39081:80 --restart unless-stopped hi-from-hamburg
```

## Stop and remove

```bash
docker compose down
```
