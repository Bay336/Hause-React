import { useState } from 'react'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import { useTheme } from '../../context/theme-context' // Импортируем хук 
import './Header.scss'


const Header = () => {

   // Состояние для открытия/закрытия мобильного меню
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

          {/* Добавляем класс активности, если menuOpen === true */}
         <nav className={`header__menu-wrapper ${isMenuOpen ? 'is-open' : ''}`}>
          <Menu />
         </nav>
           
           {/* Блок действий в шапке (тема)*/}
         <div className="header__actions">
            {/* Кнопка переключения темы */}
            <button 
              className={`header__theme-toggle ${isDarkMode ? 'is-dark' : ''}`}
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Включить светлую тему' : 'Включить темную тему'}
            >
              {/* Иконки в виде текста (можно заменить на SVG) */}
               <span className="theme-icon">{isDarkMode ? '🌙' : '☀️'}</span>
            </button>
            {/* Кнопка Бургер (видна только на мобильных) */}
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
