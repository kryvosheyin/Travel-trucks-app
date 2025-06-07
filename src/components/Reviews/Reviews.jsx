import { useSelector } from 'react-redux';

import Icon from '@components/Icon/Icon';
import { selectCamperById } from '@redux/campers/selectors';

import css from './Reviews.module.css';

const Reviews = () => {
  const { reviews } = useSelector(selectCamperById);

  if (!reviews?.length) return <p className={css.noReviews}>No reviews</p>;

  const renderStars = rating => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="icon-star"
        className={index < rating ? 'iconStar' : 'iconStarEmpty'}
      />
    ));
  };

  return (
    <ul className={css.list}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
        <li className={css.item} key={reviewer_name}>
          <div className={css.header}>
            <p className={css.avatar}>{reviewer_name[0].toUpperCase()}</p>
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
