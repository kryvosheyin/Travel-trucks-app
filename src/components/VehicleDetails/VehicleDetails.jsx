import { formatString, addSpaceToUnit } from '@utils/utils';

import css from './VehicleDetails.module.css';

const VehicleDetails = ({ form, length, width, height, tank, consumption }) => {
  return (
    <div className={css.wrapper}>
      <h4 className={css.title}>Vehicle Details</h4>
      <hr className={css.separator} />
      <ul className={css.list}>
        <li className={css.item}>
          Form <span>{formatString(form)}</span>
        </li>
        <li className={css.item}>
          Length <span>{addSpaceToUnit(length)}</span>
        </li>
        <li className={css.item}>
          Width <span>{addSpaceToUnit(width)}</span>
        </li>
        <li className={css.item}>
          Height <span>{addSpaceToUnit(height)}</span>
        </li>
        <li className={css.item}>
          Tank <span>{addSpaceToUnit(tank)}</span>
        </li>
        <li className={css.item}>
          Consumption <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
