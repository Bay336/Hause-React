
import React from 'react';
import './About.scss';
// Импортируйте ваше изображение из папки assets
import heroImage from '../../assets/images/hardwood.webp';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const statsData = [
  { id: 1, value: '480+', label: 'сданных домов' },
  { id: 2, value: '16 лет', label: 'на рынке' },
  { id: 3, value: '10 лет', label: 'гарантии' },
];

const valuesData = [
  {
    id: 1,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award h-6 w-6 text-primary" aria-hidden="true"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>, // Можно заменить на SVG-компонент или иконку из lucide-react
    title: 'Качество без компромиссов',
    description:
      'Работаем по СП и ГОСТ, используем материалы с сертификатами. Технадзор проверяет каждый этап.',
  },
  {
    id: 2,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-6 w-6 text-primary" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    title: 'Свои бригады',
    description:
      'Никаких случайных подрядчиков: 12 постоянных бригад, прорабы с опытом от 10 лет.',
  },
  {
    id: 3,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake h-6 w-6 text-primary" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>,
    title: 'Честность в деньгах',
    description:
      'Открытая смета: вы видите цены материалов и работ. Никаких скрытых доплат.',
  },
  {
    id: 4,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tree-pine h-6 w-6 text-primary" aria-hidden="true"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"></path><path d="M12 22v-3"></path></svg>,
    title: 'Заботимся об участке',
    description:
      'Сохраняем деревья, вывозим мусор, сдаём чистый участок с газоном и дорожками.',
  },
];

const historyData = [
  {
    id: 1,
    year: '2009',
    description:
      'Основали компанию из трёх человек. Первый дом — каркасный, 86 м².',
  },
  {
    id: 2,
    year: '2014',
    description:
      'Открыли собственное производство домокомплектов и столярный цех.',
  },
  {
    id: 3,
    year: '2019',
    description:
      'Сдали 100-й дом и запустили отдел индивидуального проектирования.',
  },
  {
    id: 4,
    year: '2024',
    description:
      '480+ сданных домов, 12 бригад, свой технадзор и шоурум готовых домов.',
  },
];

export const About = () => {
  return (
    <>
    <main className="about">
      <Header />
      {/* Секция 1: Первый экран (Hero) */}
      <section className="about-hero">
        <div className="about-hero__container container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">Строим дома с 2009 года</h1>
            <p>
              «ДомСтрой» начался с маленькой бригады плотников. Сегодня это
              команда из 80 человек: архитекторы, инженеры, прорабы и
              отделочники. Но принцип остался прежним — строить так, как строили
              бы себе.
            </p>

            <div className="about-hero__stats">
              {statsData.map((stat) => (
                <div className="stat-card" key={stat.id}>
                  <span className="stat-card__value">{stat.value}</span>
                  <span className="stat-card__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-hero__media">
            <img
              src={heroImage}
              alt="Деревянный пол в построенном доме"
              className="about-hero__image"
            />
          </div>
        </div>
      </section>

      {/* Секция 2: Во что мы верим */}
      <section className="about-values container">
        <div className="about-values__container">
          <header className="section-header">
            <h2>Во что мы верим</h2>
            <p className="section-header__subtitle">
              Четыре принципа, которые не меняются уже 16 лет
            </p>
          </header>

          <div className="about-values__grid">
            {valuesData.map((item) => (
              <article className="value-card" key={item.id}>
                <div className="value-card__icon-box">
                  <span className="value-card__icon icon">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Секция 3: Наш путь */}
      <section className="about-history">
        <div className="about-history__container container ">
          <header className="section-header">
            <h2>Наш путь</h2>
            <p className="section-header__subtitle">
              От трёх плотников до компании полного цикла
            </p>
          </header>

          <div className="about-history__grid">
            {historyData.map((milestone) => (
              <article className="history-card" key={milestone.id}>
                <time className="history-card__year">{milestone.year}</time>
                <p className="history-card__text">{milestone.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      
    </main>
    <Footer />
    </>
  );
};

export default About;

