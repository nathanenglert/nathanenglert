import React from 'react';

import './style.scss';

const Navbar = ({ className }) => (
	<nav className={`navbar ${className}`}>
		<div className="container">
			<div className="navbar-brand">
				<a className="navbar-item has-text-weight-bold is-size-5" href="/">&lt;NE&gt;</a>
				<span className="navbar-burger burger" data-target="navbarMenuHeroA">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</div>
			<div id="navbarMenuHeroA" className="navbar-menu">
				<div className="navbar-end">
					{/* <a class="navbar-item is-active">Home</a>
					<a class="navbar-item">Examples</a>
					<a class="navbar-item">Documentation</a> */}
				</div>
			</div>
		</div>
	</nav>
);

export default Navbar;
