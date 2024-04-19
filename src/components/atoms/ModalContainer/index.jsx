import React, { useEffect, useState } from 'react';
import Modal from '../Modal/CenterModal';

function ModalContainer({
  btnComponent,
  content,
  title,
  xl,
  lg,
  sm,
  isClosable,
  onModalClose = () => {},
  isOpen,
  imgPreview,
  width,
  helpModal,
}) {
  const [isVisible, setIsVisible] = useState(!!isOpen);
  const showModal = () => {
    setIsVisible(true);
  };

  const handleCancel = () => {
    onModalClose();
    setIsVisible(false);
  };
  useEffect(() => {
    if (!isVisible) {
      onModalClose();
    }
  }, [isVisible]);

  return (
    <>
      {btnComponent && btnComponent({ onClick: showModal })}
      <Modal
        title={title}
        isOpen={isVisible}
        setIsOpen={x => {
          setIsVisible(x);
        }}
        onClose={() => {
          onModalClose();
        }}
        xl={xl}
        lg={lg}
        sm={sm}
        width={width}
        isClosable={isClosable}
        helpModal={helpModal}
        imgPreview={imgPreview}>
        {content({ onClose: handleCancel })}
      </Modal>
    </>
  );
}

export default ModalContainer;
