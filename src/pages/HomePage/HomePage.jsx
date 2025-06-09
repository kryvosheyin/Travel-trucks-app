import { Link } from 'react-router-dom';

import DocumentTitle from '@components/DocumentTitle';
import Container from '@components/Container/Container';
import Button from '@components/Button/Button';

import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <DocumentTitle title="Travel Trucks" />

      <main className={css.main}>
        <Container>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>

          <Button main aria-label="View now">
            <Link to="/catalog" className={css.link}>
              View Now
            </Link>
          </Button>
        </Container>
      </main>
    </>
  );
};

export default HomePage;
