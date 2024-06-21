import React, { useEffect, useState } from 'react';
import { headerRoutes } from 'core/constans/header-routes';
import { HeaderRoute } from 'Layout/components/Header/HeaderRoute';
// Images
import logo from '../../../assets/img/trxvl..svg';
// Styles
import s from './index.module.scss';

export const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isWideScreen, setIsWideScreen] = useState<boolean>(
		window.innerWidth > 1550
	);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleResize = () => {
		setIsWideScreen(window.innerWidth > 1550);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(false);
	}, [isWideScreen]);

	return (
		<div className={`${s.header} ${isOpen ? s.header__open : ''}`}>
			<button
				aria-label="Toggle menu"
				className={s.header__burger}
				onClick={toggleMenu}
			>
				<div className={s.header__div} />
				<div className={s.header__div} />
				<div className={s.header__div} />
			</button>
			<div
				className={`${s.header__container} ${isOpen ? s.header__container : s.header__close}`}
			>
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
