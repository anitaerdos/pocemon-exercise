import { fetchPokemon } from '@/api/pokemonAPI'
import { Dispatch } from 'react'
import { PokemonActions } from '.'

export const useFetchPokemon = (dispatch: Dispatch<PokemonActions>) => {
  return async (url: string) => {
    try {
      dispatch({ type: 'POKEMON_SET_LOADING', payload: true })
      const response = await fetchPokemon(url)
      if (!response) throw Error('No payload for fetch pokemon')
      const payload = response
      dispatch({ type: 'POKEMON_LOAD_SUCCESS', payload })
      dispatch({ type: 'POKEMON_SET_LOADING', payload: false })
    } catch (error) {
      console.error(error)
      dispatch({ type: 'POKEMON_SET_LOADING', payload: false })
    }
  }
}
