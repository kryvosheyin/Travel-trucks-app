import { Link } from "react-router-dom";

import CamperHeader from "@components/CamperHeader/CamperHeader";
import EquipmentList from "@components/EquipmentList/EquipmentList";
import CamperImage from "../CamperImage/CamperImage";
import Button from "@components/Button/Button";

import { getFilteredEquipment } from "@utils/utils";

import css from "./Camper.module.css";

const Camper = ({ camper, first }) => {
  const { id, name, description, gallery = [] } = camper;

  const equipment = getFilteredEquipment({ ...camper });

  return (
    <li className={css.camperCard}>
      <CamperImage name={name} gallery={gallery} />

      <div className={css.camperDetails}>
        <CamperHeader camper={camper} first={first} />

        <p className={css.camperDescription}>{description}</p>

        <EquipmentList equipment={equipment} isInCamperCard={true} />

        <Button aria-label="Show More">
          <Link
            to={`/catalog/${id}/features`}
            className={css.link}
            target="_blank"
          >
            Show More
          </Link>
        </Button>
      </div>
    </li>
  );
};

export default Camper;
