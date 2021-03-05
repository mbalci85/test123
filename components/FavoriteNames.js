import React from 'react';
import FavoriteName from './FavoriteName';

const FavoriteNames = ({ favoriteNames, removeFromFavoriteNames }) => {
	return (
		<div
			style={{
				textAlign: 'center',
				color: 'lightgray',
				marginTop: 30,
			}}
		>
			<h4>
				<span>Favorite Names: </span>
			</h4>
			{favoriteNames.length === 0 ? (
				<h4>Click Names to Select Your Favorite Names... </h4>
			) : (
				favoriteNames.map((favoriteName) => (
					<FavoriteName
						key={favoriteName.id}
						favoriteName={favoriteName}
						removeFromFavoriteNames={removeFromFavoriteNames}
					/>
				))
			)}
		</div>
	);
};

export default FavoriteNames;
