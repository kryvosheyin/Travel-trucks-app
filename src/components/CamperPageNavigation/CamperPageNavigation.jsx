import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./CamperPageNavigation.module.css";

const navItems = [
  { to: "features", label: "Features" },
  { to: "reviews", label: "Reviews" },
];

const CamperPageNavigation = () => (
  <ul className={css.menu}>
    {navItems.map(({ to, label }) => (
      <li key={to}>
        <NavLink
          to={to}
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default CamperPageNavigation;
