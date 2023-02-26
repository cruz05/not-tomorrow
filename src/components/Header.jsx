export default function Header({counter}) {
  return (
    <header>
        <h1 className="title">Welcome to <span className="app-name">Not Tomorrow</span>.</h1>
        <p>You've got {counter} tasks today.</p>
    </header>
    )
}
