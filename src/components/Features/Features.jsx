import { useSelector } from 'react-redux';

import EquipmentList from '@components/EquipmentList/EquipmentList';
import VehicleDetails from '@components/VehicleDetails/VehicleDetails';

import { selectCamperById } from '@redux/campers/selectors';
import { getFilteredEquipment } from '@utils/utils';

import css from './Features.module.css';

const Features = () => {
  const camper = useSelector(selectCamperById);

  const equipment = getFilteredEquipment({ ...camper });

  return (
    <div className={css.wrapper}>
      <EquipmentList equipment={equipment} />

      <VehicleDetails {...camper} />
    </div>
  );
};

export default Features;
