import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Construction.scss';
import Button from '../../components/Button/Button';

const SERVICES_DATA = [
  {
    id: 'turnkey',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hammer h-6 w-6 text-primary" aria-hidden="true"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path><path d="M17.64 15 22 10.64"></path><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"></path></svg>,
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paintbrush h-6 w-6 text-primary" aria-hidden="true"><path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"></path><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"></path><path d="M14.5 17.5 4.5 15"></path></svg>,
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plug h-6 w-6 text-primary" aria-hidden="true"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>,
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
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets h-6 w-6 text-primary" aria-hidden="true"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>,
    title: 'Реконструкция и пристройки',
    description:
      'Увеличим площадь дома: пристрой, второй этаж, мансарда, терраса. Усилим фундамент и утеплим старый дом.',
    features: [
      'Пристройки и мансарды',
      'Утепление фасадов',
      'Замена кровли',
    ],
  },
];

const MATERIALS = [
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
];

const AREAS = new Array(80, 100, 120, 150, 180, 250);

export const Construction = () => {
  const [selectedMaterialId, setSelectedMaterialId] = useState('frame');
  const [selectedArea, setSelectedArea] = useState(120);

  const currentMaterial =
    MATERIALS.find((m) => m.id === selectedMaterialId) || MATERIALS.at(0);

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
            {SERVICES_DATA.map((service) => (
              <article key={service.id} className="service-card">
                <div className="service-card__icon icon" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">
                  {service.description}
                </p>
                <ul className="service-card__list">
                  {service.features.map((feature, index) => (
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
                <div className="calculator__select-wrapper">
                  <select
                    id="wall-material"
                    className="calculator__select"
                    value={selectedMaterialId}
                    onChange={(e) => setSelectedMaterialId(e.target.value)}
                  >
                    {MATERIALS.map((mat) => (
                      <option key={mat.id} value={mat.id}>
                        {mat.label}
                      </option>
                    ))}
                  </select>
                </div>
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


