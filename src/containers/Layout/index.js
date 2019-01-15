import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Layout;
