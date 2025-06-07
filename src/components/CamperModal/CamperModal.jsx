import Modal from 'react-modal';

import css from './CamperModal.module.css';

Modal.setAppElement('#root');

const CamperModal = ({ isOpen, onClose, name, imgSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.image}>
        <img src={imgSrc} alt={name} />
      </div>
    </Modal>
  );
};

export default CamperModal;
