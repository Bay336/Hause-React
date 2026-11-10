import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary';

// Импорт страниц
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Construction from './pages/Construction/Construction'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import NotFound from './pages/NotFound/NotFound' // страница 404

// Импорт общих стилей, если есть
import './App.scss'

// Простая заглушка, которая покажется вместо упавшего интерфейса - 404
function ErrorFallback({ error }) {
  return (
    <div role="alert" style={{ padding: '20px', color: 'red' }}>
      <h2>Что-то пошло не так в интерфейсе:</h2>
      <pre>{error.message}</pre>
    </div>
  );
}

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App


/* видео №4 */
