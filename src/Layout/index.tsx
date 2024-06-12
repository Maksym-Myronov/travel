import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'Layout/components/Header';
import { Footer } from 'Layout/components/Footer';

export const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
