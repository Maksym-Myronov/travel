import { Route as RouteEnum } from 'routes/route.enum';
import { HeaderRouteType } from 'core/types/header-route.type';

export const headerRoutes: HeaderRouteType[] = [
	{ id: 1, name: 'Home', path: RouteEnum.Home },
	{ id: 2, name: 'Stays', path: RouteEnum.Stays },
	{
		id: 3,
		name: 'Flights',
		path: RouteEnum.Flights
	},
	{ id: 4, name: 'Packages', path: RouteEnum.Packages },
	{ id: 5, name: 'Sign Up', path: RouteEnum.SignUp }
];
