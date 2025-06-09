import { useSelector } from "react-redux";
import Icon from "@components/Icon/Icon";
import { selectCamperById } from "@redux/campers/selectors";
import css from "./Reviews.module.css";

const MAX_STARS = 5;

const Reviews = () => {
  const { reviews = [] } = useSelector(selectCamperById) || {};

  if (reviews.length === 0) return <p className={css.noReviews}>No reviews</p>;

  const renderStars = (rating) =>
    Array.from({ length: MAX_STARS }, (_, i) => (
      <Icon
        key={i}
        name="icon-star"
        className={i < rating ? css.iconStar : css.iconStarEmpty}
      />
    ));

  return (
    <ul className={css.list}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
        <li className={css.item} key={`${reviewer_name}-${idx}`}>
          <div className={css.header}>
            <p className={css.avatar}>
              {reviewer_name?.[0]?.toUpperCase() || "?"}
            </p>
            <div className={css.info}>
              <p className={css.name}>{reviewer_name}</p>
              <p className={css.rating}>{renderStars(reviewer_rating)}</p>
            </div>
          </div>
          <p className={css.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
