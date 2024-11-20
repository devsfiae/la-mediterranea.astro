#!/bin/bash
echo "Building the Astro project..."
npm run build

echo "Deploying to the server..."
rsync -avz --delete ./dist/ heiko@81.169.190.112:/var/www/vhosts/la-mediterranea.eu/httpdocs

echo "Deployment completed!"