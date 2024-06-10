import React from 'react';
import { Search } from 'pages/Home/components/Search';
import { Categories } from 'pages/Home/components/Categories';
import { CustomWidgets } from 'shared/components/CustomWidgets';
import { Offers } from 'pages/Home/components/Offers';
import { Tip } from 'pages/Home/components/Tip';
import { TravelersWidgets } from 'pages/Home/components/TravelersWidgets';
// Images
import bali from 'assets/img/Bali, Indonesia.svg';
import ireland from 'assets/img/image 18Kerry, Ireland.svg';
import paris from 'assets/img/image 18Paris, France.svg';
import sydney from 'assets/img/image 18Sydney, Australia.svg';
import hotel from 'assets/img/image 18hotel.svg';
import vila from 'assets/img/image 18Villas.svg';
import resorts from 'assets/img/image 18Resorts.svg';
import apartments from 'assets/img/image 18Apartments.svg';
import india from 'assets/img/Frame 31india.svg';
import mountains from 'assets/img/Frame 31mountains.svg';
import beach from 'assets/img/Frame 31beach.svg';
import travelTalk from 'assets/img/Frame 31talk.svg';
// Styles
import s from './index.module.scss';

export const Home: React.FC = () => {
	return (
		<div className={s.home}>
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
			<div className={s.home__main}>
				<Offers />
				<p className={s.home__type}>Browse by property type</p>
				<div className={s.home__vacation}>
					<CustomWidgets imageUrl={hotel} text="Hotel" />
					<CustomWidgets imageUrl={apartments} text="Apartments" />
					<CustomWidgets imageUrl={resorts} text="Resorts" />
					<CustomWidgets imageUrl={vila} text="Villas" />
				</div>
				<Tip />
				<div className={s.home__traveler}>
					<TravelersWidgets
						communityName="Travel community"
						travelers="155,073 travelers"
						imageUrl={india}
						place="India"
					/>
					<TravelersWidgets
						communityName="Travel community"
						travelers="155,073 travelers"
						imageUrl={travelTalk}
						place="Travel Talk"
					/>
					<TravelersWidgets
						communityName="Travel community"
						travelers="155,073 travelers"
						imageUrl={beach}
						place="Beach"
					/>
					<TravelersWidgets
						communityName="Travel community"
						travelers="155,073 travelers"
						imageUrl={mountains}
						place="Mountains"
					/>
				</div>
			</div>
		</div>
	);
};
