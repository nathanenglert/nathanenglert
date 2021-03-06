import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className="main-container">
    <Helmet />
    {children}
    <Footer />
  </div>
);

export default Layout;
