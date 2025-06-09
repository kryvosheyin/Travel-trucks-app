import { useState } from "react";
import css from "./CamperImage.module.css";
import Icon from "@components/Icon/Icon";

const CamperImage = ({ name, gallery = [] }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!gallery.length) {
    return (
      <div className={css.wrapper}>
        <div className={css.noImage}>No image available</div>
      </div>
    );
  }

  const goToNext = () => setActiveIdx((prev) => (prev + 1) % gallery.length);
  const goToPrev = () =>
    setActiveIdx((prev) => (prev - 1 + gallery.length) % gallery.length);

  const currentImg = gallery[activeIdx];
  const imageAlt = `${name} image ${activeIdx + 1} of ${gallery.length}`;

  return (
    <div className={css.wrapper}>
      {gallery.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous Image"
            className={`${css.chevron} ${css.left}`}
          >
            <Icon name="icon-chevron_left" className={css.iconSmall} />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next Image"
            className={`${css.chevron} ${css.right}`}
          >
            <Icon name="icon-chevron_right" className={css.iconSmall} />
          </button>
        </>
      )}

      <img
        src={currentImg.thumb}
        alt={imageAlt}
        className={css.camperImage}
        loading="lazy"
      />

      {gallery.length > 1 && (
        <div className={css.dot_buttons}>
          {gallery.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIdx(index)}
              disabled={index === activeIdx}
              aria-disabled={index === activeIdx}
              aria-label={`Show image ${index + 1}`}
              className={css.dot_button}
              tabIndex={index === activeIdx ? -1 : 0}
            >
              <span aria-hidden="true"></span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CamperImage;
