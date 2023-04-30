import { Link } from 'react-router-dom'
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
  return (
    <main className={styles.error}>
      <h1>404</h1>
      <p>Page Not Found.</p>
      <Link to='/'>Go back to the homepage.</Link>
    </main>
  )
}

export default NotFound
