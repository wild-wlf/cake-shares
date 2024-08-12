import React, { useState, useEffect } from 'react';
import TopBar from '@/common/TopBar';
import { Wrapper } from '@/styles/helpers.styles';
import CenterModal from './Modal/CenterModal';
import VerficationModal from './VerficationModal';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import BlockModal from './BlockModal';

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

const Layout = ({ children }) => {
  const { user, isLoggedIn } = useContextHook(AuthContext, v => ({
    user: v.user,
    isLoggedIn: v.isLoggedIn,
  }));
  const [modal, setModal] = useState(false);
  const [blockModal, setblockModal] = useState(false);

  useEffect(() => {
    if (user && !isEmptyObject(user) && !user.isVerified) {
      setModal(true);
    } else if (user && !isEmptyObject(user) && user.isVerified) {
      setModal(false);
    }

    if (user && !isEmptyObject(user) && user.status === 'Suspended') {
      setblockModal(true);
    } else if (user && !isEmptyObject(user) && !user.status === 'Suspended') {
      setblockModal(false);
    }
  }, [user]);
  return (
    <>
      {modal && (
        <CenterModal open={modal} iscloseAble={false} title="Account Verification" width="689">
          <VerficationModal setOpen={setModal} />
        </CenterModal>
      )}

      {blockModal && (
        <CenterModal open={blockModal} iscloseAble={false} title="Account Suspended" width="689">
          <BlockModal setOpen={setblockModal} />
        </CenterModal>
      )}

      <Wrapper>
        <TopBar />
        {children}
      </Wrapper>
    </>
  );
};

export default Layout;
