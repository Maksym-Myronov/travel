import React from 'react';
// Images
import { Offers } from 'pages/Home/components/Offers';
import { CustomWidgets } from 'shared/components/CustomWidgets';
import hotel from 'assets/img/image 18hotel.svg';
import apartments from 'assets/img/image 18Apartments.svg';
import resorts from 'assets/img/image 18Resorts.svg';
import vila from 'assets/img/image 18Villas.svg';
import { Tip } from 'pages/Home/components/Tip';
import { TravelersWidgets } from 'pages/Home/components/TravelersWidgets';
import india from 'assets/img/Frame 31india.svg';
import travelTalk from 'assets/img/Frame 31talk.svg';
import beach from 'assets/img/Frame 31beach.svg';
import mountains from 'assets/img/Frame 31mountains.svg';
// Styles
import s from 'pages/Home/index.module.scss';

export const TravelWidgets: React.FC = () => {
	return (
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
	);
};
