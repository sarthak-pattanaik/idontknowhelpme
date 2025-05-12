#!/bin/bash

echo "🚀 Starting static preview mode..."

# Create a temporary directory for static preview
TEMP_DIR="static-preview"
mkdir -p $TEMP_DIR

# Copy our static demo page to the temp directory
cp static-index.html $TEMP_DIR/index.html

# Create basic CSS for the preview
echo "
body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}
.static-banner {
  background-color: #fef3c7;
  color: #92400e;
  text-align: center;
  padding: 12px;
  font-weight: 500;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.main-content {
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
}
.button {
  display: inline-block;
  background-color: #0ea5e9;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
}
.footer {
  background-color: #f3f4f6;
  padding: 24px;
  text-align: center;
  margin-top: 32px;
}
" > $TEMP_DIR/style.css

# Start a simple HTTP server
echo "🌐 Starting static preview server on http://localhost:8000"
echo "Press Ctrl+C to stop the server"
cd $TEMP_DIR && python3 -m http.server 8000

# Clean up on exit
trap "echo '🧹 Cleaning up...'; rm -rf $TEMP_DIR" EXIT