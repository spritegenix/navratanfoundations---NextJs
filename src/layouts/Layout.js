import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { activeNavMenu, animation, aTagClick, dataPoggress } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

const Layout = ({
  children,
  transparentTop,
  transparentHeader,
  topSecondaryBg,
  footerSolidBg,
}) => {
  const router = useRouter();
  useEffect(() => {
    activeNavMenu(router.pathname);
    animation();
    aTagClick();
    dataPoggress();
  });
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
        <title>Funden - Crowdfunding & Charity React Template</title>
        <link
          rel="shortcut icon"
          href="assets/img/favicon.ico"
          type="img/png"
        />
      </Head>
      <Header
        transparentTop={transparentTop}
        transparentHeader={transparentHeader}
        topSecondaryBg={topSecondaryBg}
      />
      <MobileHeader
        transparentTop={transparentTop}
        transparentHeader={transparentHeader}
        topSecondaryBg={topSecondaryBg}
      />
      {children}
      <Footer footerSolidBg={footerSolidBg} />
    </Fragment>
  );
};

export default Layout;
