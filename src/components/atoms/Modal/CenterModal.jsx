import React, { useEffect } from 'react';
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
  zIndex,
  iscloseAble = true,
  headImage,
}) => {
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
    if (iscloseAble) {
      setOpen(false);
    }
  };

  return (
    open && (
      <StyledModal
        $zIndex={zIndex}
        open={open}
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
            {headImage && <Image src={headImage} alt="Icon" />}
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
