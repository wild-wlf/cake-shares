import TopBar from "@/common/TopBar";
import { Wrapper } from "@/styles/helpers.styles";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <TopBar />
      {children}
    </Wrapper>
  );
};

export default Layout;
