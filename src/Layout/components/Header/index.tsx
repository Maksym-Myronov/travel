import React from 'react';
import { headerRoutes } from 'core/constans/header-routes';
import { HeaderRoute } from 'Layout/components/Header/HeaderRoute';
// Styles
import s from './index.module.scss';
// Images
import logo from '../../../assets/img/trxvl..svg';

export const Header: React.FC = () => {
	return (
		<div className={s.header}>
			<div className={s.header__container}>
				<img src={logo} alt="logo" className={s.header__logo} />
				<header>
					<nav>
						<ul className={s.header__ul}>
							{headerRoutes.map((route) => (
								<HeaderRoute
									key={route.id}
									path={route.path}
									name={route.name}
								/>
							))}
						</ul>
					</nav>
				</header>
			</div>
		</div>
	);
};
