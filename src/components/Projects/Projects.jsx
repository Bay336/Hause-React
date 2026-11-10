
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import CardsHome from '../CardHome/CardsHome'

import './Projects.scss'





const Projects =() => {
  return (
   <section className='projects'>
    <div className="projects__content container">
       <h2>Популярные проекты</h2>
       <div className="projects__content-subtitle">
         <p>Три дома, которые чаще всего выбирают наши заказчики</p>
         <Button className='projects__wrapper-btn button button--transparent '>
         <Link to='./project'>
            <span>Весь каталог</span>
            <span className='btn-arrow'> →</span>
         </Link>
         </Button >
       </div>

     <CardsHome />
       {/*
      <div className='projects__grid'>
      
          {siteData.projectsData.map((project) => (
            <article key={project.id} className='projects__grid-card'>
              <img src={project.image} alt={project.title} />
               <span className='tag'>{project.tag}</span>
              <div className="projects__grid-descript">
                 <h3>{project.title}</h3>
                 <p className='project-desc'>{project.desc}</p>
                 <ul className='project-specs'>
                   <li>Технология: {project.tech}</li>
                   <li>Площадь: {project.area}</li>
                   <li>Этажность: {project.floors}</li>
                   <li>Комнаты: {project.rooms}</li>
                   <li>Срок: {project.term}</li>
                 </ul>
                 <div className='project-price'>{project.price}</div>
                 <a href={project.link} className='btn'>Подробнее</a>
              </div>
            </article>
          ))}
          
      </div>
     */}

    </div>
   </section>
  )
}
export default Projects