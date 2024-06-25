import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { BusinessAuthProvider } from '@/context/BusinessAuthContext';
import { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '@/app/Store/index';
import LightTheme from '@/app/Themes/light';
import DarkTheme from '@/app/Themes/dark';
import { GlobalStyle, Container } from '@/app/Styles/styles';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <Provider store={store}>
      <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <Container>
          <AuthProvider>
            <BusinessAuthProvider>
              <Component {...pageProps} />
            </BusinessAuthProvider>
          </AuthProvider>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
