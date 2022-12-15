import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import theme from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';
import { Suspense } from 'react';

import 'styles/index.css';
import Container from 'components/Organisms/Container';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback="..Loading">
        <Container>
          <Component {...pageProps} />
        </Container>
      </Suspense>
    </ThemeProvider>
  );
}
