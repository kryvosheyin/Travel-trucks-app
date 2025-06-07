import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './CamperPageNavigation.module.css';

export const CamperPageNavigation = () => {
  return (
    <ul className={css.menu}>
      <li>
        <NavLink
          to="features"
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Features
        </NavLink>
      </li>

      <li>
        <NavLink
          to="reviews"
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default CamperPageNavigation;
