#!/bin/bash
# Script to build and push the Docker image to Docker Hub

# Configuration
IMAGE_NAME="hi-from-hamburg"
# Replace with your Docker Hub username
DOCKER_HUB_USERNAME="${DOCKER_HUB_USERNAME:-shiromovv}"

echo "Building and pushing $IMAGE_NAME to Docker Hub..."
echo "Make sure you've logged in with: docker login"

# Get version (optional: use git tag or timestamp)
VERSION="${1:-latest}"
FULL_IMAGE_NAME="$DOCKER_HUB_USERNAME/$IMAGE_NAME:$VERSION"

echo "Building image: $FULL_IMAGE_NAME"
docker build -t "$FULL_IMAGE_NAME" .
docker tag "$FULL_IMAGE_NAME" "$DOCKER_HUB_USERNAME/$IMAGE_NAME:latest"

echo "Pushing to Docker Hub..."
docker push "$FULL_IMAGE_NAME"
docker push "$DOCKER_HUB_USERNAME/$IMAGE_NAME:latest"

echo "✓ Done! Image pushed to: $FULL_IMAGE_NAME"
echo ""
echo "To deploy on your NAS:"
echo "1. SSH into your UGREEN NAS"
echo "2. Run: docker pull $FULL_IMAGE_NAME"
echo "3. Use the docker-compose-nas.yml file"