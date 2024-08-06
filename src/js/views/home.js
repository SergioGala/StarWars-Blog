import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Card } from '../component/Card';

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
		actions.fetchCharacters();
		actions.fetchPlanets();
		actions.fetchVehicles();
	}, []);
	
	return (
		<div className="container">
			<h2>Characters</h2>
			<div className="d-flex overflow-auto">
				{store.characters.map((char) => (
					<Card key={char.uid} item={char} type="characters" />
				))}
			</div>
			{/* Repite para planets y vehicles */}
			<h2>Planets</h2>
			<div className="d-flex overflow-auto">
				{store.characters.map((char) => (
					<Card key={char.uid} item={char} type="planets" />
				))}
			</div>
			<h2>Vehicles</h2>
			<div className="d-flex overflow-auto">
				{store.characters.map((char) => (
					<Card key={char.uid} item={char} type="vehicles" />
				))}
			</div>
		</div>
	);
};