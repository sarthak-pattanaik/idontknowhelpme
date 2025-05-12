
// Helper script for static builds
import fs from 'fs';
import path from 'path';

// Configuration
const config = {
  siteName: 'idkhelpme',
  siteUrl: 'https://idkhelpme.com',
  buildDate: new Date().toISOString(),
  version: '1.0.0',
};

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Generate the sitemap.xml
function generateSitemap() {
  console.log('Generating sitemap.xml...');
  
  const pages = [
    { path: '/', changeFreq: 'weekly', priority: '1.0' },
    { path: '/about', changeFreq: 'monthly', priority: '0.8' },
    { path: '/pricing', changeFreq: 'monthly', priority: '0.9' },
    { path: '/blog', changeFreq: 'weekly', priority: '0.7' },
    { path: '/product-overview', changeFreq: 'monthly', priority: '0.9' },
    { path: '/homemaker-product', changeFreq: 'monthly', priority: '0.8' },
    { path: '/intelligence-product', changeFreq: 'monthly', priority: '0.8' },
    { path: '/signals-product', changeFreq: 'monthly', priority: '0.8' },
    { path: '/snipper-product', changeFreq: 'monthly', priority: '0.8' },
    { path: '/login', changeFreq: 'monthly', priority: '0.6' },
    { path: '/signup', changeFreq: 'monthly', priority: '0.6' },
  ];
  
  const today = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${config.siteUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('dist/sitemap.xml', sitemap);
}

// Generate robots.txt
function generateRobotsTxt() {
  console.log('Generating robots.txt...');
  
  const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${config.siteUrl}/sitemap.xml`;

  fs.writeFileSync('dist/robots.txt', robotsTxt);
}

// Generate .env.static file
function generateEnvFile() {
  console.log('Generating .env.static file...');
  
  const envContent = `VITE_STATIC_MODE=true
VITE_API_URL=${config.siteUrl}/api
VITE_APP_VERSION=${config.version}
VITE_BUILD_DATE=${config.buildDate}`;

  fs.writeFileSync('.env.static', envContent);
}

// Run all tasks
function run() {
  console.log(`Starting static build process for ${config.siteName}...`);
  generateEnvFile();
  generateSitemap();
  generateRobotsTxt();
  console.log('Static build preparation complete!');
}

// Execute
run();
