import React, { useEffect, useContext } from 'react';
import { ContentHolder, Head, StyledModal } from './Modal.styles';
import close from '../../../_assets/close.svg';
import Image from 'next/image';

const CenterModal = ({
  children,
  open,
  setOpen,
  bg,
  padding,
  width,
  overflow,
  radius,
  desktopRight,
  desktopTop,
  title,
  setIsEditing,
  zIndex,
  iscloseAble = true,
  setRegistrationData,
  registrationData,
}) => {
  // const { clearFormData } = useContext(AuthContext);
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
      document.body.style.overflow = 'auto';
    };

    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [open]);

  const handleClose = () => {
    // clearFormData?.();
    // setIsEditing?.({
    //   status: false,
    // });
    if (iscloseAble) {
      setOpen(false);
    }
    if (registrationData) {
      setRegistrationData(prev => ({
        ...prev,
        username: '',
        email: '',
        sellerType: '',
      }));
    }
  };

  return (
    open && (
      <StyledModal
        $zIndex={zIndex}
        open={open}
        onClick={handleClose}
        onKeyDown={e => {
          if (iscloseAble) {
            if (e.key === 'Escape') {
              handleClose();
            }
          }
        }}>
        <ContentHolder
          bg={bg}
          padding={padding}
          width={width}
          overflow={overflow}
          radius={radius}
          desktopRight={desktopRight}
          desktopTop={desktopTop}
          role="dialog"
          aria-modal="true"
          onClick={e => e.stopPropagation()}
          tabIndex={-1}>
          <Head>
            <strong className="title">{title}</strong>
            {iscloseAble && (
              <button type="button" className="closer" onClick={handleClose} tabIndex={0}>
                <Image src={close} alt="Close-Modal" />
              </button>
            )}
          </Head>
          {children}
        </ContentHolder>
      </StyledModal>
    )
  );
};

export default CenterModal;
