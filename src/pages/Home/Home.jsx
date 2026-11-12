
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Features from '../../components/Features/Features'
import Projects from '../../components/Projects/Projects'
import BuildingHouse from '../../components/BuildingHouse/BuildingHouse'
import Excursion from '../../components/Excursion/Excursion'

import './Home.scss'
import Footer from '../../components/Footer/Footer'




const Home = () => {
  return (
    <>
      <Header />
         {/*2. ГЛАВНЫЙ ЭКРАН (HERO SECTION) -->*/}
        <section className='home'>
          <div className='container'>
             <div className="home__wrapper">
               <div className='home__wrapper-discript'>Строим с 2009 года · 480+ сданных домов</div>
               <h1>Строим дома, в которые хочется возвращаться</h1>
               <p>Каркасные, из бруса, газобетона  и кирпича — под ключ за 2,5–7 месяцев. Фиксированная  
                 смета, сроки в  договоре и гарантия 10 лет.
               </p>
               <div className='home__wrapper-buttons'>
                <Button className='home__wrapper-btn button button--transparent '>
                  <Link to='./project'>
                   <span>Выбрать проект дома</span>
                   <span className='btn-arrow'> →</span>
                   </Link>
                </Button >
                <Button className='home__wrapper-btn button button--transparent'>
                  <Link to='./consul'>
                    <span>Получить консультацию</span>
                    <span className='btn-arrow'> →</span>
                  </Link>
                </Button>
               </div>

               <ul className='home__wrapper-list'>
                    <li>✓ От 5,4 млн ₽ под ключ</li>
                    <li>✓ Ипотека и маткапитал</li>
                    <li>✓ Участки в подарок к проекту*</li>
               </ul>

             </div>
              
          </div>
        </section>

         {/* 3. БЛОК ПРЕИМУЩЕСТВ -->*/}
         <Features />

        {/* 4. ПОПУЛЯРНЫЕ ПРОЕКТЫ -->*/}
         <Projects />

       {/* / 5. КАК МЫ СТРОИМ */}
        <BuildingHouse />

        {/* 6. ПРИЗЫВ К ДЕЙСТВИЮ (CTA) */}
        <Excursion />

      {/* 7. ПОДВАЛ САЙТА (FOOTER) */}
        <Footer />
    </>
  )
}

export default Home

