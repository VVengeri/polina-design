# Polina Design — Студия модного дизайна

Красивый лендинг для студии модного дизайна в Екатеринбурге.

## 🚀 Деплой на GitHub Pages

### Автоматический деплой (рекомендуется)

1. **Создайте репозиторий на GitHub** с названием `polina-design`
2. **Загрузите код** в репозиторий
3. **Настройте GitHub Pages:**
   - Перейдите в Settings → Pages
   - Source: GitHub Actions
4. **Запушьте в main ветку** - деплой произойдет автоматически

### Ручной деплой

```bash
# Установите зависимости
npm install

# Соберите проект
npm run build

# Деплой на GitHub Pages
npm run deploy
```

## 🛠 Локальная разработка

**Требования:** Node.js 18+

1. **Установите зависимости:**
   ```bash
   npm install
   ```

2. **Запустите приложение:**
   ```bash
   npm run dev
   ```

3. **Откройте** http://localhost:3000

## 📁 Структура проекта

```
polina-design/
├── components/          # React компоненты
├── .github/workflows/  # GitHub Actions
└── src/               # Исходный код
```

## 🔧 Доступные скрипты

- `npm run dev` - Запуск в режиме разработки
- `npm run build` - Сборка для продакшена
- `npm run preview` - Предварительный просмотр сборки
- `npm run deploy` - Деплой на GitHub Pages

## 🌐 Ссылки

- **Локальная разработка:** http://localhost:3000
- **GitHub Pages:** https://yourusername.github.io/polina-design/
