import React from 'react';
// Images
import peopleIcon from 'assets/img/fontisto_male.svg';
import searchIcon from 'assets/img/akar-icons_search.svg';
import calendarIcon from 'assets/img/akar-icons_calendar.svg';
// Styles
import s from './index.module.scss';

export const Search: React.FC = () => {
	return (
		<div className={s.search}>
			<div className={s.search__container}>
				<div className={s.search__list}>
					<img src={searchIcon} alt="searchIcon" />
					<input
						type="search"
						placeholder="Search destinations, hotels"
						className={s.search__input}
					/>
				</div>
				<div className={s.search__container__info}>
					<div className={s.search__block}>
						<img src={calendarIcon} alt="calendarIcon" />
						<p>Check in</p>
					</div>
					<div className={s.search__block}>
						<img src={calendarIcon} alt="calendarIcon" />
						<p>Check out</p>
					</div>
					<div className={s.search__block}>
						<img src={peopleIcon} alt="peopleIcon" />
						<p>1 room, 2 adults</p>
					</div>
					<button className={s.search__button}>Search</button>
				</div>
			</div>
		</div>
	);
};
