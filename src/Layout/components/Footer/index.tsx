import React from 'react';
// Images
import logo from 'assets/img/trxvl..svg';
import facebook from 'assets/img/facebook.svg';
import instagram from 'assets/img/instagram.svg';
import twitter from 'assets/img/twitter.svg';
import youtube from 'assets/img/youtube.svg';
// Styles
import s from './index.module.scss';

export const Footer: React.FC = () => {
	return (
		<div className={s.footer}>
			<div className={s.footer__container}>
				<div className={s.footer__container__images}>
					<img src={logo} alt="logo" />
					<div className={s.footer__container__favicon}>
						<img src={facebook} alt="facebook" />
						<img src={instagram} alt="instagram" />
						<img src={twitter} alt="twitter" />
						<img src={youtube} alt="youtube" />
					</div>
				</div>
				<div className={s.footer__container__links}>
					<div>
						<p className={s.footer__container__links__info}>
							Seslendirme ve Alt Jazz
						</p>
						<p className={s.footer__container__links__info}>Media Market</p>
						<p className={s.footer__container__links__info}>Gillie</p>
						<p className={s.footer__container__links__info}>Size Last</p>
					</div>
					<div>
						<p className={s.footer__container__links__info}>Self Betimes</p>
						<p className={s.footer__container__links__info}>
							Yatırımcı İlişkileri
						</p>
						<p className={s.footer__container__links__info}>Basal Himmler</p>
					</div>
					<div>
						<p className={s.footer__container__links__info}>Yard Market</p>
						<p className={s.footer__container__links__info}>Is İmkanları</p>
						<p className={s.footer__container__links__info}>Car Tercihleri</p>
					</div>
					<div>
						<p className={s.footer__container__links__info}>Hedge Karla</p>
						<p className={s.footer__container__links__info}>
							Mullein Koşulları
						</p>
						<p className={s.footer__container__links__info}>Autumnal Bulgier</p>
					</div>
				</div>
			</div>
		</div>
	);
};
