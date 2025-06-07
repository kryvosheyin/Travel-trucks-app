import { useEffect, useRef, useState } from "react";
import EquipmentItem from "@components/EquipmentItem/EquipmentItem";
import css from "./EquipmentList.module.css";

const EquipmentList = ({ equipment, isInCamperCard }) => {
  const listRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [maxHeight, setMaxHeight] = useState(104);

  useEffect(() => {
    const updateMaxHeight = () => {
      if (window.matchMedia("(min-width: 1440px)").matches) {
        setMaxHeight(104);
      } else if (window.matchMedia("(min-width: 320px)").matches) {
        setMaxHeight(71);
      } else {
        setMaxHeight("auto");
      }
    };

    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);

    return () => window.removeEventListener("resize", updateMaxHeight);
  }, []);

  useEffect(() => {
    if (isInCamperCard) {
      const listElement = listRef.current;
      if (listElement.scrollHeight > maxHeight) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    } else {
      setIsScrollable(false);
    }
  }, [equipment, isInCamperCard, maxHeight]);

  return (
    <ul
      ref={listRef}
      className={`${css.equipmentList} ${isScrollable ? css.grab : ""}`}
      style={{
        maxHeight: isScrollable ? `${maxHeight}px` : "auto",
        overflowY: isScrollable ? "auto" : "visible",
      }}
    >
      {equipment.map(({ icon, label }) => (
        <EquipmentItem key={label} icon={icon} label={label} />
      ))}
    </ul>
  );
};

export default EquipmentList;
