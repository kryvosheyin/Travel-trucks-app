import { MoonLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <MoonLoader color="#475467" />
    </div>
  );
};

export default Loader;
