#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🚀 Starting static build process...');

// Build the client
console.log('📦 Building client application...');
execSync('vite build', { stdio: 'inherit' });

// Create static.json for hosting platforms
const staticConfig = {
  "root": "./dist",
  "clean_urls": true,
  "routes": {
    "/**": "index.html"
  }
};

fs.writeFileSync(
  path.join(__dirname, 'static.json'), 
  JSON.stringify(staticConfig, null, 2)
);

console.log('📝 Created static.json for deployment');

// Copy index.html to 404.html for SPA routing
try {
  const indexHtml = fs.readFileSync(path.join(__dirname, 'dist/public/index.html'));
  fs.writeFileSync(path.join(__dirname, 'dist/public/404.html'), indexHtml);
  console.log('📄 Created 404.html for SPA routing');
} catch (error) {
  console.error('Error creating 404.html:', error);
}

console.log('✅ Static build completed!');