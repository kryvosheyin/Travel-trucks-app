import { useDispatch, useSelector } from "react-redux";
import CamperList from "@components/CamperList/CamperList";
import Button from "@components/Button/Button";
import { changePage } from "@redux/campers/slice";
import {
  selectFilteredCampers,
  selectPage,
  selectIsLoading,
} from "@redux/campers/selectors";
import css from "./Campers.module.css";

const itemsPerPage = 4;

const Campers = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredCampers);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

  const visibleItems = filteredItems.slice(0, itemsPerPage * page);
  const isLoadMoreVisible = visibleItems.length < filteredItems.length;

  const handleClick = () => {
    if (isLoadMoreVisible) {
      dispatch(changePage(page + 1));
    }
  };

  return (
    <div className={css.container}>
      {visibleItems.length > 0 && <CamperList items={visibleItems} />}

      {!isLoading && visibleItems.length === 0 && (
        <p className={css.notFound}>No campers found</p>
      )}

      {isLoadMoreVisible && (
        <Button variant="outlined" onClick={handleClick} aria-label="Load more">
          Load more
        </Button>
      )}
    </div>
  );
};

export default Campers;
