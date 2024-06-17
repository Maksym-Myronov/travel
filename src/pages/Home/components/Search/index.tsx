import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import { fetchCityData } from 'store/searchSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// Images
import peopleIcon from 'assets/img/fontisto_male.svg';
import searchIcon from 'assets/img/akar-icons_search.svg';
import calendarIcon from 'assets/img/akar-icons_calendar.svg';
// Styles
import s from './index.module.scss';

export const Search: React.FC = () => {
	const [city, setCity] = useState<string>('');
	const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
		null,
		null
	]);
	const [startDate, endDate] = dateRange;

	const handleDateChange = (update: [Date | null, Date | null]) => {
		setDateRange(update);
	};

	const handleSelect = (date: Date | null) => {
		if (date) {
			console.log(date);
		}
	};
	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.search);
	console.log(data);

	useEffect(() => {
		dispatch(fetchCityData(city));
	}, [dispatch, city]);

	return (
		<div className={s.search}>
			<div className={s.search__container}>
				<div className={s.search__list}>
					<img src={searchIcon} alt="searchIcon" />
					<input
						type="search"
						placeholder="Search destinations, hotels"
						className={s.search__input}
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
				</div>
				<div className={s.search__container__info}>
					<div className={s.search__block}>
						<img src={calendarIcon} alt="calendarIcon" />
						<DatePicker
							selectsRange
							startDate={startDate ?? undefined}
							endDate={endDate ?? undefined}
							onChange={handleDateChange}
							onSelect={handleSelect}
							isClearable
							className={s.search__container__datapicker}
						/>
					</div>
					<div className={s.search__block}>
						<img src={peopleIcon} alt="peopleIcon" />
						<p>1 room, 2 adults</p>
					</div>
				</div>
				<button className={s.search__button}>Search</button>
			</div>
		</div>
	);
};
