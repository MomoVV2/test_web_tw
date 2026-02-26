# UGREEN NAS Deployment Guide

This guide will help you deploy the "Hi from Hamburg" website to your UGREEN NAS using Docker Hub.

## Prerequisites

- Docker Hub account
- SSH access to your UGREEN NAS (or web UI with Docker support)
- Project files on your local machine

## Step 1: Push to Docker Hub (from your local machine)

1. **Update your Docker Hub username in the script:**

   Edit `push-to-dockerhub.sh` and replace `yourusernamehere` with your actual Docker Hub username.

2. **Make the script executable:**
   ```bash
   chmod +x push-to-dockerhub.sh
   ```

3. **Login to Docker Hub:**
   ```bash
   docker login
   ```

4. **Build and push the image:**
   ```bash
   ./push-to-dockerhub.sh
   ```

   Optionally specify a version:
   ```bash
   ./push-to-dockerhub.sh v1.0
   ```

## Step 2: Deploy to UGREEN NAS

### Option A: Using SSH (Recommended)

1. **SSH into your UGREEN NAS:**
   ```bash
   ssh username@<your-nas-ip>
   ```

2. **Create a directory for the project:**
   ```bash
   mkdir -p ~/docker/hi-from-hamburg
   cd ~/docker/hi-from-hamburg
   ```

3. **Create the docker-compose file:**
   ```bash
   nano docker-compose.yml
   ```

   Paste this content (replace `yourusernamehere` with your Docker Hub username):
   ```yaml
   services:
     hi-from-hamburg:
       image: yourusernamehere/hi-from-hamburg:latest
       container_name: hi-from-hamburg
       ports:
         - "39081:80"
       restart: unless-stopped
   ```

   Press `Ctrl+O`, `Enter`, then `Ctrl+X` to save and exit.

4. **Pull and start the container:**
   ```bash
   docker compose pull
   docker compose up -d
   ```

5. **Check it's running:**
   ```bash
   docker ps
   ```

### Option B: Using UGREEN Web UI

1. **Open your UGREEN NAS web interface**

2. **Navigate to Docker/Container Manager**

3. **Create a new container:**
   - Image: `yourusernamehere/hi-from-hamburg:latest`
   - Container name: `hi-from-hamburg`
   - Port mapping: `39081:80`
   - Restart policy: `unless-stopped`

4. **Start the container**

## Step 3: Access the Website

Open your browser and navigate to:
```
http://<your-nas-ip>:39081
```

For example:
```
http://192.168.1.100:39081
```

## Optional: Change the Port

If you want to use a different port:

**SSH method:**
```bash
HAMBURG_PORT=8080 docker compose up -d
```

**Web UI method:**
- Edit the port mapping when creating the container
- Or edit the container settings and change the host port

## Managing the Container

### Check logs:
```bash
docker logs hi-from-hamburg
```

### Stop the container:
```bash
docker compose stop
```

### Start the container:
```bash
docker compose start
```

### Remove the container:
```bash
docker compose down
```

### Update to a new version:
```bash
docker compose pull
docker compose up -d
```

## Troubleshooting

### Can't access the website:
1. Check the container is running: `docker ps`
2. Check firewall settings on your NAS
3. Verify the port isn't already in use: `netstat -tlnp | grep 39081`
4. Check container logs: `docker logs hi-from-hamburg`

### Image won't pull:
1. Make sure you're logged in: `docker login`
2. Verify the image name matches your Docker Hub username
3. Check internet connectivity on the NAS

### Port already in use:
Change the port in docker-compose.yml (e.g., use `8080:80` instead of `39081:80`)
