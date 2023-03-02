import { IPokemonProps } from "@/api/pokemonAPI"

export interface IPokemonSetSuccessAction {
  type: 'POKEMON_LOAD_SUCCESS'
  payload: IPokemonProps
}

export interface IPokemonSetLoadingAction {
  type: 'POKEMON_SET_LOADING'
  payload: boolean
}

export type PokemonActions = IPokemonSetSuccessAction | IPokemonSetLoadingAction
