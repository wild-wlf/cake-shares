import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { createGlobalStyle } from 'styled-components';
import Variables from '../styles/variables.css';
import { HelperClasses, Styling } from '../styles/GlobalStyles.styles';
import { Wrapper } from '@/styles/helpers.styles';
import { KycContextProvider } from '@/context/KycContext';
import TopBar from '../common/TopBar';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserContextProvider } from '@/context/UserContext';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from '@/context/authContext';
import Layout from '@/components/atoms/Layout';
import { SocketContextProvider } from '@/context/socketContext';
import { useRouter } from 'next/router';
import Loader from '@/components/atoms/Loader';
import { SearchContextProvider } from '@/context/SearchContext';

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
  const router = useRouter();
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const GlobalStyles = createGlobalStyle`
  ${Variables}
  ${Styling}
  ${HelperClasses}
`;
  useEffect(() => {
    setLoad(true);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeError', () => setLoading(false));
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeComplete', () => setLoading(false));

    return () => {
      router.events.off('routeChangeError', () => setLoading(false));
      router.events.off('routeChangeStart', () => setLoading(true));
      router.events.off('routeChangeComplete', () => setLoading(false));
    };
  }, [router.events]);

  return (
    <>
      {load && (
        <>
          <GoogleOAuthProvider clientId="579761904467-epdd1g7sv3kl067qgc031n433j91baqv.apps.googleusercontent.com">
            <AuthContextProvider>
              <SocketContextProvider>
                <UserContextProvider>
                  <KycContextProvider>
                    <SearchContextProvider>
                      <GlobalStyles />
                      {loading && <Loader />}
                      <Layout>
                        <Component {...pageProps} />
                      </Layout>
                    </SearchContextProvider>
                  </KycContextProvider>
                </UserContextProvider>
              </SocketContextProvider>
            </AuthContextProvider>
            <StyledToastContainer />
          </GoogleOAuthProvider>
        </>
      )}
    </>
  );
}
