# Production Docker image for the Vite + React app
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency manifests first and install dependencies
COPY package*.json ./
RUN npm install --production=false

# Copy source and build
COPY . .
RUN npm run build

# Production image
FROM nginx:stable-alpine AS production

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose default HTTP port
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
