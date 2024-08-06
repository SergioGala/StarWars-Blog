
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			fetchCharacters: async () => {
				try {
					const res = await fetch('https://www.swapi.tech/api/people');
					const data = await res.json();
					setStore({ characters: data.results });
				} catch (error) {
					console.error('Error fetching characters:', error);
				}
			},
			fetchPlanets: async () => {
				// Similar a fetchCharacters, pero con 'https://www.swapi.tech/api/planets'
				try {
					const res = await fetch('https://www.swapi.tech/planets');
					const data = await res.json();
					setStore({ characters: data.results });
				} catch (error) {
					console.error('Error fetching characters:', error);
				}
			},
			fetchVehicles: async () => {
				// Similar a fetchCharacters, pero con 'https://www.swapi.tech/api/vehicles'
				try {
					const res = await fetch('https://www.swapi.tech/api/vehicles');
					const data = await res.json();
					setStore({ characters: data.results });
				} catch (error) {
					console.error('Error fetching characters:', error);
				}
			},
			addToFavorites: (item) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] });
			},
			removeFromFavorites: (item) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav.uid !== item.uid) });
			}
		}
	};
};

export default getState;