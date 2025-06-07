import Icon from '@components/Icon/Icon';

import css from './EquipmentItem.module.css';

const EquipmentItem = ({ icon, label }) => {
  return (
    <li className={css.equipmentItem}>
      <Icon name={icon} className="small" />
      {label}
    </li>
  );
};

export default EquipmentItem;
