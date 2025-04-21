#!/bin/bash
set -e

# Make sure we're in the right directory
cd "$(dirname "$0")"

echo "Deploying to GitHub Pages..."

# Create a temporary directory to checkout gh-pages branch
mkdir -p tmp-gh-pages
cd tmp-gh-pages

# Initialize git and checkout gh-pages branch
git init
git remote add origin https://github.com/jcatalaamat/proyecto-salvaje.git
git checkout -b gh-pages

# Remove everything except .git
find . -maxdepth 1 ! -name .git -exec rm -rf {} \; 2>/dev/null || true

# Copy over the contents of dist/client
cp -R ../dist/client/* .

# Create .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Make sure CNAME file exists
echo "proyectosalvaje.com" > CNAME

# Commit and push
git add -A
git commit -m "Deploy website to GitHub Pages"
git push -f origin gh-pages

# Clean up
cd ..
rm -rf tmp-gh-pages

echo "Deployment complete!" 