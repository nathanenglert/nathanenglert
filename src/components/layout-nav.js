import React from 'react';

import './style.scss';
import Header from './header';

const LayoutNav = ({ children }) => (
	<Layout>
		<Header />
		{ children }
	</Layout>
);

export default LayoutNav;
