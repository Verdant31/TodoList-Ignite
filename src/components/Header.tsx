import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="rocket.svg" />
        <span><h1>to</h1><h1>do</h1></span>
      </div>
    </div>
  )
}