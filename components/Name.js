import React from 'react';

const Name = ({ name, addToFavoriteNames }) => {
	return (
		<div style={{ display: 'inline-block' }}>
			<button
				style={{
					border: 'none',
					margin: 3,
					padding: 7,
					borderRadius: 10,
					backgroundColor: name.sex === 'f' ? 'lightpink' : 'lightblue',
				}}
				onClick={() => addToFavoriteNames(name.id)}
			>
				{name.name}
			</button>
		</div>
	);
};

export default Name;
