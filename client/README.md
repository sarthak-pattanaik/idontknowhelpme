# idkhelpme - Client

## Deployment Instructions for Netlify

### Prerequisites
- A Netlify account
- Git repository with your codebase
- A deployed backend API (needed for production use)

### Step 1: Clone and Prepare the Repository
1. Clone the repository to your local machine
2. Navigate to the client directory: `cd client`

### Step 2: Configure Environment Variables
1. Update `.env.production` with your backend API URL:
   ```
   VITE_API_URL=https://your-backend-api-url.com
   ```

### Step 3: Deploy to Netlify
There are multiple ways to deploy to Netlify:

#### Option 1: Deploy via Netlify UI
1. Log in to your Netlify account
2. Click "Add new site" > "Import an existing project"
3. Connect to your Git provider and select your repository
4. Configure build settings:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

#### Option 2: Deploy via Netlify CLI
1. Install the Netlify CLI: `npm install -g netlify-cli`
2. Log in to Netlify: `netlify login`
3. Initialize your site: `netlify init`
4. Follow the prompts to set up your site
5. Deploy: `netlify deploy --prod`

### Step 4: Configure Netlify for SPA Routing
For single-page applications, configure Netlify to handle client-side routing:

This is already set up in the `netlify.toml` file included in the client directory with:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Testing Your Deployment
After deployment, you should:
1. Test authentication flows
2. Verify that API requests work correctly
3. Check that all routes and navigation work as expected

### Troubleshooting
- If API requests fail, check your VITE_API_URL configuration
- For routing issues, verify the redirects in netlify.toml
- For build failures, check the Netlify deployment logs