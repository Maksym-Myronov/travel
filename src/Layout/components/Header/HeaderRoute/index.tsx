import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderRouteType } from 'core/types/header-route.type';

export const HeaderRoute: React.FC<HeaderRouteType> = ({ path, name }) => {
	return (
		<Link to={path}>
			<li>{name}</li>
		</Link>
	);
};
