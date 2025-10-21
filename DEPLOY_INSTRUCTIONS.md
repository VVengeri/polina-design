# 🚀 Инструкции по деплою на GitHub Pages

## ✅ Что уже готово:
- ✅ Проект настроен для GitHub Pages
- ✅ Git репозиторий инициализирован
- ✅ Все файлы добавлены в git
- ✅ Первый коммит создан
- ✅ GitHub Actions workflow настроен

## 📋 Следующие шаги:

### 1. Создайте репозиторий на GitHub
1. Перейдите на https://github.com/new
2. Название репозитория: `polina-design`
3. Сделайте репозиторий **публичным**
4. НЕ добавляйте README, .gitignore или лицензию (они уже есть)
5. Нажмите "Create repository"

### 2. Подключите локальный репозиторий к GitHub
Выполните эти команды в терминале:

```bash
git remote add origin https://github.com/ВАШ_USERNAME/polina-design.git
git push -u origin main
```

### 3. Настройте GitHub Pages
1. Перейдите в Settings → Pages
2. Source: выберите "GitHub Actions"
3. Сохраните настройки

### 4. Добавьте API ключ Gemini
1. Перейдите в Settings → Secrets and variables → Actions
2. Нажмите "New repository secret"
3. Name: `GEMINI_API_KEY`
4. Value: ваш API ключ Gemini
5. Нажмите "Add secret"

### 5. Деплой произойдет автоматически!
После push в main ветку GitHub Actions автоматически:
- Соберет проект
- Задеплоит на GitHub Pages

## 🌐 Ваш сайт будет доступен по адресу:
`https://ВАШ_USERNAME.github.io/polina-design/`

## 🔧 Дополнительные команды:

### Ручной деплой (если нужно):
```bash
npm run deploy
```

### Локальная разработка:
```bash
npm run dev
```

### Сборка проекта:
```bash
npm run build
```

## 📞 Поддержка:
Если возникнут проблемы, проверьте:
1. Правильность названия репозитория
2. Настройки GitHub Pages
3. Секреты в GitHub Actions
4. Логи в Actions tab
