#!/bin/bash

echo "Building idkhelpme in static mode..."

# Copy static index.html to main index
cp static-index.html index.html

# Set static mode and build
VITE_STATIC_MODE=true npm run build

# Ensure proper routing
cp dist/index.html dist/404.html

echo "Build complete! Deployment files are in the dist directory."