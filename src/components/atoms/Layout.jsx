import TopBar from "@/common/TopBar";
import { Wrapper } from "@/styles/helpers.styles";
import React from "react";
import CenterModal from "./Modal/CenterModal";
import VerficationModal from "./VerficationModal";

const Layout = ({ children }) => {
  return (
    <>
      <CenterModal
        open={false}
        iscloseAble={false}
        title="Account Verification"
        width="689"
      >
        <VerficationModal />
      </CenterModal>
      <Wrapper>
        <TopBar />
        {children}
      </Wrapper>
    </>
  );
};

export default Layout;
