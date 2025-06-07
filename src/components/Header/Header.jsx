import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFavorites } from "@redux/favorites/selectors";
import Container from "@components/Container/Container";
import logo from "@assets/logo.svg";
import clsx from "clsx";
import css from "./Header.module.css";

const Header = () => {
  const favorites = useSelector(selectFavorites);
  const location = useLocation();

  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <Link to="/" className={css.logo}>
            <img src={logo} alt="TravelTrucks logo" />
          </Link>

          <ul className={css.list}>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) =>
                  clsx(
                    css.link,
                    isActive && location.pathname !== "/features" && css.active
                  )
                }
                to="/catalog"
                end
              >
                Catalog
              </NavLink>
            </li>
            {favorites.length > 0 && (
              <li className={css.item}>
                <NavLink
                  className={({ isActive }) =>
                    clsx(css.link, isActive && css.active)
                  }
                  to="/favorites"
                >
                  Favorites
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
