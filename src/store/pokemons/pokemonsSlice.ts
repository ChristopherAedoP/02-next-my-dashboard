/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

/*
  {
    favorites: {
      '1': { id: 1, name: 'bulbasaur' },
      '2': { id: 2, name: 'bulbasaur' },
    }
  }
*/

interface PokemonsState {
	favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = () => {
// 	//if (typeof localStorage === 'undefined') return {};
// 	const favorites = JSON.parse ( localStorage.getItem('favorite-pokemons') ?? '{}');
// 	return favorites;
// }

const initialState: PokemonsState = {
	favorites: {},
	//...getInitialState(),
	// '1': { id: '1', name: 'bulbasaur' },
	// '5': { id: '5', name: 'charmeleon' },
	// '6': { id: '6', name: 'charizard' },
};

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		toogleFavorite(state, action: PayloadAction<SimplePokemon>) {
			const pokemon = action.payload;
			const { id } = pokemon;

			//existe
			if (!!state.favorites[id]) {
				delete state.favorites[id];
				return;
			} else {
				state.favorites[id] = pokemon;
			}

			//no se debe hacer en redux, solo ejemplo
			localStorage.setItem('favorite-pokemons', JSON.stringify(state))
		},
	},
});

export const { toogleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
