@echo off
title Submit Coding Test

REM ==== Collect Student Info ====
set /p STUDENT_NAME=Enter your full name: 
set /p GITHUB_USERNAME=Enter your GitHub username: 
set /p REPO_NAME=Enter your GitHub repo name: 

REM ==== Check if Git repo exists ====
if not exist ".git" (
    echo.
    echo Initializing git repository...
    git init
    git branch -M main
    git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git
)

REM ==== Push Code to GitHub ====
echo.
echo Pushing your code to GitHub...
git add .
git commit -m "Submission by %STUDENT_NAME%"
git push -u origin main

REM ==== Send Submission to Backend ====
echo.
echo Sending submission info to backend...
curl -X POST http://localhost:5000/api/submissions ^
-H "Content-Type: application/json" ^
-d "{\"student\":\"%STUDENT_NAME%\",\"repo\":\"https://github.com/%GITHUB_USERNAME%/%REPO_NAME%\"}"

echo.
echo ✅ Submission completed successfully!
pause
