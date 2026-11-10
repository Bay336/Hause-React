
import './Features.scss'

const Features =() => {

  return (
    <section className='features'>
      <div className="features__content container">
        <div className="features__content-title">
          <h2>Почему строят с нами</h2>
          <p className='features__content-p'>Мы берём на себя всё: проект, разрешения, стройку, инженерию и отделку. Вам остаётся выбрать обои и заехать.</p>
        </div>
         <div className='features__grid'>
            <div className='features__grid-item'>
              <div className="features__grid-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check h-6 w-6 text-primary" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <h3>Фиксированная цена</h3>
              <p className='features__grid-subtitle'>Смета закрепляется в договоре и не растёт в процессе стройки.</p>
            </div>
            <div className='features__grid-item'>
              <div className="features__grid-icon">
                 <svg xmlns="http://www.w3.org/2000/svg"width="24" height="24" viewBox="0 0 24 24"fill="none" stroke="currentColor"stroke-width="2" stroke-linecap="round"stroke-linejoin="round" class="lucidelucide-clock h-6 w-6 text-primary"aria-hidden="true"><circle cx="12" cy="12"r="10"></circle><polyline points="12 6 12 12 1614"></polyline></svg>
              </div>
              <h3>Сроки в договоре</h3>
              <p className='features__grid-subtitle' >За каждый день просрочки платим неустойку. Сдаём вовремя.</p>
            </div>
            <div className='features__grid-item'>
              <div className="features__grid-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round h-6 w-6 text-primary" aria-hidden="true"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path><circle cx="16.5" cy="7.5" r=".5"></circle></svg>
              </div>
              <h3>Дома под ключ</h3>
              <p className='features__grid-subtitle'>От фундамента до чистовой отделки и благоустройства участка.</p>
            </div>
         </div>
      </div>
    
    </section>
  )

}

export default Features