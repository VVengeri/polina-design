Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Polina Design - GitHub Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$githubUsername = Read-Host "Введите ваш GitHub username"

Write-Host ""
Write-Host "Подключение к GitHub репозиторию..." -ForegroundColor Yellow
git remote add origin "https://github.com/$githubUsername/polina-design.git"

Write-Host ""
Write-Host "Отправка кода на GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "   Готово!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Ваш сайт будет доступен по адресу:" -ForegroundColor White
Write-Host "https://$githubUsername.github.io/polina-design/" -ForegroundColor Blue
Write-Host ""
Write-Host "Не забудьте:" -ForegroundColor Yellow
Write-Host "1. Настроить GitHub Pages (Settings > Pages > GitHub Actions)" -ForegroundColor White
Write-Host "2. Добавить GEMINI_API_KEY в секреты (Settings > Secrets)" -ForegroundColor White
Write-Host ""
Read-Host "Нажмите Enter для выхода"
