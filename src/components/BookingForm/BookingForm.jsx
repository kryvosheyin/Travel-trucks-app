import * as Yup from "yup";
import { Field, Form, Formik, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import Button from "@components/Button/Button";
import { toastAlert } from "@utils/toastAlert";
import clsx from "clsx";
import "react-datepicker/dist/react-datepicker.css";
import css from "./BookingForm.module.css";
import "./CustomDatePicker.css";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  dateRange: { start: null, end: null },
  comment: "",
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Please enter at least 3 characters.")
    .trim()
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
  dateRange: Yup.object()
    .shape({
      start: Yup.date().required("Start date is required"),
      end: Yup.date().required("End date is required"),
    })
    .required("Booking date range is required"),
  comment: Yup.string().trim(),
});

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const BookingForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    toastAlert.success(`Dear ${values.name}, your booking is confirmed!`);
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.form}>
          <div className={css.field}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.field}>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>

          <div className={css.field}>
            <DatePicker
              selected={values.dateRange.start}
              onChange={([start, end]) => {
                setFieldValue("dateRange", { start, end });
              }}
              startDate={values.dateRange.start}
              endDate={values.dateRange.end}
              selectsRange
              closeOnScroll
              minDate={today}
              locale={enGB}
              dateFormat="MMMM d, yyyy"
              placeholderText="Booking date*"
              className={css.input}
            />
            <ErrorMessage
              className={css.error}
              name="dateRange.start"
              component="span"
            />
            <ErrorMessage
              className={css.error}
              name="dateRange.end"
              component="span"
            />
          </div>

          <div className={css.field}>
            <Field
              className={clsx(css.input, css.comment)}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
          </div>
          <Button selfcenter margin type="submit">
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
