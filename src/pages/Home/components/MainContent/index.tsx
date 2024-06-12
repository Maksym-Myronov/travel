import React from 'react';
// Images
import { Search } from 'pages/Home/components/Search';
import { Categories } from 'pages/Home/components/Categories';
import { CustomWidgets } from 'shared/components/CustomWidgets';
import bali from 'assets/img/Bali, Indonesia.svg';
import ireland from 'assets/img/image 18Kerry, Ireland.svg';
import paris from 'assets/img/image 18Paris, France.svg';
import sydney from 'assets/img/image 18Sydney, Australia.svg';
// Styles
import s from 'pages/Home/index.module.scss';

export const MainContent: React.FC = () => {
	return (
		<div className={s.home__block}>
			<div className={s.home__container}>
				<h1 className={s.home__title}>
					The whole world
					<br /> awaits.
				</h1>
				<Search />
				<Categories />
				<p className={s.home__vacation__text}>Top Vacation Destinations</p>
				<div className={s.home__vacation}>
					<CustomWidgets imageUrl={bali} text="Bali, Indonesia" />
					<CustomWidgets imageUrl={ireland} text="Kerry, Ireland" />
					<CustomWidgets imageUrl={paris} text="Paris, France" />
					<CustomWidgets imageUrl={sydney} text="Sydney, Australia" />
				</div>
			</div>
		</div>
	);
};
