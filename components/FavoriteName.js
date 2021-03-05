import React from 'react';

const FavoriteName = ({ favoriteName, removeFromFavoriteNames }) => {
	return (
		<div style={{ display: 'inline-block' }}>
			<button
				style={{
					border: 'none',
					margin: 3,
					padding: 7,
					borderRadius: 10,
					backgroundColor:
						favoriteName.sex === 'f' ? 'lightpink' : 'lightblue',
				}}
				onClick={() => removeFromFavoriteNames(favoriteName.id)}
			>
				{favoriteName.name}
			</button>
		</div>
	);
};

export default FavoriteName;
