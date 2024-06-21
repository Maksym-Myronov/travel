import React from 'react';
// Styles
import s from '../../index.module.scss';

type SearchListProps = {
	name: string;
	country_code: string;
	handleCitySelection: (name: string) => void;
};

export const SearchList: React.FC<SearchListProps> = ({
	name,
	handleCitySelection,
	country_code
}) => {
	return (
		<li className={s.search__list__item}>
			<button
				className={s.search__list__button}
				onClick={() => handleCitySelection(name)}
			>
				{name} {country_code}
			</button>
		</li>
	);
};
