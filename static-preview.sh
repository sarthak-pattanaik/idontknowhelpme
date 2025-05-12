#!/bin/bash

# Static preview script
echo "Starting static preview server..."

# Create environment file for static preview
echo "VITE_STATIC_MODE=true" > .env.static

# Start preview server with static mode enabled
echo "Starting Vite preview server in static mode..."
npx http-server dist -p 4173 -o