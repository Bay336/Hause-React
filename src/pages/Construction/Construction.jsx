import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import siteData from '../../siteData.jsx';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { MaterialSelect } from '../../components/MaterialSelect/MaterialSelect';

import './Construction.scss';

// Безопасно достаем массивы из siteData
const servicesList = Array.isArray(siteData?.servicesData)
  ? siteData.servicesData
  : [];

const materialsList = Array.isArray(siteData?.materialsData)
  ? siteData.materialsData
  : [];

// Правильно:
const AREAS = new Array(80, 100, 120, 150, 180, 250);

export const Construction = () => {
  const [selectedMaterialId, setSelectedMaterialId] = useState('frame');
  const [selectedArea, setSelectedArea] = useState(120);

  const currentMaterial =
    materialsList.find((m) => m.id === selectedMaterialId) ||
    materialsList[0] || {
      label: '',
      priceMinPerSqm: 0,
      priceMaxPerSqm: 0,
      duration: '—',
      note: '',
    };

  const minTotal = (currentMaterial.priceMinPerSqm * selectedArea).toLocaleString('ru-RU');
  const maxTotal = (currentMaterial.priceMaxPerSqm * selectedArea).toLocaleString('ru-RU');

  const handleGetEstimate = () => {
    console.log('Запрос сметы:', {
      material: currentMaterial.label,
      area: selectedArea,
      estimate: `${minTotal} ₽ – ${maxTotal} ₽`,
    });
  };

  return (
    <>
      <Header />
      <main className="construction-page">
        <section className="hero">
          <div className="container hero__container">
            <div className="hero__content">
              <h1 className="hero__title">
                Строим с нуля и доводим до идеала
              </h1>
              <p className="hero__subtitle">
                Дома под ключ, отделка, инженерия и реконструкция. Один договор,
                один прораб, один ответственный за результат.
              </p>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <header className="services__header">
              <h2 className="services__title">Наши услуги</h2>
              <p className="services__subtitle">
                Четыре направления — закрываем любую задачу с домом
              </p>
            </header>

            <div className="services__grid">
              {servicesList.map((service) => (
                <article key={service.id} className="service-card">
                  <div className="service-card__icon icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">
                    {service.description}
                  </p>
                  <ul className="service-card__list">
                    {service.features?.map((feature, index) => (
                      <li key={index} className="service-card__item">
                        <span className="service-card__check" aria-hidden="true">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="calculator">
          <div className="container">
            <div className="calculator__grid">
              <div className="calculator__controls">
                <h2 className="calculator__title">Сколько стоит построить дом?</h2>
                <p className="calculator__subtitle">
                  Прикиньте бюджет за минуту. Это ориентир: точную смету
                  посчитаем бесплатно после выезда на участок.
                </p>

                <div className="calculator__field">
                    <label htmlFor="wall-material" className="calculator__label">
                      Материал стен
                    </label>

                     <MaterialSelect
                        materials={materialsList}
                        selectedId={selectedMaterialId}
                        onChange={setSelectedMaterialId}
                      />
                </div>

                <div className="calculator__field">
                  <span className="calculator__label">
                    Площадь дома: <strong>{selectedArea} м²</strong>
                  </span>
                  <div className="calculator__areas" role="group" aria-label="Площадь дома">
                    {AREAS.map((area) => (
                      <button
                        key={area}
                        type="button"
                        className={`calculator__area-btn ${
                          selectedArea === area ? 'is-active' : ''
                        }`}
                        onClick={() => setSelectedArea(area)}
                      >
                        {area} м²
                      </button>
                    ))}
                  </div>
                </div>

                <p className="calculator__note">{currentMaterial.note}</p>
              </div>

              <aside className="calculator__result result-card">
                <div className="result-card__badge">
                  {currentMaterial.label} · {selectedArea} м²
                </div>

                <div className="result-card__label">
                  Ориентировочная стоимость под ключ
                </div>

                <div className="result-card__price">
                  {minTotal} ₽ –<br />
                  {maxTotal} ₽
                </div>

                <div className="result-card__duration">
                  Срок строительства: <strong>{currentMaterial.duration}</strong>
                </div>

                <p className="result-card__includes">
                  Включено: фундамент, коробка, кровля, окна, коммуникации и
                  чистовая отделка.
                </p>

                <Link
                  to="/contacts"
                  className="result-card__btn button"
                  onClick={handleGetEstimate}
                >
                  <span>Получить точную смету</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </aside>
            </div>

            <p className="calculator__disclaimer">
              * Расчёт ориентировочный и не является публичной офертой. Точная
              смета зависит от коммуникаций и проекта коммуникаций.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Construction;



