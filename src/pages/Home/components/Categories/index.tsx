import React from 'react';
// Images
import mountains from 'assets/img/image 3.svg';
import beaches from 'assets/img/image 4.svg';
import camping from 'assets/img/image 5.svg';
import tropical from 'assets/img/image 8.svg';
import countryside from 'assets/img/image 10.svg';
import castles from 'assets/img/image 12.svg';
import iconicCities from 'assets/img/image 13.svg';
import skiing from 'assets/img/image 15.svg';
import deserts from 'assets/img/image 16.svg';
import houseboats from 'assets/img/image 17.svg';
// Styles
import s from './index.module.scss';

export const Categories: React.FC = () => {
	return (
		<div className={s.categories}>
			<p className={s.categories__title}>Top categories</p>
			<div className={s.categories__container}>
				<div className={s.categories__block}>
					<img src={beaches} alt="Beaches" className={s.categories__image} />
					<p className={s.categories__text}>Beaches</p>
				</div>
				<div className={s.categories__block}>
					<img src={deserts} alt="Deserts" className={s.categories__image} />
					<p className={s.categories__text}>Deserts</p>
				</div>
				<div className={s.categories__block}>
					<img
						src={mountains}
						alt="Mountains"
						className={s.categories__image}
					/>
					<p className={s.categories__text}>Mountains</p>
				</div>
				<div className={s.categories__block}>
					<img
						src={iconicCities}
						alt="Iconic Cities"
						className={s.categories__image}
					/>
					<p className={s.categories__text}>Iconic Cities</p>
				</div>
				<div className={s.categories__block}>
					<img
						src={houseboats}
						alt="Houseboats"
						className={s.categories__image}
					/>
					<p className={s.categories__text}>Houseboats</p>
				</div>
				<div className={s.categories__block}>
					<img
						src={countryside}
						alt="Countryside"
						className={s.categories__image}
					/>
					<p className={s.categories__text}>Countryside</p>
				</div>
				<div className={s.categories__block}>
					<img src={camping} alt="Camping" className={s.categories__image} />
					<p className={s.categories__text}>Camping</p>
				</div>
				<div className={s.categories__block}>
					<img src={castles} alt="Castles" className={s.categories__image} />
					<p className={s.categories__text}>Castles</p>
				</div>
				<div className={s.categories__block}>
					<img src={skiing} alt="Skiing" className={s.categories__image} />
					<p className={s.categories__text}>Skiing</p>
				</div>
				<div className={s.categories__block}>
					<img src={tropical} alt="Tropical" className={s.categories__image} />
					<p className={s.categories__text}>Tropical</p>
				</div>
			</div>
		</div>
	);
};
