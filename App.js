import React, { useState } from 'react';
import FavoriteNames from './components/FavoriteNames';
import NameFilter from './components/NameFilter';
import Names from './components/Names';
import allNames from './Names';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/About';

const App = () => {
	const [names, setNames] = useState(allNames);
	const [favoriteNames, setFavoriteNames] = useState([]);
	const [borderBoy, setBorderBoy] = useState(false);
	const [borderGirl, setBorderGirl] = useState(false);

	const filterGirls = () => {
		setNames(allNames.filter((name) => name.sex === 'f'));
		setBorderGirl(true);
		setBorderBoy(false);
		setFavoriteNames([]);
	};

	const filterBoys = () => {
		setNames(allNames.filter((name) => name.sex === 'm'));
		setBorderGirl(false);
		setBorderBoy(true);
		setFavoriteNames([]);
	};

	const filterAll = () => {
		setNames(allNames);
		setBorderGirl(false);
		setBorderBoy(false);
	};

	const filterName = (e) => {
		setNames(
			allNames.filter((name) =>
				name.name.toLowerCase().includes(e.target.value.toLowerCase()),
			),
		);
	};

	const addToFavoriteNames = (id) => {
		setNames(names.filter((name) => name.id !== id));
		setFavoriteNames(
			[...favoriteNames].concat(allNames.filter((name) => name.id === id)),
		);
	};

	const removeFromFavoriteNames = (id) => {
		setFavoriteNames(
			favoriteNames.filter((favoriteName) => favoriteName.id !== id),
		);
		setNames(
			[...names].concat(
				allNames.filter((name) => name.id === id && !names.includes(name)),
			),
		);
	};

	return (
		<Router>
			<Route
				path="/"
				exact
				render={() => (
					<React.Fragment>
						<div>
							<h1
								style={{
									textAlign: 'center',
									fontSize: 56,
									marginTop: 15,
									fontWeight: 'bolder',
								}}
							>
								<span
									style={{
										color: borderBoy
											? 'lightblue'
											: borderGirl
											? 'lightpink'
											: 'lightgray',
									}}
								>
									BABY
								</span>{' '}
								<span
									style={{
										color: borderGirl ? 'lightpink' : 'lightblue',
									}}
								>
									NAME
								</span>{' '}
								<span
									style={{
										color: borderBoy ? 'lightblue' : 'lightpink',
									}}
								>
									PICKER
								</span>
							</h1>
							<NameFilter
								filterGirls={filterGirls}
								filterBoys={filterBoys}
								filterAll={filterAll}
								filterName={filterName}
							/>
							<FavoriteNames
								favoriteNames={favoriteNames}
								removeFromFavoriteNames={removeFromFavoriteNames}
							/>
							<Names
								names={names}
								borderBoy={borderBoy}
								borderGirl={borderGirl}
								addToFavoriteNames={addToFavoriteNames}
							/>
						</div>
					</React.Fragment>
				)}
			/>
			<Route path="/about" component={About} />

			<h4 style={{ textAlign: 'center' }}>
				{' '}
				<Link to="/" style={{ textDecoration: 'none' }}>
					Home |{' '}
				</Link>
				<Link to="/about" style={{ textDecoration: 'none' }}>
					About
				</Link>
			</h4>
		</Router>
	);
};

export default App;
