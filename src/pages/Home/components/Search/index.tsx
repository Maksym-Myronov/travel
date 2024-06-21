import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import { fetchCityData } from 'store/searchSlice';
import DatePicker from 'react-datepicker';
import { SearchList } from 'pages/Home/components/Search/components/SearchList';
import { PopUp } from 'pages/Home/components/Search/components/PopUp';
// Images
import peopleIcon from 'assets/img/fontisto_male.svg';
import searchIcon from 'assets/img/akar-icons_search.svg';
import calendarIcon from 'assets/img/akar-icons_calendar.svg';
import arrowDown from 'assets/img/down-arrow.png';
// Styles
import s from './index.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

export const Search: React.FC = () => {
	const [city, setCity] = useState<string>('');
	const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
		null,
		null
	]);
	const [startDate, endDate] = dateRange;
	const [showList, setShowList] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [adultsCount, setAdultsCount] = useState<number>(1);
	const [childrenCount, setChildrenCount] = useState<number>(0);
	const [roomCount, setRoomCount] = useState<number>(1);

	const handleDateChange = (update: [Date | null, Date | null]) => {
		setDateRange(update);
	};

	const handleSelect = (date: Date | null) => {
		if (date) {
			console.log(date);
		}
	};

	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.search.city);

	useEffect(() => {
		if (city) {
			dispatch(fetchCityData(city));
		}
	}, [dispatch, city]);

	const handleCitySelection = (selectedCity: string) => {
		setCity(selectedCity);
		setShowList(false);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCity(e.target.value);
		setShowList(true);
	};

	const handleOpenPopUp = () => {
		setIsOpen((prev) => !prev);
	};

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
						onChange={handleInputChange}
					/>
					{city && showList && (
						<ul className={s.search__list__items}>
							{data.slice(0, 5).map((item) => (
								<SearchList
									key={item.id}
									name={item.name}
									country_code={item.country_code}
									handleCitySelection={handleCitySelection}
								/>
							))}
						</ul>
					)}
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
						<p>
							{roomCount} room, {adultsCount} adults
						</p>
						<button className={s.search__block__btn} onClick={handleOpenPopUp}>
							<img src={arrowDown} alt="open down arrow" />
						</button>
						{isOpen && (
							<PopUp
								setAdultsCount={setAdultsCount}
								setRoomCount={setRoomCount}
								setChildrenCount={setChildrenCount}
								adultsCount={adultsCount}
								childrenCount={childrenCount}
								roomCount={roomCount}
								handleOpenPopUp={handleOpenPopUp}
							/>
						)}
					</div>
				</div>
				<button className={s.search__button}>Search</button>
			</div>
		</div>
	);
};
