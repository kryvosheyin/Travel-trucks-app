import BookingForm from '@components/BookingForm/BookingForm';
import css from './Booking.module.css';

const Booking = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <h4 className={css.title}>Book your campervan now</h4>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <BookingForm />
    </div>
  );
};

export default Booking;
