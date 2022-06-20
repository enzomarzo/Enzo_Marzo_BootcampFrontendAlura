/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme';
import CMSGraphQLClient from '../src/components/service/CMS/CMSGraphQLClient';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ApolloProvider client={CMSGraphQLClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
