import { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '@/app/Store/index';
import LightTheme from '@/app/Themes/light';
import DarkTheme from '@/app/Themes/dark';
import { GlobalStyle } from '@/app/Styles/styles';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <Provider store={store}>
      <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
