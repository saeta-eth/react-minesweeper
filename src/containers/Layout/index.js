import React from 'react';
import Header from '../../components/Header';

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
      </div>
    );
  };
};

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
