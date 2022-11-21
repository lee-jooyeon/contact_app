import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
