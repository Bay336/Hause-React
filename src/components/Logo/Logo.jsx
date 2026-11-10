import './Logo.scss'
import clsx from 'clsx'


const Logo = (props) => {
  const {
    className,
    title='ДомСтой', 
    //loading = 'lazy'
  } = props


  return (
      <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <span className="logo__span">ДС</span>
      <p className="logo__p">{title}</p>
    </a>


  )
}
export default Logo