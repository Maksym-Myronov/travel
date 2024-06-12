import React from 'react';
// Images
import phone from 'assets/img/iPhone 13 Mockup.svg';
// Styles
import s from './index.module.scss';

export const MobileApp: React.FC = () => {
	return (
		<div className={s.app}>
			<div className={s.app__container}>
				<div>
					<img src={phone} alt="phone" />
				</div>
				<div className={s.app__container__block}>
					<p className={s.app__container__title}>Your all-in-one travel app.</p>
					<p className={s.app__container__text}>
						Book flights, hotels, trains & rental cars anywhere in the world in
						just
						<br /> seconds. Get real-time flight updates, travel info, exclusive
						deals, and
						<br /> 30% more Trip Coins only on the app!
					</p>
					<div className={s.app__container__info}>
						<div className={s.app__container__info__buttons}>
							<button className={s.app__container__info__btns}>Mobile</button>
							<button className={s.app__container__info__btns}>Email</button>
						</div>
						<p>
							Enter your phone number to receive a text with a link to download
							the app.
						</p>
						<div className={s.app__container__search}>
							<input
								type="text"
								placeholder="Mobile Phone"
								className={s.app__container__search__input}
							/>
							<button className={s.app__container__search__btn}>Search</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
