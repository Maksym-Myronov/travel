import React from 'react';
import { Search } from 'pages/Home/components/Search';
import { Categories } from 'pages/Home/components/Categories';
// Styles
import s from './index.module.scss';

export const Home: React.FC = () => {
	return (
		<div className={s.home}>
			<div className={s.home__container}>
				<h1 className={s.home__title}>
					The whole world
					<br /> awaits.
				</h1>
				<Search />
				<Categories />
			</div>
		</div>
	);
};
