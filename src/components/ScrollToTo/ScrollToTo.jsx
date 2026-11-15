import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Получаем текущий URL-путь страницы
  const { pathname } = useLocation();

  useEffect(() => {
    // Мгновенно прокручиваем окно в самый верх при каждом изменении пути
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // 'instant' прокручивает сразу без плавного «прыжка» сверху вниз
    });
  }, [pathname]);

  return null; // Компонент ничего не рисует на экране
};

export default ScrollToTop;
