import React from 'react';
import { TravelWidgets } from 'pages/Home/components/TravelWidgets';
import { MobileApp } from 'pages/Home/components/MobileApp';
import { MainContent } from 'pages/Home/components/MainContent';
// Styles
import s from './index.module.scss';

export const Home: React.FC = () => {
	return (
		<div className={s.home}>
			<MainContent />
			<TravelWidgets />
			<MobileApp />
		</div>
	);
};
