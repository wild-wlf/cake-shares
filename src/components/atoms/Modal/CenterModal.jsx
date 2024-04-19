import React, { useEffect, useContext } from "react";
// import { AuthContext } from "context/authContext";
import { ContentHolder, Head, StyledModal } from "./Modal.styles";
import close from "../../../_assets/close.svg";
import Image from "next/image";

const CenterModal = ({
  children,
  open,
  setOpen,
  bg,
  padding,
  width,
  radius,
  desktopRight,
  desktopTop,
  title,
  setIsEditing,
}) => {
  // const { clearFormData } = useContext(AuthContext);
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
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
    setOpen(false);
  };

  return (
    open && (
      <StyledModal
        open={open}
        onClick={handleClose}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            handleClose();
          }
        }}
      >
        <ContentHolder
          bg={bg}
          padding={padding}
          width={width}
          radius={radius}
          desktopRight={desktopRight}
          desktopTop={desktopTop}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          <Head>
            <strong>{title}</strong>
            <button
              type="button"
              className="closer"
              onClick={handleClose}
              tabIndex={0}
            >
              <Image src={close} alt="Close-Modal" />
            </button>
          </Head>
          {children}
        </ContentHolder>
      </StyledModal>
    )
  );
};

export default CenterModal;
