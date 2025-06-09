import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DocumentTitle from '@components/DocumentTitle';
import Container from '@components/Container/Container';
import FiltersForm from '@components/FiltersForm/FiltersForm';
import Campers from '@components/Campers/Campers';
import Loader from '@components/Loader/Loader';
import ScrollUp from '@components/ScrollUp/ScrollUp';

import { getCampers } from '@redux/campers/operations';
import { selectIsLoading } from '@redux/campers/selectors';
import { changeFilter, initialState } from '@redux/filters/slice';
import { toastAlert } from '@utils/toastAlert';
import { scrollToTheTop } from '@utils/utils';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCampers())
      .unwrap()
      .catch(error => toastAlert.error(error));
    return () => dispatch(changeFilter(initialState));
  }, [dispatch]);

  useEffect(scrollToTheTop, []);

  return (
    <>
      <DocumentTitle title="Travel Trucks | Catalog" />

      <main>
        <section className={css.section}>
          <Container className="catalog">
            <FiltersForm />
            {isLoading && <Loader />}
            <Campers />
          </Container>
        </section>
      </main>
      <ScrollUp />
    </>
  );
};

export default CatalogPage;
