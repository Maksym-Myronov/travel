import React from 'react';
// Styles
import s from './index.module.scss';

interface CustomWidgetsProps {
	imageUrl: string;
	text: string;
}

export const CustomWidgets: React.FC<CustomWidgetsProps> = ({
	imageUrl,
	text
}) => {
	return (
		<div className={s.shared}>
			<img className={s.shared__image} src={imageUrl} alt="images" />
			<p className={s.shared__text}>{text}</p>
		</div>
	);
};
