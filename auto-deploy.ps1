# Автоматический деплой Polina Design на GitHub Pages
Write-Host "🚀 Polina Design - Автоматический деплой" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Проверяем, что мы в правильной директории
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Ошибка: package.json не найден. Запустите скрипт из корневой папки проекта." -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

# Проверяем git статус
Write-Host "📋 Проверка git статуса..." -ForegroundColor Yellow
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "⚠️  Есть несохраненные изменения. Добавляем их..." -ForegroundColor Yellow
    git add .
    git commit -m "Auto-commit before deploy"
}

# Запрашиваем GitHub username
Write-Host ""
$githubUsername = Read-Host "👤 Введите ваш GitHub username"

if (-not $githubUsername) {
    Write-Host "❌ Username не может быть пустым!" -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host ""
Write-Host "🔗 Настройка удаленного репозитория..." -ForegroundColor Yellow

# Удаляем существующий remote если есть
git remote remove origin 2>$null

# Добавляем новый remote
git remote add origin "https://github.com/$githubUsername/polina-design.git"

Write-Host "📤 Отправка кода на GitHub..." -ForegroundColor Yellow
try {
    git push -u origin main
    Write-Host "✅ Код успешно отправлен на GitHub!" -ForegroundColor Green
} catch {
    Write-Host "❌ Ошибка при отправке кода. Возможно, репозиторий не существует." -ForegroundColor Red
    Write-Host ""
    Write-Host "📝 Создайте репозиторий вручную:" -ForegroundColor Yellow
    Write-Host "1. Перейдите на https://github.com/new" -ForegroundColor White
    Write-Host "2. Название: polina-design" -ForegroundColor White
    Write-Host "3. Сделайте публичным" -ForegroundColor White
    Write-Host "4. НЕ добавляйте README, .gitignore или лицензию" -ForegroundColor White
    Write-Host "5. Нажмите 'Create repository'" -ForegroundColor White
    Write-Host "6. Запустите этот скрипт снова" -ForegroundColor White
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host ""
Write-Host "🎉 УСПЕШНО! Ваш проект загружен на GitHub!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Ваш сайт будет доступен по адресу:" -ForegroundColor White
Write-Host "https://$githubUsername.github.io/polina-design/" -ForegroundColor Blue
Write-Host ""
Write-Host "📋 Следующие шаги:" -ForegroundColor Yellow
Write-Host "1. Перейдите в Settings → Pages" -ForegroundColor White
Write-Host "2. Source: выберите 'GitHub Actions'" -ForegroundColor White
Write-Host "3. Сохраните настройки" -ForegroundColor White
Write-Host ""
Write-Host "⚡ Деплой произойдет автоматически!" -ForegroundColor Green
Write-Host ""
Read-Host "Нажмите Enter для выхода"
