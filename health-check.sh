#!/bin/bash

# Project Health Check Script for Casino Content Portal

echo "🎰 Casino Content Portal - Health Check"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the project root directory"
    echo "Please run this script from the casino-content-portal directory"
    exit 1
fi

echo "✅ Project directory found"

# Check backend
echo ""
echo "🔍 Checking Backend..."
if [ -d "backend" ]; then
    echo "✅ Backend directory exists"
    if [ -f "backend/package.json" ]; then
        echo "✅ Backend package.json exists"
        if [ -d "backend/node_modules" ]; then
            echo "✅ Backend dependencies installed"
        else
            echo "⚠️  Backend dependencies not installed. Run: cd backend && npm install"
        fi
    else
        echo "❌ Backend package.json missing"
    fi
else
    echo "❌ Backend directory missing"
fi

# Check frontend
echo ""
echo "🔍 Checking Frontend..."
if [ -d "frontend" ]; then
    echo "✅ Frontend directory exists"
    if [ -f "frontend/package.json" ]; then
        echo "✅ Frontend package.json exists"
        if [ -d "frontend/node_modules" ]; then
            echo "✅ Frontend dependencies installed"
        else
            echo "⚠️  Frontend dependencies not installed. Run: cd frontend && npm install"
        fi
    else
        echo "❌ Frontend package.json missing"
    fi
    
    # Check critical files
    if [ -f "frontend/src/react-app-env.d.ts" ]; then
        echo "✅ React app environment file exists"
    else
        echo "❌ React app environment file missing"
    fi
    
    if [ -f "frontend/tsconfig.json" ]; then
        echo "✅ TypeScript config exists"
    else
        echo "❌ TypeScript config missing"
    fi
else
    echo "❌ Frontend directory missing"
fi

# Check if ports are available
echo ""
echo "🔍 Checking Ports..."
if lsof -i :3000 > /dev/null 2>&1; then
    echo "⚠️  Port 3000 is already in use"
else
    echo "✅ Port 3000 is available"
fi

if lsof -i :5000 > /dev/null 2>&1; then
    echo "⚠️  Port 5000 is already in use"
else
    echo "✅ Port 5000 is available"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Install dependencies: npm run install:all"
echo "2. Start development: npm run dev"
echo "3. Run tests: npm test"
echo ""
echo "For more help, check the README.md file"
