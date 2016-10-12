import React, { PropTypes } from 'react';
import Header from './header';
import Work from './work';
import InTouch from './in-touch';
import Footer from './footer';

class PageContainer extends React.Component {
  componentDidMount() {
    // dispatch to get stuff from server
  }

  render() {
    return (
      <div>
        <Header />
        <Work />
        {/* <InTouch /> */}
        <Footer />
      </div>
    );
  }
}

module.exports = PageContainer;
