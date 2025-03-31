# CADEX Test Project

Тестовое задание для позиции Frontend-разработчика в CADEX.

## Технологии

- Next.js 14.1.0
- React 18.2.0
- TypeScript
- Ant Design 5.15.1
- Styled Components 6.1.8

## Функциональность

- Современный минималистичный дизайн
- Адаптивная верстка
- Форма обратной связи с валидацией
- Интеграция с YouTube
- Серверный API для обработки формы

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/Frontedward/cadex-test.git
cd cadex-test
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите проект в режиме разработки:
```bash
npm run dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API endpoints
│   ├── contact/           # Страница контактов
│   ├── layout.tsx         # Корневой layout
│   └── page.tsx           # Главная страница
├── components/            # React компоненты
│   ├── Header.tsx
│   └── Footer.tsx
└── lib/                   # Утилиты и конфигурации
    └── registry.tsx       # Registry для Styled Components
```

## Особенности реализации

### Дизайн
- Минималистичный черно-белый дизайн
- Адаптивная верстка для всех устройств
- Интерактивные элементы с анимацией
- Современная типографика

### Технические детали
- Server-Side Rendering с Next.js
- Типизация с TypeScript
- Стилизация с помощью Styled Components
- Компоненты из библиотеки Ant Design
- Валидация форм
- Обработка ошибок

## Скрипты

- `npm run dev` - Запуск в режиме разработки
- `npm run build` - Сборка проекта
- `npm run start` - Запуск собранного проекта
- `npm run lint` - Проверка кода линтером

## Лицензия

MIT
