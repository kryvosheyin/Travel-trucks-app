import { useState } from "react";
import css from "./CamperImage.module.css";
import Icon from "@components/Icon/Icon";

const CamperImage = ({ name, gallery = [] }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleImageIncrement = () => {
    setActiveIdx((prev) => (prev + 1) % gallery.length);
  };

  const handleImageDecrement = () => {
    setActiveIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className={css.wrapper}>
      <button
        type="button"
        onClick={handleImageIncrement}
        aria-label="Next Image"
        className={`${css.chevron} ${css.right}`}
      >
        <Icon name="icon-chevron_right" className="small" />
      </button>
      <button
        type="button"
        onClick={handleImageDecrement}
        aria-label="Previous Image"
        className={`${css.chevron} ${css.left}`}
      >
        <Icon name="icon-chevron_left" className="small" />
      </button>
      <div className={css.dot_buttons}>
        {Array.from({ length: gallery.length }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIdx(index)}
            disabled={index === activeIdx}
            aria-disabled={index === activeIdx}
            aria-label={`Image ${index + 1}`}
            className={css.dot_button}
          >
            <span aria-hidden="true"></span>
          </button>
        ))}
      </div>
      <img
        src={gallery[activeIdx].thumb}
        alt={name}
        className={css.camperImage}
      />
    </div>
  );
};

export default CamperImage;
