@echo off
title Install Dependencies

echo === Installing project dependencies ===
echo This may take a few minutes...

REM Install backend dependencies
if exist backend (
    cd backend
    npm install
    cd ..
)

REM Install frontend dependencies
if exist frontend (
    cd frontend
    npm install
    cd ..
)

echo.
echo ✅ All dependencies installed successfully!
pause
