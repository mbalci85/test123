import React from 'react';
import Name from './Name';

const Names = ({ names, borderGirl, borderBoy, addToFavoriteNames }) => {
	return (
		<div
			style={{
				margin: 25,
				textAlign: 'center',
				borderRight: borderBoy
					? 'solid 5px lightblue'
					: 'solid 5px lightpink',
				borderBottom: borderBoy
					? 'solid 5px lightblue'
					: 'solid 5px lightpink',
				borderTop: borderGirl
					? 'solid 5px lightpink'
					: 'solid 5px lightblue',
				borderLeft: borderGirl
					? 'solid 5px lightpink'
					: 'solid 5px lightblue',

				padding: 20,
				borderRadius: 8,
			}}
		>
			{names.map((name) => (
				<Name
					key={name.id}
					name={name}
					addToFavoriteNames={addToFavoriteNames}
				/>
			))}
		</div>
	);
};

export default Names;
