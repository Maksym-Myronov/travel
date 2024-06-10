import React from 'react';
// Styles
import s from './index.module.scss';

interface TravelersWidgetProps {
	imageUrl: string;
	place: string;
	communityName: string;
	travelers: string;
}

export const TravelersWidgets: React.FC<TravelersWidgetProps> = ({
	imageUrl,
	place,
	communityName,
	travelers
}) => {
	return (
		<div className={s.travelers}>
			<img src={imageUrl} alt="place" />
			<p className={s.travelers__place}>{place}</p>
			<p className={s.travelers__community}>{communityName}</p>
			<p className={s.travelers__info}>{travelers}</p>
		</div>
	);
};
