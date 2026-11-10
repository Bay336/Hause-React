import { Link } from 'react-router-dom'
import siteData from '../../siteData';
import './CardsHome.scss'

const CardsHome = () => {
  return (  


<div className="projects__grid">

  {siteData.projectsData.map((project) => (
    <article key={project.id} className="projects__item project-card">
      
      {/* Элементы блока project-card */}
      <img className="project-card__image" src={project.image} alt={project.title} />
      
      {/* Глобальный блок тегов (tag) + модификаторы конкретной карточки */}
      <span className="project-card__tag">Хит продаж</span>
      

      <div className="project-card__content">
        <div className="project-card__top">
           <h3 className="project-card__title">{project.title}</h3>
           <span className="project-card__secondary ">{project.tech}</span>
        </div>
        <p className="project-card__specs">
          {project.area} · {project.floors} · {project.rooms} · {project.term}
        </p>
        
        <div className="project-card__footer">
          <div className="project-card__price">{project.price}</div>
          {/* МИКС: элемент карточки + глобальный класс кнопки (btn) */}
          <Link to={project.link} className="project-card__btn btn">Подробнее</Link>
        </div>
      </div> 
      
    </article>
  ))}
</div>

  );
}
 
export default CardsHome;