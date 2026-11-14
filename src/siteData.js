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
 import modernBg from './assets/images/card-4.webp'; 
 import classicBg from './assets/images/card-5.webp'; 
 import cantriBg from './assets/images/card-6.webp'; 


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
    id: 1,
    title: 'Сканди 120',
    material:'Каркас',
    isHit: true,
    description: 'Одноэтажный светлый дом с панорамными окнами, террасой и открытой кухней-гостиной. Идеален для семьи с детьми.',
    tags: ['Терраса 24 м²', 'Панорамное остекление', 'Тёплый пол', 'Гарантия 10 лет'],
    desc: 'Готовый каркасный дом с ключами',
    image: skandiBg, // Передаем импортированную переменную
    tag: 'Хит продаж',
    tech: 'Каркас',
    area: '120 м²',
    floors: '1 этаж',
    rooms: '3 спальни',
    bathrooms: '2 санузла',
    term: '3 месяца',
    price: '6 900 000 ₽',
    link: '/projects/skandi-120',
      features: [
        'Гараж на 2 авто',
        'Кабинет',
        'Библиотека',
        'Фасад ручной формовки',
      ],
  },
  {
    id: 2,
    title: 'Шале 180',

    material: 'Брус',
    isHit: true,
    description: 'Двухэтажный дом из клеёного бруса с высокими потолками, вторым светом и просторной мастер-спальней.',
    bathrooms: '3 санузла',
    tags: ['Второй свет', 'Клееный брус', 'Гардеробная', 'Покрытие маслом'],

    desc: 'Светлый вход в дом из клеёного бруса',
    image: shaleBg, // Передаем вторую картинку
    tag: 'Хит продаж',
    tech: 'Брус',
    area: '180 м²',
    floors: '2 этажа',
    rooms: '4 спальни',
    term: '5 месяцев',
    price: '12 400 000 ₽',
    link: '/projects/shale-180',
     features: [
        'Веранда',
        'Печь-камин',
        'Кладовые',
        'Эконом-отопление',
      ],
  },
  {
    id: 3,
    title: 'Дворик 160',
    material: 'Газобетон',
    isHit: false,
    description: 'Дом в стиле минимализм с плоской кровлей, скрытыми водостоками и энергоэффективным контуром.',
    bathrooms: '2 санузла',
    tags: ['Плоская кровля', 'Тепловой насос', 'Умный дом', 'Панорамные двери'],

    desc: 'Дом с уютным внутренним двориком',
    image: dvorikBg, // Передаем третью картинку
    tag: 'Хит продаж',
    tech: 'Газобетон',
    area: '160 м²',
    floors: '1 этаж',
    rooms: '4 спальни',
    term: '4,5 месяца',
    price: '11 200 000 ₽',
    link: '/projects/dvorik-160',
     features: [
        'Второй свет',
        'Каминная зона',
        'Гардеробная',
        'Покрытие маслом',
      ],
  },

   {
    id: 4,
    title: 'Классика 210',
    material: 'Кирпич',
    isHit: false,
    description: 'Солидный кирпичный дом для большой семьи: кабинет, гостевая спальня, большая столовая и гараж.',
    area: '180 м²',
    tech: 'Кирпич',
    rooms: '5 спален',
    bathrooms: '3 санузла',
    term: '7 месяцев',
    tags: ['Гараж на 2 авто', 'Кабинет', 'Библиотека', 'Фасад ручной формовки'],
    price: '16 800 000 ₽',
    image: modernBg,
     features: [
        'Плоская кровля',
        'Тепловой насос',
        'Умный дом',
        'Панорамный двери',
      ],
  },
    {
    id: 5,
    title: 'Кантри 95',
    material: 'Каркас',
    isHit: false,
    image: classicBg,
    description: 'Компактный и тёплый дом для дачи или первой семейной резиденции. Быстро строится и недорог в отоплении.',
    area: '180 м²',
    tech: 'Каркас',
    rooms: '2 спальни',
    bathrooms: '1 санузел',
    term: '2.5 месяца',
    tags: ['Веранда', 'Печь-камин', 'Кладовая', 'Зимнее утепление'],
    price: '5 400 000 ₽',
     features: [
        'Терраса 24м²',
        'Панарамное остекление',
        'Теплый пол',
        'Гарантия 10лет',
      ],
  },
    {
    id: 6,
    title: 'Дворик 140',
    material: 'Газобетон',
    isHit: true,
    image: cantriBg,
    description: 'П-образный одноэтажный дом с закрытым внутренним двориком — приватность и солнце целый день.',
    area:'180 м²',
    tech: 'Газобетон',
    rooms: '4 спальни',
    bathrooms: '2 санузла',
    term: '4.5 месяца',
    tags: ['Внутренний двор', 'Летняя кухня', 'Сауна', 'Навес для авто'],
    price: '11 200 000 ₽',
     features: [
        'Внутренний двор',
        'Летняя кухня',
        'Сауна',
        'Навес для авто',
      ],
  },


],


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