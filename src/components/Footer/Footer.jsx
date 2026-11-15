import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__grid">
          <div className="footer__about">
            <h3 className="footer__logo">ДомСтрой</h3>
            <p className="footer__description">
              Строим тёплые дома под ключ с 2009 года. Фиксированная смета и
              гарантия 10 лет.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Навигация в подвале">
            <h4 className="footer__title">Навигация</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/">
                  Главная
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/catalog">
                  Каталог домов
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/construction">
                  Строительство
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/about">
                  О компании
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/contacts">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>

          <div className="footer__contacts">
            <h4 className="footer__title">Связаться</h4>
            <a className="footer__phone" href="tel:+74951204567">
              +7 (495) 120-45-67
            </a>
            <p className="footer__schedule">ежедневно 9:00–21:00</p>
          </div>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          {/* Чтобы год обновлялся автоматически */}
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} ДомСтрой. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
