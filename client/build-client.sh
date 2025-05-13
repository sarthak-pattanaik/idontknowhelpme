#!/bin/bash
# Simple build script for the client

# Make sure we're in the client directory
cd "$(dirname "$0")"

# Build just index.html and main.tsx for testing
npx vite build --outDir=dist