import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderRouteType } from 'core/types/header-route.type';
// Styles
import s from '../index.module.scss';

export const HeaderRoute: React.FC<HeaderRouteType> = ({ path, name }) => {
	return (
		<Link to={path}>
			<li className={s.header__li}>{name}</li>
		</Link>
	);
};
