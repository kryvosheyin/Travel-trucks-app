import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import CamperList from '@components/CamperList/CamperList';
import Button from '@components/Button/Button';

import { changePage } from '@redux/campers/slice';
import {
  selectFilteredCampers,
  selectPage,
  selectIsLoading,
} from '@redux/campers/selectors';

import css from './Campers.module.css';

const Campers = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredCampers);
  const page = useSelector(selectPage);
  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState([]);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const newVisibleItems = filteredItems.slice(0, itemsPerPage * page);
    setVisibleItems(newVisibleItems);
  }, [filteredItems, page]);

  const handleClick = () => {
    if (visibleItems.length < filteredItems.length) {
      dispatch(changePage(page + 1));
    }
  };

  const isLoadMoreVisible = visibleItems.length < filteredItems.length;

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
