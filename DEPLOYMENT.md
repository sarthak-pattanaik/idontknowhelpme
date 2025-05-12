# idkhelpme - Static Deployment Guide

This document provides instructions for deploying the idkhelpme SaaS marketing website as a static site.

## Overview

The idkhelpme platform can be deployed in two ways:
1. **Full-stack deployment** - with Express backend and PostgreSQL database
2. **Static deployment** - frontend only, using mock API responses

This guide focuses on the static deployment option, which is simpler to set up and doesn't require a backend server.

## Static Deployment Steps

### Option 1: Deploy on Netlify

1. Connect your GitHub repository to Netlify
2. Configure the build settings:
   - Build command: `node static-build.js && npm run build && cp static-index.html dist/index.html`
   - Publish directory: `dist`
3. Add the following environment variables:
   - `VITE_STATIC_MODE=true`
   - `VITE_APP_NAME=idkhelpme`
   - `VITE_API_URL=https://api.idkhelpme.com` (if you have a real API)

### Option 2: Deploy on Vercel

1. Connect your GitHub repository to Vercel
2. The deployment will use the configuration in `vercel.json`
3. No additional configuration is needed

### Option 3: Manual Deployment

1. Run the static build:
   ```
   npm run build:static
   ```
2. This will create a `dist` folder with all the static files
3. Upload the contents of the `dist` folder to any static hosting service (GitHub Pages, AWS S3, etc.)

## Static Mode Features

In static mode, the following features are available:
- Full marketing website with all pages
- Product showcase and information
- Simulated authentication flow
- Mock product interfaces

Note: Real API functionality (data persistence, user accounts, etc.) requires the full-stack deployment.

## Testing Static Mode Locally

You can test the static mode locally before deploying:

1. Start the development server with the static flag:
   ```
   npm run dev:static
   ```
2. Or add `?static=true` to any URL, e.g., `http://localhost:5000/?static=true`

## Troubleshooting

If you encounter issues with the static deployment:

1. Check that `VITE_STATIC_MODE` is set to `true`
2. Ensure the `static-index.html` file is copied to the `dist` folder
3. For routing issues, make sure your hosting provider supports SPA redirects (all routes to index.html)