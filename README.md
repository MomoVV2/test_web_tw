# Hi from Hamburg - lightweight test website

This repository contains a very small static website that can run in Docker (ideal for a UGREEN NAS Docker setup).

## Build

```bash
docker build -t hi-from-hamburg:latest .
```

## Run

```bash
docker run --rm -p 8080:80 --name hi-from-hamburg hi-from-hamburg:latest
```

Open `http://<your-nas-ip>:8080` (or `http://localhost:8080` when running locally).

## UGREEN NAS tips

1. Upload this folder to the NAS.
2. In Docker/Container Manager on the NAS, build an image from this folder (or use CLI build command above).
3. Run a container from the image and map NAS port `8080` (or any free port) to container port `80`.
4. Optional: set restart policy to `unless-stopped` for persistent availability.
