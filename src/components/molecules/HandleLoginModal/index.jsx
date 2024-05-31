import React from 'react';
import { HandleLoginModalWrapper } from './HandleLoginModal.styles';
import Image from 'next/image';
import InfoIcon from '../../../_assets/info-icon.svg';
import Button from '@/components/atoms/Button';
import close from '../../../_assets/close.svg';

const HandleLoginModal = ({ setOpen, text }) => {
  return (
    <HandleLoginModalWrapper>
      <Image src={InfoIcon} alt="Info Icon" className="InfoIcon" />
      <span>{text}</span>
      <div className="btn-holder">
        <Button btntype="light-green" color="success" rounded md width="300" onClick={() => setOpen(false)}>
          Close
        </Button>
      </div>
    </HandleLoginModalWrapper>
  );
};

export default HandleLoginModal;
