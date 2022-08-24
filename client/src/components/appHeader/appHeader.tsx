import { NavLink } from 'react-router-dom';
import styles from './appHeader.module.scss';

const AppHeader = () => {
  return (
    <nav className={styles.app__menu}>
      <ul>
        <li>
          <NavLink end style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })} to="/">
            Home
          </NavLink>
        </li>
        /
        <li>
          <NavLink style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default AppHeader;
