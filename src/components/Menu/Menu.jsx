import { NavLink } from 'react-router-dom'
import './Menu.scss'

const Menu = () => {


  const menuItems = [
    { label: 'Главная', href: '/' },
    { label: 'Каталог домов', href: '/catalog' },
    { label: 'Строительство', href: '/construction' },
    { label: 'О Компании', href: '/about' },
    { label: 'Контакты', href: '/contacts' },
  ]

  return (
  
    <nav className="nav">
      <ul className="nav__list">
        {menuItems.map((item, index) => (
          <li className="nav__item" key={index}>
              <NavLink 
                className={({ isActive }) => 
                isActive ? 'nav__link nav__link--active' : 'nav__link'
               } 
               to={item.href}
                 // Добавляем end только для главной, чтобы избежать ложного совпадения путей
               end={item.href === '/'} 
              >
               {item.label}
              </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
