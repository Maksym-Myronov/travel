import React from 'react';
import { CustomOfferWidget } from 'shared/components/CustomOffetsWidget';
// Images
import plane from 'assets/img/image 19plane.svg';
import hotels from 'assets/img/Frame 31hotels.svg';
// Styles
import s from './index.module.scss';

export const Offers: React.FC = () => {
	return (
		<div className={s.offers}>
			<p className={s.offers__text}>Offers</p>
			<div className={s.offers__container}>
				<CustomOfferWidget
					sale="Huge savings on flight with trxvl."
					imageUrl={plane}
					bookThing="Book domestic flights starting @ just ₹1459"
					companies="Domestic Flights"
				/>
				<CustomOfferWidget
					companies=" International Hotels"
					sale="Enjoy upto 20% off on International Hotels"
					bookThing="Make the most of  this deal on your first booking"
					imageUrl={hotels}
				/>
			</div>
		</div>
	);
};
