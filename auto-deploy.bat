@echo off
chcp 65001 >nul
echo.
echo 🚀 Polina Design - Автоматический деплой
echo =========================================
echo.

REM Проверяем package.json
if not exist "package.json" (
    echo ❌ Ошибка: package.json не найден
    echo Запустите скрипт из корневой папки проекта
    pause
    exit /b 1
)

echo 📋 Проверка git статуса...
git status --porcelain >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠️  Есть несохраненные изменения. Добавляем их...
    git add .
    git commit -m "Auto-commit before deploy"
)

echo.
set /p githubUsername="👤 Введите ваш GitHub username: "

if "%githubUsername%"=="" (
    echo ❌ Username не может быть пустым!
    pause
    exit /b 1
)

echo.
echo 🔗 Настройка удаленного репозитория...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/%githubUsername%/polina-design.git

echo 📤 Отправка кода на GitHub...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo ❌ Ошибка при отправке кода. Возможно, репозиторий не существует.
    echo.
    echo 📝 Создайте репозиторий вручную:
    echo 1. Перейдите на https://github.com/new
    echo 2. Название: polina-design
    echo 3. Сделайте публичным
    echo 4. НЕ добавляйте README, .gitignore или лицензию
    echo 5. Нажмите 'Create repository'
    echo 6. Запустите этот скрипт снова
    pause
    exit /b 1
)

echo.
echo 🎉 УСПЕШНО! Ваш проект загружен на GitHub!
echo =========================================
echo.
echo 🌐 Ваш сайт будет доступен по адресу:
echo https://%githubUsername%.github.io/polina-design/
echo.
echo 📋 Следующие шаги:
echo 1. Перейдите в Settings → Pages
echo 2. Source: выберите 'GitHub Actions'
echo 3. Сохраните настройки
echo.
echo ⚡ Деплой произойдет автоматически!
echo.
pause
