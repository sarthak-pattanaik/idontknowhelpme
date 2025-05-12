#!/bin/bash

echo "🚀 Starting static build process..."

# Build the client
echo "📦 Building client application..."
npm run build

# Create static.json for hosting platforms
echo '{ 
  "root": "./dist", 
  "clean_urls": true, 
  "routes": { 
    "/**": "index.html" 
  } 
}' > static.json

echo "📝 Created static.json for deployment"

# Copy index.html to 404.html for SPA routing
if [ -f "dist/public/index.html" ]; then
  cp dist/public/index.html dist/public/404.html
  echo "📄 Created 404.html for SPA routing"
else
  echo "⚠️ Warning: Could not find index.html in dist/public/"
fi

echo "✅ Static build completed!"