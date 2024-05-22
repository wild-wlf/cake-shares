import "slick-carousel/slick/slick.css";
import "react-toastify/dist/ReactToastify.min.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { createGlobalStyle } from "styled-components";
import Variables from "../styles/variables.css";
import { HelperClasses, Styling } from "../styles/GlobalStyles.styles";
import { Wrapper } from "@/styles/helpers.styles";
import { KycContextProvider } from "@/components/Context/KycContext";
import TopBar from "../common/TopBar";
import { UserContextProvider } from "@/components/Context/UserContext";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer)`
  z-index: 99999;

  .Toastify__toast {
    padding: 0;
    min-height: 0;
    border-radius: 8px;
    font-family: inherit;
  }
  .Toastify__toast--default {
    background: none;
  }
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__close-button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
`;

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
      <StyledToastContainer />
    </>
  );
}
