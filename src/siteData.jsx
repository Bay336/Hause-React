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
 import classNameNameicBg from './assets/images/card-5.webp'; 
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
    link: './catalog',
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
    link: './catalog',
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
    link: './catalog',
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
    image: classNameNameicBg,
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

servicesData: [
  {
    id: 'turnkey',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" classNameName="lucide lucide-hammer h-6 w-6 text-primary" aria-hidden="true"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path><path d="M17.64 15 22 10.64"></path><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"></path></svg>,
    title: 'Строительство под ключ',
    description:
      'Полный цикл: от геодезии участка и фундамента до чистовой отделки и благоустройства. Вы получаете ключи и документы.',
    features: [
      'Проекты и разрешения',
      'Фундамент, стены, кровля',
      'Окна, двери, фасад',
    ],
  },
  {
    id: 'renovation',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" classNameName="lucide lucide-paintbrush h-6 w-6 text-primary" aria-hidden="true"><path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"></path><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"></path><path d="M14.5 17.5 4.5 15"></path></svg>,
    title: 'Отделка и ремонт',
    description:
      'Чистовая отделка в новостройке или капитальный ремонт дома: полы, стены, потолки, санузлы под ключ.',
    features: [
      'Дизайн-проект',
      'Черновые и чистовые работы',
      'Уборка после ремонта',
    ],
  },
  {
    id: 'engineering',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" classNameName="lucide lucide-plug h-6 w-6 text-primary" aria-hidden="true"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>,
    title: 'Инженерные системы',
    description:
      'Отопление, водоснабжение, канализация, электрика и вентиляция. Подбираем оборудование под бюджет и площадь.',
    features: [
      'Тёплые полы и радиаторы',
      'Скважины и септики',
      'Умный дом',
    ],
  },
  {
    id: 'reconstruction',
    icon: 
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" classNameName="lucide lucide-droplets h-6 w-6 text-primary" aria-hidden="true"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>,
    title: 'Реконструкция и пристройки',
    description:
      'Увеличим площадь дома: пристрой, второй этаж, мансарда, терраса. Усилим фундамент и утеплим старый дом.',
    features: [
      'Пристройки и мансарды',
      'Утепление фасадов',
      'Замена кровли',
    ],
  },
],

materialsData: [
  {
    id: 'frame',
    label: 'Каркасный',
    priceMinPerSqm: 52900,
    priceMaxPerSqm: 63250,
    duration: '3–4 месяца',
    note: 'Быстро и тепло. Идеален для дачи и постоянного проживания.',
  },
  {
    id: 'aerated',
    label: 'Газобетон',
    priceMinPerSqm: 62000,
    priceMaxPerSqm: 74000,
    duration: '5–7 месяцев',
    note: 'Каменный дом с отличной теплоизоляцией и долгим сроком службы.',
  },
  {
    id: 'brick',
    label: 'Кирпич',
    priceMinPerSqm: 75000,
    priceMaxPerSqm: 89000,
    duration: '7–10 месяцев',
    note: 'Максимальная надёжность, звукоизоляция и статусность.',
  },
  {
    id: 'timber',
    label: 'Клееный брус',
    priceMinPerSqm: 68000,
    priceMaxPerSqm: 80000,
    duration: '4–6 месяцев',
    note: 'Экологичный деревянный дом без усадки и лишней отделки.',
  },
],



  /* ---------- Contacts ---------- */
    contacts: {
        email: "mailto:v33311@yandex.ru",
        emailText: "v33311@yandex.ru",
        telegram: "https://t.me", // замените на ваш настоящий ник
        github: "https://github.com/Bay336"
     },


    contactItems:[
  {
    id: 1,
    icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-5 w-5 text-primary" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>, // Можно заменить на SVG или иконку Phone из lucide-react
    label: 'Телефон',
    value: '+7 (495) 120-45-67',
    href: 'tel:+74951204567',
    note: 'Ежедневно с 9:00 до 21:00',
  },
  {
    id: 2,
    icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-5 w-5 text-primary" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>, // Mail
    label: 'Почта',
    value: 'privet@domstroy.example',
    href: 'mailto:privet@domstroy.example',
    note: 'Ответим в течение дня',
  },
  {
    id: 3,
    icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-5 w-5 text-primary" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>
      </svg>, // MapPin
    label: 'Шоурум',
    value: 'Московская обл., пос. Лесной, ул. Строителей, 12',
    href: null,
    note: 'Экскурсии по записи',
  },
  {
    id: 4,
    icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-5 w-5 text-primary" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
      </svg>, // Clock
    label: 'Режим работы',
    value: 'Пн–Сб: 9:00–20:00, Вс: 10:00–18:00',
    href: null,
    note: 'Заявки принимаем круглосуточно',
  },
],

faqData: [
  {
    id: 1,
    question: 'Сколько времени занимает строительство?',
    answer:
      'В среднем строительство каркасного дома под ключ занимает от 2 до 4 месяцев в зависимости от площади и сложности проекта.',
  },
  {
    id: 2,
    question: 'Цена в договоре действительно не меняется?',
    answer:
      'Да. Мы фиксируем смету после геологии участка и утверждения проекта. Если дорожают материалы — это наш риск, а не ваш.',
  },
  {
    id: 3,
    question: 'Можно ли строить в ипотеку или с маткапиталом?',
    answer:
      'Да, мы аккредитованы в ведущих банках и работаем со всеми льготными ипотечными программами, а также с материнским капиталом.',
  },
  {
    id: 4,
    question: 'У нас уже есть участок. Что дальше?',
    answer:
      'Наш инженер бесплатно выедет на участок, оценит подъездные пути, уклон и грунты, после чего мы подберем подходящий фундамент и проект.',
  },
  {
    id: 5,
    question: 'Какая гарантия на дом?',
    answer:
      'Мы даем официальную гарантию 10 лет на конструктив дома и фундамент, прописанную в договоре.',
  },
],

  /* ---------- Social Links ---------- */
     socials: {
        vk: "https://vk.ru/club235349090",
        github: "https://github.com/Bay336",
        mail: "mailto:v33311@yandex.ru" // Исправлено на вашу почту
     }
};
export default siteData