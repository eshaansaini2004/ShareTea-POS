#!/bin/bash

# Tea Shop Quick Deploy Script
# This script helps you prepare your application for deployment

echo "🚀 Tea Shop Deployment Preparation"
echo "=================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Tea Shop Application"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Create production environment files
echo "📝 Creating production environment files..."

# Backend production env
if [ ! -f "backend/.env.production" ]; then
    cp backend/env.production.example backend/.env.production
    echo "✅ Created backend/.env.production"
else
    echo "✅ backend/.env.production already exists"
fi

# Frontend production env
if [ ! -f "frontend/.env.production" ]; then
    cp frontend/env.production.example frontend/.env.production
    echo "✅ Created frontend/.env.production"
else
    echo "✅ frontend/.env.production already exists"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Push your code to GitHub:"
echo "   git remote add origin https://github.com/yourusername/tea-shop-app.git"
echo "   git push -u origin main"
echo ""
echo "2. Follow the DEPLOYMENT_GUIDE.md for detailed hosting setup"
echo ""
echo "3. Update your environment variables with real values:"
echo "   - Backend: backend/.env.production"
echo "   - Frontend: frontend/.env.production"
echo ""
echo "4. Get your API keys:"
echo "   - Google OAuth: https://console.cloud.google.com/"
echo "   - OpenWeather: https://openweathermap.org/api"
echo ""
echo "🚀 Happy deploying!"
