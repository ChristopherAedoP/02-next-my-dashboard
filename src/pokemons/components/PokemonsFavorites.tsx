/** @format */
'use client';
import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid';
//import { useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export const PokemonsFavorites = () => {
	const pokemonsFavorites = useAppSelector((state) =>
		Object.values(state.pokemons.favorites)
	);

	//const [pokemons] = useState(pokemonsFavorites);

	return (
		<>
			{pokemonsFavorites.length === 0 ? (
				<NoFavorite />
			) : (
				<PokemonGrid pokemons={pokemonsFavorites} />
			)}
		</>
	);
};

export const NoFavorite = () => {
	return (
		<div className="flex flex-col h-[50vh] items-center justify-center">
			<IoHeartOutline size={100} className="text-red-500" />
			<span>No hay favoritos</span>
		</div>
	);
};
