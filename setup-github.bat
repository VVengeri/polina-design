@echo off
echo ========================================
echo   Polina Design - GitHub Setup
echo ========================================
echo.

echo Введите ваш GitHub username:
set /p GITHUB_USERNAME=

echo.
echo Подключение к GitHub репозиторию...
git remote add origin https://github.com/%GITHUB_USERNAME%/polina-design.git

echo.
echo Отправка кода на GitHub...
git push -u origin main

echo.
echo ========================================
echo   Готово! 
echo ========================================
echo.
echo Ваш сайт будет доступен по адресу:
echo https://%GITHUB_USERNAME%.github.io/polina-design/
echo.
echo Не забудьте:
echo 1. Настроить GitHub Pages (Settings ^> Pages ^> GitHub Actions)
echo 2. Добавить GEMINI_API_KEY в секреты (Settings ^> Secrets)
echo.
pause
