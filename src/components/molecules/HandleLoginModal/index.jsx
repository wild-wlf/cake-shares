import React, { useContext } from 'react';
import { HandleLoginModalWrapper } from './HandleLoginModal.styles';
import Image from 'next/image';
import InfoIcon from '../../../_assets/info-icon.svg';
import Button from '@/components/atoms/Button';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/router';

const HandleLoginModal = ({ setOpen, text, modalIntent }) => {
  const { setLoginModal, setRegisterModal } = useContext(UserContext);
  const router = useRouter();

  return (
    <HandleLoginModalWrapper>
      <Image src={InfoIcon} alt="Info Icon" className="InfoIcon" />
      <span>{text}</span>
      <div className="btn-holder">
        {modalIntent === 'Login Required!' ? (
          <>
            <Button
              btntype="primary"
              color="success"
              rounded
              md
              width="200"
              onClick={() => {
                setLoginModal(true);
                setOpen(false);
              }}>
              Login
            </Button>
            <Button
              btntype="primary"
              color="success"
              rounded
              md
              width="200"
              onClick={() => {
                setRegisterModal(true);
                setOpen(false);
              }}>
              Register
            </Button>
          </>
        ) : modalIntent === 'KYC Under Review!' ? null : (
          <Button btntype="light-green" color="success" rounded md width="200" onClick={() => router.push('/wallet')}>
            Topup
          </Button>
        )}
      </div>
    </HandleLoginModalWrapper>
  );
};

export default HandleLoginModal;
