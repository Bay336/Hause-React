import { Link } from 'react-router-dom';
import siteData from '../../siteData';
import './CardsHome.scss';

const CardsHome = ({ items, limit = 3, isCatalog = false }) => {
  // Если передали отфильтрованный список items — берем его, иначе берем общий массив
  const sourceData = items || siteData.projectsData;
  const featuredProjects = sourceData.slice(0, limit);

  return (
    <div className="projects__grid">
      {featuredProjects.map((project) => (
        <article
          key={project.id}
          className={`projects__item project-card ${isCatalog ? 'project-card--catalog' : ''}`} 
        >
     
            <img className="project-card__image" src={project.image} alt={project.title} />

            {/* Бейдж "Хит продаж" (в каталоге показываем только если есть флаг isHit, на главной — как было) */}
            {(!isCatalog || project.isHit) && (
              <span className="project-card__tag">Хит продаж</span>
            )}

            {/* В каталоге технология строительства переносится в правый верхний угол фото */}
            {isCatalog && (
              <span className="project-card__tech-badge">{project.tech}</span>
            )}

          <div className="project-card__content">
            <div className="project-card__top">
              <h3 className="project-card__title">{project.title}</h3>
              {/* На главной странице технология остается рядом с заголовком */}
              {!isCatalog && (
                <span className="project-card__secondary">{project.tech}</span>
              )}
            </div>

            {/* Описание проекта (только в каталоге) */}
            {isCatalog && project.description && (
              <p className="project-card__desc">{project.description}</p>
            )}

            {/* Характеристики: сетка 2x2 с иконками для каталога или одна строка для главной */}
            {isCatalog ? (
              <ul className="project-card__specs-grid">
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layers h-4 w-4" aria-hidden="true"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
                  </span> {project.area}
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bed-double h-4 w-4" aria-hidden="true"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>
                  </span> {project.rooms}
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bath h-4 w-4" aria-hidden="true"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path><line x1="10" x2="8" y1="5" y2="7"></line><line x1="2" x2="22" y1="12" y2="12"></line><line x1="7" x2="7" y1="19" y2="21"></line><line x1="17" x2="17" y1="19" y2="21"></line></svg>
                  </span> {project.bathrooms || '2 санузла'}
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-4 w-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </span> {project.term}
                </li>
              </ul>
            ) : (
              <p className="project-card__specs">
                {project.area} · {project.floors} · {project.rooms} · {project.term}
              </p>
            )}

            {/* Теги особенностей (только в каталоге) */}
            {isCatalog && project.features && (
              <div className="project-card__features">
                {project.features.map((feature, index) => (
                  <span key={index} className="project-card__feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Подвал карточки */}
            <div className="project-card__footer">
              <div className="project-card__price-box">
                {isCatalog && <span className="project-card__price-label">Под ключ</span>}
                <div className="project-card__price">{project.price}</div>
              </div>

              <Link to={project.link} className="project-card__btn btn">
                {isCatalog ? 'Хочу такой →' : 'Подробнее'}
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CardsHome;
