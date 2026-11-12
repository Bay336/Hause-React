
import './BuildingHouse.scss'

const BuildingHouse = () => {
  return (  
    <section className='building'>
      <div className="building__content container">
         <div className="building__content-title">
            <h2>Как мы строим</h2>
            <p>Четыре понятных этапа — вы всегда знаете, что происходит на участке</p>
         </div>
        <div className="building__grid">
          <div className="building__grid-item">
              <div className="building__grid-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-check h-5 w-5 text-primary" aria-hidden="true"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>
              </div>
              <h3>Заявка и проект</h3>
              <p>Помогаем выбрать проект, адаптируем планировку под участок и фиксируем смету в договоре.</p>
          </div>
          <div className="building__grid-item">
            <div className="building__grid-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ruler h-5 w-5 text-primary" aria-hidden="true"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path>
              </svg>
            </div>
              <h3>Фундамент и коробка</h3>
              <p>Геодезия, фундамент, стены и кровля. Фотоотчёты каждую неделю в мессенджер.</p>
          </div>
          <div className="building__grid-item">
            <div className="building__grid-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home h-5 w-5 text-primary" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
              <h3>Инженерия и отделка</h3>
              <p>Отопление, электрика, сантехника, чистовая отделка. Принимаете каждый этап.</p>
          </div>
          <div className="building__grid-item">
            <div className="building__grid-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round h-5 w-5 text-primary" aria-hidden="true"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path><circle cx="16.5" cy="7.5" r=".5"></circle></svg>
            </div>
              <h3>Сдача и ключи</h3>
              <p>Клининг, проверка всех систем, передача документов и ключей. Гарантия 10 лет.</p>
          </div>
        </div>
     
      </div>
     
    </section>

  );
}
 
export default BuildingHouse;