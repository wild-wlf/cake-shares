import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createGlobalStyle } from "styled-components";
import Variables from "../styles/variables.css";
import { HelperClasses, Styling } from "../styles/GlobalStyles.styles";
import { Wrapper } from "@/styles/helpers.styles";
import { KycContextProvider } from "@/components/Context/KycContext";
import CenterModal from "@/components/atoms/Modal/CenterModal";
import KycBuyerLevelOne from "@/components/atoms/KYC/KYCBuyer";
import { useState } from "react";
import TopBar from "../common/TopBar";
import { UserContextProvider } from "@/components/Context/UserContext";

export default function App({ Component, pageProps }) {
  const GlobalStyles = createGlobalStyle`
  ${Variables}
  ${Styling}
  ${HelperClasses}
`;

  return (
    <>
      <UserContextProvider>
        <KycContextProvider>
          <GlobalStyles />
          <Wrapper>
            <TopBar />
            <Component {...pageProps} />
          </Wrapper>
        </KycContextProvider>
      </UserContextProvider>
    </>
  );
}
