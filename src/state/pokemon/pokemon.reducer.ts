import { PokemonActions } from './pokemon.actions'
import { IPokemonState } from './pokemon.state'

export const pokemonReducer = (
  state: IPokemonState,
  action: PokemonActions
): IPokemonState => {
  switch (action.type) {
    case 'POKEMON_LOAD_SUCCESS':
      return {
        ...state,
        pokemon: action.payload,
      }
    case 'POKEMON_SET_LOADING':
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}
