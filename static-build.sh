#!/bin/bash

# Static build script for idkhelpme SaaS website
echo "Starting static build process for idkhelpme..."

# Create environment file for static build
echo "Creating static environment file..."
cat > .env.static << EOL
VITE_STATIC_MODE=true
VITE_API_URL=https://api.idkhelpme.com
VITE_APP_VERSION=1.0.0
VITE_BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
EOL

# Build the application
echo "Building the application with static configuration..."
NODE_ENV=production npm run build

# Create output directory if it doesn't exist
mkdir -p dist

# Move files from dist/public to dist
echo "Organizing static files..."
cp -r dist/public/* dist/
rm -rf dist/public

# Copy static assets
echo "Copying static assets..."
cp public/* dist/
cp generated-icon.png dist/

# Create necessary static files
echo "Creating static deployment files..."

# Create a robots.txt file
cat > dist/robots.txt << EOL
User-agent: *
Allow: /
Sitemap: https://idkhelpme.com/sitemap.xml
EOL

# Create a basic sitemap
cat > dist/sitemap.xml << EOL
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://idkhelpme.com/</loc>
    <lastmod>$(date -u +"%Y-%m-%d")</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/about</loc>
    <lastmod>$(date -u +"%Y-%m-%d")</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/pricing</loc>
    <lastmod>$(date -u +"%Y-%m-%d")</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/blog</loc>
    <lastmod>$(date -u +"%Y-%m-%d")</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/product-overview</loc>
    <lastmod>$(date -u +"%Y-%m-%d")</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/homemaker-product</loc>
    <lastmod>$(date -u +"%Y-%m-%d")</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/intelligence-product</loc>
    <lastmod>$(date -u +"%Y-%m-%d")</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/signals-product</loc>
    <lastmod>$(date -u +"%Y-%m-%d")</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/snipper-product</loc>
    <lastmod>$(date -u +"%Y-%m-%d")</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/login</loc>
    <lastmod>$(date -u +"%Y-%m-%d")</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://idkhelpme.com/signup</loc>
    <lastmod>$(date -u +"%Y-%m-%d")</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
EOL

# Remove environment file
rm .env.static

echo "Static build complete! Files are available in the 'dist' directory."