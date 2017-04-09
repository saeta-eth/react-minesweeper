import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Layout extends React.Component {
  render() {
    const {
      children
    } = this.props;
    return (
      <div>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    );
  };
};

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
