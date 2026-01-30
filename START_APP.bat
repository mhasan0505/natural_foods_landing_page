@echo off
REM Natural Foods - Quick Start for Windows
REM Run each section in a different PowerShell terminal

echo.
echo ============================================
echo Natural Foods - Quick Start Guide
echo ============================================
echo.

echo Open 3 PowerShell windows and run these commands:
echo.

echo WINDOW 1 - MongoDB:
echo   mongod
echo.

echo WINDOW 2 - Backend:
echo   cd server
echo   pnpm install
echo   pnpm dev
echo.

echo WINDOW 3 - Frontend:
echo   pnpm install
echo   pnpm dev --host
echo.

echo ============================================
echo Then open browser at:
echo   http://localhost:5173
echo ============================================
echo.

echo Testing:
echo 1. Click "অ্যাডমিন" button
echo 2. Log in: admin123
echo 3. Create a test order
echo 4. Watch it appear in real-time!
echo.

echo Troubleshooting:
echo   Check MongoDB: mongod --version
echo   Check Backend: curl http://localhost:4000/health
echo   Check Frontend: http://localhost:5173
echo.

pause
