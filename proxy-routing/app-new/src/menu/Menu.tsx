import styles from './Menu.module.css';

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.item}>
        <a href='/'>Dashboard</a>
      </div>
      <div className={styles.item}>
        <a href='/users'>Users</a>
      </div>
      <div className={styles.item}>
        <a href='/reports'>Reports</a>
      </div>
    </div>
  );
};
