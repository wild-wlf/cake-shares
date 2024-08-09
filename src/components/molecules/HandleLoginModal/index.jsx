import React, { useContext } from 'react';
import { HandleLoginModalWrapper } from './HandleLoginModal.styles';
import Image from 'next/image';
import InfoIcon from '../../../_assets/info-icon.svg';
import Button from '@/components/atoms/Button';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/router';

const HandleLoginModal = ({ setOpen, text }) => {
  const { setLoginModal, setRegisterModal } = useContext(UserContext);
  const router = useRouter();

  return (
    <HandleLoginModalWrapper>
      <Image src={InfoIcon} alt="Info Icon" className="InfoIcon" />
      <span>{text}</span>
      <div className="btn-holder">
        <Button btntype="light-green" color="success" rounded md width="200" onClick={() => router.push('/wallet')}>
          Topup
        </Button>
        <Button btntype="light-green" color="success" rounded md width="200" onClick={() => setOpen(false)}>
          Close
        </Button>
        {text === 'You are not currently logged in. Please log in to proceed with this action.' && (
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
        )}
      </div>
    </HandleLoginModalWrapper>
  );
};

export default HandleLoginModal;
