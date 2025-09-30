#!/bin/bash

# Tea Shop Environment Setup Script
# This script creates local .env files from examples

echo "🔧 Setting up local environment files..."
echo "========================================"

# Backend setup
echo "📦 Setting up backend environment..."
if [ ! -f "backend/.env" ]; then
    cp backend/env.local.example backend/.env
    echo "✅ Created backend/.env from example"
    echo "⚠️  Please edit backend/.env with your local database credentials"
else
    echo "✅ backend/.env already exists"
fi

# Frontend setup
echo "📦 Setting up frontend environment..."
if [ ! -f "frontend/.env.local" ]; then
    cp frontend/env.local.example frontend/.env.local
    echo "✅ Created frontend/.env.local from example"
    echo "⚠️  Please edit frontend/.env.local with your Google Client Secret"
else
    echo "✅ frontend/.env.local already exists"
fi

echo ""
echo "🎯 Next steps:"
echo "1. Edit backend/.env with your local PostgreSQL credentials"
echo "2. Edit frontend/.env.local with your Google Client Secret"
echo "3. Run 'npm install' in both backend and frontend directories"
echo "4. Start backend: cd backend && npm start"
echo "5. Start frontend: cd frontend && npm start"
echo ""
echo "🔒 Security: All .env files are ignored by git"
echo "✅ Safe to commit and push your code!"
