import { IPokemonTypeProps } from "@/api/pokemonAPI"

export interface IPokemonsSetSuccessAction {
  type: 'POKEMONS_LOAD_SUCCESS'
  payload: IPokemonTypeProps
}

export interface IPokemonsSetLoadingAction {
  type: 'POKEMONS_SET_LOADING'
  payload: boolean
}

export type PokemonsActions = IPokemonsSetSuccessAction | IPokemonsSetLoadingAction
