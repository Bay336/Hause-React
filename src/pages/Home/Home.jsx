
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Features from '../../components/Features/Features'
import Projects from '../../components/Projects/Projects'
import './Home.scss'


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
               <p className='home__wrapper-subtitle'>Каркасные, из бруса, газобетона  и кирпича — под ключ за 2,5–7 месяцев. Фиксированная  
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
        <section className='workflow'>
            <h2>Как мы строим</h2>
            <p>Четыре понятных этапа — вы всегда знаете, что происходит на участке</p>

            <ol className='steps-list'>
                <li>
                    <h3>Заявка и проект</h3>
                    <p>Помогаем выбрать проект, адаптируем планировку под участок и фиксируем смету в договоре.</p>
                </li>
                <li>
                    <h3>Фундамент и коробка</h3>
                    <p>Геодезия, фундамент, стены и кровля. Фотоотчёты каждую неделю в мессенджер.</p>
                </li>
                <li>
                    <h3>Инженерия и отделка</h3>
                    <p>Отопление, электрика, сантехника, чистовая отделка. Принимаете каждый этап.</p>
                </li>
                <li>
                    <h3>Сдача и ключи</h3>
                    <p>Клининг, проверка всех систем, передача документов и ключей. Гарантия 10 лет.</p>
                </li>
            </ol>
        </section>

        {/* 6. ПРИЗЫВ К ДЕЙСТВИЮ (CTA) */}
        <section className='cta-excursion'>
            <h2>Приезжайте на экскурсию по готовым домам</h2>
            <p>Покажем 5 построенных домов, расскажем про материалы и честно посчитаем смету под ваш участок. Это бесплатно и ни к чему не обязывает.</p>
            <button type='button' className='btn btn-large'>Записаться на экскурсию</button>
        </section>

    {/* 7. ПОДВАЛ САЙТА (FOOTER) */}
    <footer>
        <div className='footer-about'>
            <strong>ДомСтрой</strong>
            <p>Строим тёплые дома под ключ с 2009 года. Фиксированная смета и гарантия 10 лет.</p>
        </div>

        <nav className='footer-nav'>
            <ul>
                <li><a href='/'>Главная</a></li>
                <li><a href='/catalog'>Каталог домов</a></li>
                <li><a href='/building'>Строительство</a></li>
                <li><a href='/about'>О компании</a></li>
                <li><a href='/contacts'>Контакты</a></li>
            </ul>
        </nav>

        <div className='footer-contacts'>
            <a href='tel:+74951204567'>+7 (495) 120-45-67</a>
            <p>ежедневно 9:00–21:00</p>
        </div>

        <div className='footer-bottom'>
            <p>&copy; 2026 ДомСтрой. Все права защищены.</p>
        </div>
    </footer>


    </>
  )
}

export default Home

