import Camper from "@components/Camper/Camper";
import css from "./CamperList.module.css";

const CamperList = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <ul className={css.list}>
      {items.map((camper, idx) => (
        <Camper key={camper.id || idx} camper={camper} first={idx === 0} />
      ))}
    </ul>
  );
};

export default CamperList;
