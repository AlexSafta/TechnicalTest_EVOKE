# Project Health Check Script for Casino Content Portal (Windows)

Write-Host "🎰 Casino Content Portal - Health Check" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: Not in the project root directory" -ForegroundColor Red
    Write-Host "Please run this script from the casino-content-portal directory" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Project directory found" -ForegroundColor Green

# Check backend
Write-Host ""
Write-Host "🔍 Checking Backend..." -ForegroundColor Yellow
if (Test-Path "backend") {
    Write-Host "✅ Backend directory exists" -ForegroundColor Green
    if (Test-Path "backend/package.json") {
        Write-Host "✅ Backend package.json exists" -ForegroundColor Green
        if (Test-Path "backend/node_modules") {
            Write-Host "✅ Backend dependencies installed" -ForegroundColor Green
        } else {
            Write-Host "⚠️  Backend dependencies not installed. Run: cd backend && npm install" -ForegroundColor Yellow
        }
    } else {
        Write-Host "❌ Backend package.json missing" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Backend directory missing" -ForegroundColor Red
}

# Check frontend
Write-Host ""
Write-Host "🔍 Checking Frontend..." -ForegroundColor Yellow
if (Test-Path "frontend") {
    Write-Host "✅ Frontend directory exists" -ForegroundColor Green
    if (Test-Path "frontend/package.json") {
        Write-Host "✅ Frontend package.json exists" -ForegroundColor Green
        if (Test-Path "frontend/node_modules") {
            Write-Host "✅ Frontend dependencies installed" -ForegroundColor Green
        } else {
            Write-Host "⚠️  Frontend dependencies not installed. Run: cd frontend && npm install" -ForegroundColor Yellow
        }
    } else {
        Write-Host "❌ Frontend package.json missing" -ForegroundColor Red
    }
    
    # Check critical files
    if (Test-Path "frontend/src/react-app-env.d.ts") {
        Write-Host "✅ React app environment file exists" -ForegroundColor Green
    } else {
        Write-Host "❌ React app environment file missing" -ForegroundColor Red
    }
    
    if (Test-Path "frontend/tsconfig.json") {
        Write-Host "✅ TypeScript config exists" -ForegroundColor Green
    } else {
        Write-Host "❌ TypeScript config missing" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Frontend directory missing" -ForegroundColor Red
}

# Check if ports are available
Write-Host ""
Write-Host "🔍 Checking Ports..." -ForegroundColor Yellow
try {
    $port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
    if ($port3000) {
        Write-Host "⚠️  Port 3000 is already in use" -ForegroundColor Yellow
    } else {
        Write-Host "✅ Port 3000 is available" -ForegroundColor Green
    }
} catch {
    Write-Host "✅ Port 3000 is available" -ForegroundColor Green
}

try {
    $port5000 = Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue
    if ($port5000) {
        Write-Host "⚠️  Port 5000 is already in use" -ForegroundColor Yellow
    } else {
        Write-Host "✅ Port 5000 is available" -ForegroundColor Green
    }
} catch {
    Write-Host "✅ Port 5000 is available" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎯 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Install dependencies: npm run install:all" -ForegroundColor White
Write-Host "2. Start development: npm run dev" -ForegroundColor White
Write-Host "3. Run tests: npm test" -ForegroundColor White
Write-Host ""
Write-Host "For more help, check the README.md file" -ForegroundColor White
