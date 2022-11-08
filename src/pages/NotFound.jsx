import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found.</h1>
      <p>404</p>
      <Link to="/">Go back to the homepage.</Link>
    </>
  )
}

export default NotFound