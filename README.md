# React + Vite
# Для работы устанвливаем пакеты :
    --- npm install
    --- npm install -D sass
    --- npm list react react-dom
    --- npm install react-error-boundary
    --- npm install react-router-dom
    --- npm install clsx
    --- npm install -D @a1rth/css-normalize  // на усматрение



###### ======= Для страници 404:
  в файле App.jsx  ===
1. Устанавливаем библтоьеку:
      npm install react-error-boundary
2. Импортируем:
      import { ErrorBoundary } from 'react-error-boundary';
3. Назначаем функциюи оброчиваем приложение в <ErrorBoundary></ErrorBoundary>:

      function ErrorFallback({ error }) {
        return (
          <div role="alert" style={{ padding: '20px', color: 'red' }}>
            <h2>Что-то пошло не так в интерфейсе:</h2>
            <pre>{error.message}</pre>
          </div>
        );

      const App() {
        return (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BrowserRouter>
              <Routes>
                {/* Ваши маршруты */}
              </Routes>
            </BrowserRouter>
          </ErrorBoundary>
        );
      }
=========================================
ПЕРЕКЛЮЧЕНИЕ ТЕМ
====================

Шаг 1: Создайте контекст темы (ThemeContext.jsx)

Создайте новый файл, например src/context/ThemeContext.jsx. В нем мы пропишем всю логику отслеживания, сохранения темы в браузере и добавления класса на <body>.
jsx
import { createContext, useContext, useState, useEffect } from 'react';

// 1. Создаем сам контекст
const ThemeContext = createContext();

// 2. Создаем провайдер, который обернет всё приложение
export const ThemeProvider = ({ children }) => {
  // Инициализируем состояние: сначала проверяем localStorage, если там пусто — берем светлую тему
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Эффект следит за изменением состояния и синхронизирует класс у body и localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Функция для переключения
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Создаем кастомный хук для удобного использования в компонентах
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
};
Используйте код с осторожностью.

Шаг 2: Оберните приложение в Провайдер (main.jsx или App.jsx)

Вам нужно обернуть корневой компонент приложения в созданный ThemeProvider, чтобы контекст стал доступен в любой точке проекта. В проектах на Vite это обычно делается в src/main.jsx.
jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx' // Импортируем провайдер
import './index.scss' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
Используйте код с осторожностью.

Шаг 3: Обновите Header.jsx

Теперь внутри компонента Header больше не нужно создавать локальные стейты и useEffect для темы. Мы просто забираем данные из нашего глобального контекста с помощью хука useTheme.
jsx
import { useState } from 'react'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import { useTheme } from '../../context/ThemeContext' // Импортируем хук контекста
import './Header.scss'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Достаем глобальное состояние и функцию его изменения из контекста
  const { isDarkMode, toggleTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <Logo />
        </div>

        <nav className={`header__menu-wrapper ${isMenuOpen ? 'is-open' : ''}`}>
          <Menu />
        </nav>

        <div className="header__actions">
          {/* Кнопка теперь дергает глобальную функцию */}
          <button 
            className={`header__theme-toggle ${isDarkMode ? 'is-dark' : ''}`}
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Включить светлую тему' : 'Включить темную тему'}
          >
            <span className="theme-icon">{isDarkMode ? '🌙' : '☀️'}</span>
            <span className="theme-text">{isDarkMode ? 'Темная' : 'Светлая'}</span>
          </button>

          <button 
            className={`header__burger ${isMenuOpen ? 'is-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Открыть меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
Используйте код с осторожностью.

Шаг 4: Использование темы в любом другом месте (Пример с Hero)

Теперь, если вам понадобится изменить логику или отображение элементов в любой другой секции (например, менять картинки или цвет кнопок в зависимости от темы прямо в JSX), вы можете просто вызвать этот же хук:
jsx
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="hero">
      <h1>Вы зашли на сайт в {isDarkMode ? 'ночное' : 'дневное'} время суток</h1>
    </section>
  );
};
Используйте код с осторожностью.
Контекст успешно настроен. Хотите, я покажу, как правильно организовать переменные в SCSS, чтобы при добавлении классов body.dark-theme цвета на всем сайте менялись автоматически через нативные CSS Custom Properties?


=================== Заливка проекта на хостинг  Netlify

Самый надежный способ: Деплой через Терминал (CLI)


Шаг 1: Установка утилиты Netlify

Откройте терминал в вашем проекте и установите официальный инструмент Netlify (это безопасно и бесплатно):
bash

npm install -g netlify-cli

Используйте код с осторожностью.
(Если на Mac/Linux выдает ошибку прав, добавьте sudo в начале: sudo npm install -g netlify-cli)

Шаг 2: Авторизация

Свяжите терминал с вашим аккаунтом. Введите команду:
bash
netlify login
Используйте код с осторожностью.
В браузере откроется вкладка. Нажмите Authorize (Разрешить).

Шаг 3: Деплой

Запустите команду публикации:
bash

netlify deploy --dir=dist

Используйте код с осторожностью.
Что вы увидите в терминале:
1. У вас спросят: What would you like to do? Выберите стрелочками + Create & configure a new site и нажмите Enter.
2. Выберите вашу команду (Team) и придумайте имя сайта (или просто нажмите Enter, чтобы сгенерировать случайное).
3. Терминал загрузит файлы и выдаст строку Website URL. Кликните по ней!

Если вы всё же хотите через браузер (Netlify Drop):

Если CLI ставить не хочется, давайте проверим, что именно лежит в вашей папке dist. Откройте её на компьютере. Структура должна быть строго такой:
text
📂 dist
 ├── 📂 assets (внутри файлы .js и .css)
 ├── 📄 index.html (ОБЯЗАТЕЛЬНО ТУТ)
 └── 📄 _redirects
Используйте код с осторожностью.
Если у вас внутри dist создается еще одна папка (например, dist/Hause-React/index.html), это означает, что в файле package.json или vite.config.js закралась скрытая настройка.
Какой путь у вас получился? Попробуйте метод с netlify deploy --dir=dist — он сразу покажет в терминале, если папка пуста или сборка прошла неверно. Какое сообщение выдал терминал?
=====
✖ Looking for projects connected to 'https://github.com/Bay336/Portfolio-react-2-' » Error: You don't have any projects yet. Run netlify sites:create to create a project.
Эта ошибка в терминале возникает из-за того, что в конфигурации вашего проекта (скорее всего, в скрытой папке .netlify/) осталась привязка к вашему репозиторию GitHub, но на самом сервисе Netlify этот проект еще не был создан и зарегистрирован.
Система ищет готовый проект на вашем аккаунте по ссылке репозитория и, не найдя его, прерывает операцию.
Давайте выполним совет из ошибки и создадим проект с нуля прямо через консоль. Это займет всего три команды.

Пошаговое решение в терминале:

****** Шаг 1: Создаем сайт на Netlify
Запустите команду создания нового проекта:
bash

netlify sites:create

Используйте код с осторожностью.
• Консоль спросит: «What would you like to do?» — выберите стрелочками Create & configure a new site.
• Выберите вашу команду (Team) — обычно она там одна (ваш никнейм).
• Системе можно задать имя сайта (например, my-portfolio-2026) или просто нажать Enter, чтобы хостинг присвоил случайное имя.
******* Шаг 2: Делаем свежую сборку
Убедимся, что папка dist обновлена и содержит актуальный код:
bash

npm run build

Используйте код с осторожностью.
******  Шаг 3: Выгружаем сайт в сеть
Теперь запускаем деплой в созданную комнату:
bash
netlify deploy --dir=dist

Терминал загрузит файлы и в самом конце выдаст вам Website Draft URL (ссылку для проверки).
Если на ней всё отображается отлично, зафиксируйте результат и опубликуйте сайт на постоянную основу (в продакшн) финальной командой:
bash

netlify deploy --dir=dist --prod

Используйте код с осторожностью.
***************
*****  //////  Что делать, если вы измените код в будущем?

Если вы внесёте изменения в проект (например, добавите новый проект или поменяете текст), вам достаточно будет выполнить всего две команды в терминале, чтобы обновить сайт в интернете:
bash 
     npm run build
     netlify deploy --dir=dist --prod
Используйте код с осторожностью.
Сайт обновится за несколько секунд без прерывания его работы для пользователей.


==================================


После того как вы заменили изображения на .webp и добавили атрибуты в код, выполните стандартную пересборку и отправку:
bash
npm run build
netlify deploy --dir=dist --prod