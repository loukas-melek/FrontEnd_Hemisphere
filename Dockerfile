# COPY . ./test-a-application
# WORKDIR /test-a-application
# RUN npm i
# RUN npm run build:prod

# FROM nginx:1.15.8-alpine 
# COPY --from=builder /font-master/dist/test-a-application/ /usr/share/nginx/html


# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:12.13.0-alpine AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm i --save && npm run build:prod

# nginx state for serving content
FROM nginx:1.15.8-alpine 
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /font-master/dist/ngx-admin-demo .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]