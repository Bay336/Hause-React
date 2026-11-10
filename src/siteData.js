/**
 * ============================================================
 *  ЦЕНТРАЛИЗОВАННЫЕ ДАННЫЕ САЙТА — редактируйте всё здесь!
 * ============================================================
 *   *  Все изображения, тексты, ссылки и карточки проектов находятся в этом
 *  едином файле. Достаточно изменить любой URL или текст ниже,
 *  и весь сайт обновится автоматически — нет необходимости править компоненты.
 *
 *  Изображения теперь ЛОКАЛЬНЫЕ: они хранятся в папке /public/images/
 *  и подключаются по пути «/images/...». Чтобы заменить изображение,
 *  просто замените файл в папке public/images/ (сохранив прежнее имя)
 *  или укажите другой путь.
 * ============================================================
 */
 import skandiBg from './assets/images/background.webp'; 
 import shaleBg from './assets/images/card-2.webp'; 
 import dvorikBg from './assets/images/card-3.webp'; 


 const siteData = {
  /* ---------- General ---------- 
  name: "v33311",
  role: "Web Developer",
  tagline: "I build fast, beautiful and interactive web experiences.",

  /* ---------- Hero ---------- 
  hero: {
   // Local file: portfolio/public/images/hero-avatar.png
  
    ctaPrimary: { label: "View My Work", href: "#projects" },
    ctaSecondary: { label: "Contact Me", href: "#contact" },
  },
*/

 


  /* ---------- Home ---------- */
  home: {
    // Local file: portfolio/public/images/about-image.png
    image: "/images/about-image.png",
    paragraphs: [
     "Привет, я Frontend Разработчик",
      "Создаю интерфейсы, которые делают жизнь людей проще и удобнее. Специализируюсь на React и современном JavaScript.",
    ],
  },
// 2. Создаем массив с данными проектов
projectsData:  [
  {
    id: 'skandi-120',
    title: 'Сканди 120',
    desc: 'Готовый каркасный дом с ключами',
    image: skandiBg, // Передаем импортированную переменную
    tag: 'Хит продаж',
    tech: 'Каркас',
    area: '120 м²',
    floors: '1 этаж',
    rooms: '3 спальни',
    term: '3 месяца',
    price: '6 900 000 ₽',
    link: '/projects/skandi-120'
  },
  {
    id: 'shale-180',
    title: 'Шале 180',
    desc: 'Светлый вход в дом из клеёного бруса',
    image: shaleBg, // Передаем вторую картинку
    tag: 'Хит продаж',
    tech: 'Брус',
    area: '180 м²',
    floors: '2 этажа',
    rooms: '4 спальни',
    term: '5 месяцев',
    price: '12 400 000 ₽',
    link: '/projects/shale-180'
  },
  {
    id: 'dvorik-160',
    title: 'Дворик 160',
    desc: 'Дом с уютным внутренним двориком',
    image: dvorikBg, // Передаем третью картинку
    tag: 'Хит продаж',
    tech: 'Газобетон',
    area: '160 м²',
    floors: '1 этаж',
    rooms: '4 спальни',
    term: '4,5 месяца',
    price: '11 200 000 ₽',
    link: '/projects/dvorik-160'
  }
],




  /* ---------- Skills ---------- 
  skillsData: [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 80 },
      { name: 'HTML5/CSS/JS', level: 90 },
      { name: 'Vite', level: 85 },
      { name: 'Адаптивная вёрстка', level: 90 },
    ],
  },
  {
    category: 'Инструменты и процессы',
    items: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'npm/php', level: 70 },
      { name: 'Figma / Wordpress', level: 70 },
    ],
  },
  {
    category: 'Дополнительно',
    items: [
      { name: 'Монтаж слайд‑шоу и фотоисторий', level: 90 },
      { name: 'Графический дизайн: создание логотипов', level: 80 },
    ],
  },
],
*/
  /* ---------- Contacts ---------- */
    contacts: {
        email: "mailto:v33311@yandex.ru",
        emailText: "v33311@yandex.ru",
        telegram: "https://t.me", // замените на ваш настоящий ник
        github: "https://github.com/Bay336"
     },

  /* ---------- Social Links ---------- */
     socials: {
        vk: "https://vk.ru/club235349090",
        github: "https://github.com/Bay336",
        mail: "mailto:v33311@yandex.ru" // Исправлено на вашу почту
     }
};
export default siteData