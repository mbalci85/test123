import React from 'react';

const NameFilter = ({ filterGirls, filterBoys, filterAll, filterName }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<input
				style={{ width: 400, height: 40, marginRight: 15 }}
				placeholder="Type to filter names..."
				onChange={filterName}
			/>
			<button
				style={{
					border: 'none',
					margin: 3,
					padding: 7,
					borderRadius: 10,
					backgroundColor: 'lightgray',
				}}
				onClick={filterAll}
			>
				All
			</button>
			<button
				style={{
					border: 'none',
					margin: 3,
					padding: 7,
					borderRadius: 10,
					backgroundColor: 'lightblue',
				}}
				onClick={filterBoys}
			>
				Boys
			</button>
			<button
				style={{
					border: 'none',
					margin: 3,
					padding: 7,
					borderRadius: 10,
					backgroundColor: 'lightpink',
				}}
				onClick={filterGirls}
			>
				Girls
			</button>
		</div>
	);
};

export default NameFilter;
