# Polina Design — Студия модного дизайна

Веб-приложение для студии модного дизайна с интеграцией AI для анализа контента.

## 🚀 Деплой на GitHub Pages

### Автоматический деплой (рекомендуется)

1. **Создайте репозиторий на GitHub** с названием `polina-design`
2. **Загрузите код** в репозиторий
3. **Настройте GitHub Pages:**
   - Перейдите в Settings → Pages
   - Source: GitHub Actions
4. **Добавьте секреты:**
   - Settings → Secrets and variables → Actions
   - Добавьте `GEMINI_API_KEY` с вашим API ключом Gemini
5. **Запушьте в main ветку** - деплой произойдет автоматически

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

2. **Создайте файл `.env.local`:**
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Запустите приложение:**
   ```bash
   npm run dev
   ```

4. **Откройте** http://localhost:3000

## 📁 Структура проекта

```
polina-design/
├── components/          # React компоненты
├── services/           # Сервисы (Gemini API)
├── .github/workflows/  # GitHub Actions
├── public/            # Статические файлы
└── src/              # Исходный код
```

## 🔧 Доступные скрипты

- `npm run dev` - Запуск в режиме разработки
- `npm run build` - Сборка для продакшена
- `npm run preview` - Предварительный просмотр сборки
- `npm run deploy` - Деплой на GitHub Pages

## 🌐 Ссылки

- **Локальная разработка:** http://localhost:3000
- **GitHub Pages:** https://yourusername.github.io/polina-design/
- **AI Studio:** https://ai.studio/apps/drive/135o9LnDXK2O3tbPZWz8Tjsq5m8iox7yu
