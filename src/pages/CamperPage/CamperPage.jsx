import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Outlet } from "react-router-dom";

import DocumentTitle from "@components/DocumentTitle";
import Loader from "@components/Loader/Loader";
import Container from "@components/Container/Container";
import CamperHeader from "@components/CamperHeader/CamperHeader";
import CamperPageNavigation from "@components/CamperPageNavigation/CamperPageNavigation";
import CamperModal from "@components/CamperModal/CamperModal";
import Booking from "@components/Booking/Booking";
import ScrollUp from "@components/ScrollUp/ScrollUp";

import { getCamperById } from "@redux/campers/operations";
import { selectIsLoading, selectCamperById } from "@redux/campers/selectors";
import { toastAlert } from "@utils/toastAlert";
import { scrollToTheTop } from "@utils/utils";

import css from "./CamperPage.module.css";

const CamperPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const camper = useSelector(selectCamperById);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalParams, setModalParams] = useState({});

  const handleClick = (event) => {
    setModalParams({
      imgSrc: event.target.dataset.original,
      name: camper.name,
    });
    setIsOpenModal(true);
  };

  useEffect(() => {
    dispatch(getCamperById(camperId))
      .unwrap()
      .catch((error) => toastAlert.error(error));
  }, [dispatch, camperId]);

  useEffect(scrollToTheTop, []);

  return (
    <>
      <DocumentTitle title="Travel Trucks | Camper" />

      {isLoading && <Loader />}

      <main>
        <section className={css.section}>
          <Container>
            {camper && (
              <div className={css.wrapper}>
                <CamperHeader camper={camper} />

                <ul className={css.gallery}>
                  {camper.gallery.map(({ thumb, original }) => (
                    <li key={thumb} className={css.galleryItem}>
                      <img
                        src={thumb}
                        data-original={original}
                        alt="Camper"
                        className={css.galleryImage}
                        onClick={handleClick}
                      />
                    </li>
                  ))}
                </ul>

                <p className={css.description}>{camper.description}</p>

                <CamperPageNavigation />

                <div className={css.content}>
                  <Suspense fallback={<Loader />}>
                    <Outlet />
                  </Suspense>

                  <Booking />
                </div>
              </div>
            )}
          </Container>
        </section>
      </main>

      <CamperModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        {...modalParams}
      />
      <ScrollUp />
    </>
  );
};

export default CamperPage;
