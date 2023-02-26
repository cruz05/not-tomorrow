import {Link} from 'react-router-dom'
import '../styles/globals.css'
import '../styles/NotFound.css'

const NotFound = () => {
  return (
    <main className='error-page'>
      <h1>404</h1>
      <p>Page Not Found.</p>
      <Link to="/">Go back to the homepage.</Link>
    </main>
  )
}

export default NotFound