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
