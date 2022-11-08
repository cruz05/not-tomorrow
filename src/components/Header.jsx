const Header = ({counter}) => {
  return (
    <header className="container-header">
        <p>Welcome to <span className="app-name">Not Tomorrow!</span></p>
        <h1>You've got {counter} tasks today.</h1>
    </header>
    )
}

export default Header