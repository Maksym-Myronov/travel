import React from 'react';
// Styles
import s from 'pages/Home/components/Search/index.module.scss';

interface PopUpProps {
	setAdultsCount: React.Dispatch<React.SetStateAction<number>>;
	setChildrenCount: React.Dispatch<React.SetStateAction<number>>;
	setRoomCount: React.Dispatch<React.SetStateAction<number>>;
	adultsCount: number;
	childrenCount: number;
	roomCount: number;
	handleOpenPopUp: () => void;
}

export const PopUp: React.FC<PopUpProps> = ({
	setAdultsCount,
	adultsCount,
	setChildrenCount,
	childrenCount,
	setRoomCount,
	roomCount,
	handleOpenPopUp
}) => {
	const handleIncrementAdults = () => {
		setAdultsCount((prev) => prev + 1);
	};

	const handleDecrementAdults = () => {
		if (adultsCount > 1) {
			setAdultsCount((prev) => prev - 1);
		}
	};

	const handleIncrementChildren = () => {
		setChildrenCount((prev) => prev + 1);
	};

	const handleDecrementChildren = () => {
		if (childrenCount > 0) {
			setChildrenCount((prev) => prev - 1);
		}
	};

	const handleIncrementRoom = () => {
		setRoomCount((prev) => prev + 1);
	};

	const handleDecrementRoom = () => {
		if (roomCount > 1) {
			setRoomCount((prev) => prev - 1);
		}
	};

	return (
		<div className={s.search__window}>
			<div className={s.search__window__block}>
				<p>Adults</p>
				<div className={s.search__window__counter}>
					<button
						className={s.search__window__btn}
						onClick={handleDecrementAdults}
					>
						-
					</button>
					<p className={s.search__window__value}>{adultsCount}</p>
					<button
						className={s.search__window__btn}
						onClick={handleIncrementAdults}
					>
						+
					</button>
				</div>
			</div>
			<div className={s.search__window__block}>
				<p>Children</p>
				<div className={s.search__window__counter}>
					<button
						className={s.search__window__btn}
						onClick={handleDecrementChildren}
					>
						-
					</button>
					<p className={s.search__window__value}>{childrenCount}</p>
					<button
						className={s.search__window__btn}
						onClick={handleIncrementChildren}
					>
						+
					</button>
				</div>
			</div>
			<div className={s.search__window__block}>
				<p>Rooms</p>
				<div className={s.search__window__counter}>
					<button
						className={s.search__window__btn}
						onClick={handleDecrementRoom}
					>
						-
					</button>
					<p className={s.search__window__value}>{roomCount}</p>
					<button
						className={s.search__window__btn}
						onClick={handleIncrementRoom}
					>
						+
					</button>
				</div>
			</div>
			<button className={s.search__window__done} onClick={handleOpenPopUp}>
				Done
			</button>
		</div>
	);
};
