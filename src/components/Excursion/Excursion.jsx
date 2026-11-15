import { Link } from 'react-router-dom'
import Button from '../Button/Button';
import './Excursion.scss'


const Excursion = () => {
  return (  
     <section className='excursion'>
      <div className="excursion__content container">
        <div className="excursion__content-wrapper">
          <h2>Приезжайте на экскурсию по готовым домам</h2>
          <p className='excursion__subtitle'>Покажем 5 построенных домов, расскажем про материалы и честно посчитаем смету под ваш участок. Это бесплатно и ни к чему не обязывает.
          </p>
        </div>
      
        <Button className='excursion__btn button'>
            <Link to='./contacts'>
             <span>Записаться на экскурсию</span>
             <span className='btn-arrow'> →</span>
             </Link>
        </Button >
      </div>
       
     </section>

  );
}
 
export default Excursion;