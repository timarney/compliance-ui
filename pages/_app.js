import React from "react";
import App, { Container } from "next/app";
import ThemeProvider from "../store/index";
import store from "store";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const theme = store.get("theme");
    return { pageProps, theme };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={this.props.theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
