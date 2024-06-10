import React from 'react';
// Styles
import s from './index.module.scss';

interface CustomOfferWidgetProps {
	imageUrl: string;
	companies: string;
	sale: string;
	bookThing: string;
}

export const CustomOfferWidget: React.FC<CustomOfferWidgetProps> = ({
	imageUrl,
	companies,
	sale,
	bookThing
}) => {
	return (
		<div className={s.offer}>
			<div className={s.offer__container}>
				<img className={s.offer__image} src={imageUrl} alt="images" />
			</div>
			<div className={s.offer__text}>
				<p className={s.offer__companies}>{companies}</p>
				<p className={s.offer__sale}>{sale}</p>
				<p className={s.offer__booking}>{bookThing}</p>
				<button className={s.offer__button}>Book Now</button>
			</div>
		</div>
	);
};
