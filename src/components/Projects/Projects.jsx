
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
         <Link to='./catalog'>
            <span>Весь каталог</span>
            <span className='btn-arrow'> →</span>
         </Link>
         </Button >
       </div>

     <CardsHome />

    </div>
   </section>
  )
}
export default Projects