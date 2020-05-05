import React from 'react';

import './style.scss';

const Navbar = ({ className }) => (
  <nav className={`navbar has-background-light ${className}`}>
    <div className="container">
      <div className="navbar-brand">
        <a className="has-text-weight-bold is-size-5" href="/">
          &lt;NE&gt;
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
