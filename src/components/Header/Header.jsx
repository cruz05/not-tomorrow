import styles from './Header.module.css'

export function Header({ counter }) {
  return (
    <header className={styles.header}>
      <h1>
        Welcome to <span>Not Tomorrow.</span>
      </h1>
      <p>You've got {counter} tasks today.</p>
    </header>
  )
}
