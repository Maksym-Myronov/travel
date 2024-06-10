import React from 'react';
// Images
import background from 'assets/img/image 20backgroundImage.svg';
// Styles
import s from './index.module.scss';

export const Tip: React.FC = () => {
	return (
		<div className={s.tip}>
			<img src={background} alt="images" className={s.tip__images} />
			<div className={s.tip__container}>
				<h3 className={s.tip__title}>
					Plan your trip with travel
					<br /> expert
				</h3>
				<p className={s.tip__text}>
					Our professional advisors can craft your perfect itinerary
				</p>
			</div>
		</div>
	);
};
