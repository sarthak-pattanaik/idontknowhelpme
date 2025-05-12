#!/bin/bash

echo "🚀 Starting static build process..."

# Create dist directory if it doesn't exist
mkdir -p dist/static

# Build the client with static environment
echo "📦 Building client application in static mode..."
echo "Using .env.static configuration for static mode"
cp .env.static .env.production.local
npm run build

# Check if build succeeded
if [ ! -d "dist/public" ]; then
  echo "❌ Build failed! dist/public directory not found"
  exit 1
fi

# Copy public assets to static directory
echo "📂 Copying public assets..."
cp -r public/* dist/static/

# Copy build output to static directory
echo "📂 Copying build output..."
cp -r dist/public/* dist/static/

# Create static.json for hosting platforms
echo "📝 Creating static.json for deployment..."
echo '{ 
  "root": "./dist/static", 
  "clean_urls": true, 
  "routes": { 
    "/**": "index.html" 
  } 
}' > static.json

# Create robots.txt if it doesn't exist
echo "📝 Creating robots.txt..."
echo 'User-agent: *
Allow: /
Sitemap: https://idkhelpme.com/sitemap.xml' > dist/static/robots.txt

# Create basic sitemap.xml
echo "📝 Creating sitemap.xml..."
echo '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://idkhelpme.com/</loc>
    <lastmod>'$(date +%Y-%m-%d)'</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/product/homemaker</loc>
    <lastmod>'$(date +%Y-%m-%d)'</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/product/intelligence</loc>
    <lastmod>'$(date +%Y-%m-%d)'</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/product/snipper</loc>
    <lastmod>'$(date +%Y-%m-%d)'</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/product/signals</loc>
    <lastmod>'$(date +%Y-%m-%d)'</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>' > dist/static/sitemap.xml

# Copy index.html to 404.html for SPA routing
if [ -f "dist/static/index.html" ]; then
  cp dist/static/index.html dist/static/404.html
  echo "📄 Created 404.html for SPA routing"
else
  echo "⚠️ Warning: Could not find index.html in dist/static/"
fi

echo "✅ Static build completed successfully!"
echo "📁 Output directory: dist/static"
echo "🌐 To preview: cd dist/static && npx serve"