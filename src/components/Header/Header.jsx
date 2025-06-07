import { Link } from 'react-router-dom';
import { HeaderDate } from './HeaderDate'
import Nav from '../Nav/Nav';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.headerDate}>
        <HeaderDate />
      </div>
      <h1 className={styles.headerTitle}>
        <Link className={styles.headerLink} to="/">The New York Times Reloaded</Link>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;