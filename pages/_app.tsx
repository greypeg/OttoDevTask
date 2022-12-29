import { ApolloProvider } from "@apollo/client";
import client from "./api/apollo-client.js";
import React from 'react';
import App from 'next/app';
import { styletron } from './styletron';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import '../styles/globals.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </BaseProvider>
      </StyletronProvider>
    );
  }
}