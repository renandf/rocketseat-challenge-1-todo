import styles from './Header.module.css'

import todoLogo from '../assets/logo-todo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="ToDo logo" />
    </header>
  )
}

export default Header