import { Link } from 'react-router-dom'; // <-- ОБЯЗАТЕЛЬНЫЙ ИМПОРТ

const NotFound = () => {
  return (
    <div className="not-found" style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1>404</h1>
      <p>Ой! Страница, которую вы ищете, не существует.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
        Вернуться на главную
      </Link>
    </div>

  )
}
export default NotFound