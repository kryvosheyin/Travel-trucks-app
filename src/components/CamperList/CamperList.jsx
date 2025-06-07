import Camper from '@components/Camper/Camper';

import css from './CamperList.module.css';

const CamperList = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map((camper, idx) => (
        <Camper key={camper.id} camper={camper} first={idx === 0} />
      ))}
    </ul>
  );
};

export default CamperList;
