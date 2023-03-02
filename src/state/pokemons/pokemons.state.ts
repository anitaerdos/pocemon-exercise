import { IPokemonTypeProps } from '@/api/pokemonAPI'

export interface IPokemonsState {
  isLoading: boolean
  pokemons: IPokemonTypeProps
}

export const initialPokemonsState: IPokemonsState = {
  isLoading: false,
  pokemons: {
    id: 0,
    name: '',
    pokemon: []},
}
