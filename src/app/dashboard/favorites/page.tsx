/** @format */

import { PokemonGrid } from '@/pokemons';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Favoritos',
	description: 'lista de pokemons',
};



export default async function PokemosPage() {

	return (
		<div className="flex flex-col">
			<span className="text-5xl my-2">
				Pokémons Favoritos <small className="text-blue-500">Global state</small>
			</span>

			<PokemonGrid pokemons={ [] } />

			{/* {JSON.stringify(pokemons)} */}
		</div>
	);
}
