import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Card } from '../component/Card';

export const Favorites = () => {
	const { store } = useContext(Context);
	
	return (
		<div className="container">
			<h2>Favorites</h2>
			<div className="d-flex flex-wrap">
				{store.favorites.map((fav) => (
					<Card key={fav.uid} item={fav} type={fav.type} />
				))}
			</div>
		</div>
	);
};