import React, { useState, useMemo } from 'react';
import siteData from '../../siteData';

import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Catalog.scss';
import CardsHome from '../../components/CardHome/CardsHome';

  // Исправлено: обращаемся к siteData.projectsData и проверяем, что это массив
  const projectsList = Array.isArray(siteData?.projectsData)
    ? siteData.projectsData : [];


const Catalog = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedArea, setSelectedArea] = useState('all');


  const filteredProjects = useMemo(() => {
    return projectsList.filter((project) => {
      const projectMat = project.material || project.tech;
const matchesMaterial =
  selectedMaterial === 'all' || projectMat === selectedMaterial;

      // Приводим '120 м²' и 210 к единому числу для фильтрации
      const numericArea = parseFloat(project.area);

      let matchesArea = true;
      if (selectedArea === 'under-100') matchesArea = numericArea < 100;
      else if (selectedArea === '100-150') matchesArea = numericArea >= 100 && numericArea <= 150;
      else if (selectedArea === '150-200') matchesArea = numericArea > 150 && numericArea <= 200;
      else if (selectedArea === 'over-200') matchesArea = numericArea > 200;

      return matchesMaterial && matchesArea;
    });
  }, [selectedMaterial, selectedArea]);

  return (
    <div className="catalog">
      <Header />

      {/* Шапка */}
      <section className="catalog__header">
        <div className="container">
          <h1>Каталог домов</h1>
          <p className="catalog-header__subtitle">
            Все проекты строим под ключ с фиксированной сметой. Каждый проект можно изменить под ваш участок — бесплатно.
          </p>
        </div>
      </section>

      {/* передаем все нужные пропсы в компонент Filtr */}
        <Filter
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
          totalCount={filteredProjects.length}
        />
      <hr className="catalog__divider" />

        {/* Сетка проектов (Карточки) */}
        <div className="catalog__content container">
          <CardsHome items={filteredProjects} limit={6} isCatalog={true} />
        </div>
        

        {/* Баннер индивидуального проекта */}
        <section className="custom-project ">
          <div className="container">
            <div className="custom-project__box">
              <h3 className="custom-project__title">Не нашли подходящий проект?</h3>
              <p className="custom-project__text">
                Спроектируем дом с нуля под ваш участок и бюджет. Эскизный проект — бесплатно при заключении договора.
              </p>
              <button
                type="button"
                className="button btn--primary btn--large"
                onClick={() => console.log('Открыть форму обсуждения проекта')}
              >
                Обсудить свой проект
              </button>
            </div>
          </div>
        </section>


      <Footer />
    </div>
  );
};

export default Catalog;
