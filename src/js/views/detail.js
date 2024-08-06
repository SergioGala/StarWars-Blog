import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Detail = () => {
	const [item, setItem] = useState(null);
	const { type, id } = useParams();
	
	useEffect(() => {
		const fetchDetail = async () => {
			const res = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
			const data = await res.json();
			setItem(data.result);
		};
		fetchDetail();
	}, [type, id]);
	
	if (!item) return <div>Loading...</div>;
	
	return (
		<div className="container">
			<h2>{item.properties.name}</h2>
			<img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} alt={item.properties.name} />
			{/* Mostrar más detalles según el tipo */}
		</div>
	);
};