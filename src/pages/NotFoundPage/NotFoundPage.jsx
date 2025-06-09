import { useNavigate } from "react-router-dom";
import Button from "@components/Button/Button";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoToCatalog = () => {
    navigate("/catalog");
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.text}>
        Sorry, the page you’re looking for does not seem to exist.
        <br />
        Let’s get you back to the catalog!
      </p>

      <Button onClick={handleGoToCatalog} main>
        Catalog
      </Button>
    </div>
  );
};

export default NotFoundPage;
