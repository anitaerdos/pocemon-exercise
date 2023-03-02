import { PokemonsActions } from './pokemons.actions'
import { IPokemonsState } from './pokemons.state'

export const pokemonsReducer = (
  state: IPokemonsState,
  action: PokemonsActions
): IPokemonsState => {
  switch (action.type) {
    case 'POKEMONS_LOAD_SUCCESS':
      return {
        ...state,
        pokemons: action.payload,
      }
    case 'POKEMONS_SET_LOADING':
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}
