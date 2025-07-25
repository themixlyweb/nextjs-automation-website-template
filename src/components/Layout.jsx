import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout Component
 * Wraps page content with a consistent header and footer layout.
 *
 * @param {React.ReactNode} children - The main page content.
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
