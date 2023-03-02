import { fetchPokemons } from '@/api/pokemonAPI'
import { Dispatch } from 'react'
import { PokemonsActions } from '.'

export const useFetchPokemons = (dispatch: Dispatch<PokemonsActions>) => {
  return async (type?: string) => {
    try {
      dispatch({ type: 'POKEMONS_SET_LOADING', payload: true })
      const response = await fetchPokemons(type)
      if (!response) throw Error('No payload for fetch pokemons')
      const payload = response
      dispatch({ type: 'POKEMONS_LOAD_SUCCESS', payload })
      dispatch({ type: 'POKEMONS_SET_LOADING', payload: false })
    } catch (error) {
      console.error(error)
      dispatch({ type: 'POKEMONS_SET_LOADING', payload: false })
    }
  }
}
