
import React, { useState } from 'react';
import siteData from '../../siteData.jsx';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Contacts.scss';

// Безопасно извлекаем массивы из siteData.jsx
const contactItems = Array.isArray(siteData?.contactItems)
  ? siteData.contactItems
  : [];

const faqData = Array.isArray(siteData?.faqData)
  ? siteData.faqData
  : [];

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  // Второй вопрос (id: 2) открыт по умолчанию, как на макете
  const [openFaqId, setOpenFaqId] = useState(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка заявки:', formData);
  };

  const toggleFaq = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
    <Header />
    <main className="contacts">
      {/* Шапка страницы */}
      <section className="contacts-header">
        <div className="container">
          <h1>Контакты</h1>
          <p className="contacts-header__subtitle">
            Оставьте заявку — перезвоним, ответим на вопросы и договоримся об
            экскурсии по готовым домам.
          </p>
        </div>
      </section>

      {/* Основной блок: Контакты слева + Форма справа */}
      <section className="contacts-main">
        <div className="contacts-main__container container">
          {/* Левая колонка: Карточки контактов */}
          <div className="contacts-info">
            {contactItems.map((item) => (
              <article className="contact-card" key={item.id}>
                <div className="contact-card__icon-box">
                  <span className="contact-card__icon icon" aria-hidden="true">
                    {item.icon}
                  </span>
                </div>
                <div className="contact-card__body">
                  <p>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="contact-card__value contact-card__value--link">
                      {item.value}
                    </a>
                  ) : (
                    <p className="contact-card__value">{item.value}</p>
                  )}
                  <span className="contact-card__note">{item.note}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Правая колонка: Форма обратной связи */}
          <div className="contact-form-box">
            <h3>Оставить заявку</h3>
            <p className="contact-form-box__subtitle">
              Перезвоним, проконсультируем и посчитаем смету. Это бесплатно.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__field">
                <label htmlFor="user-name" className="contact-form__label">
                  Ваше имя
                </label>
                <input
                  id="user-name"
                  type="text"
                  name="name"
                  className="contact-form__input"
                  placeholder="Например, Анна"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="user-phone" className="contact-form__label">
                  Телефон
                </label>
                <input
                  id="user-phone"
                  type="tel"
                  name="phone"
                  className="contact-form__input"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="user-message" className="contact-form__label">
                  Что вас интересует?
                </label>
                <textarea
                  id="user-message"
                  name="message"
                  className="contact-form__textarea"
                  placeholder="Например: каркасный дом 120 м², участок уже есть..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="contact-form__submit button">
                <span className="contact-form__submit-icon " aria-hidden="true">
                  ➤
                </span>
                <span>Отправить заявку</span>
              </button>

              <p className="contact-form__policy">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Нижний блок: Частые вопросы (FAQ) */}
      <section className="contacts-faq container">
        <div className="contacts-faq__container">
          <header className="section-header">
            <h2>Частые вопросы</h2>
            <p className="section-header__subtitle">
              То, о чём спрашивают чаще всего
            </p>
          </header>

          <div className="faq-list">
            {faqData.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                  key={faq.id}
                >
                  <button
                    type="button"
                    className="faq-item__trigger"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="faq-item__question">{faq.question}</span>
                    <span className="faq-item__arrow" aria-hidden="true">
                      {isOpen ? '⌃' : '⌄'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-item__content">
                      <p className="faq-item__answer">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Contacts;

