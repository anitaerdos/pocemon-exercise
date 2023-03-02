import { fetchTypes } from '@/api/pokemonAPI'
import { Dispatch } from 'react'
import { TypesActions } from '.'

export const useFetchTypes = (dispatch: Dispatch<TypesActions>) => {
  return async () => {
    try {
      dispatch({ type: 'TYPES_SET_LOADING', payload: true })
      const response = await fetchTypes()
      if (!response) throw Error('No payload for fetch types')
      const payload = response
      dispatch({ type: 'TYPES_LOAD_SUCCESS', payload })
      dispatch({ type: 'TYPES_SET_LOADING', payload: false })
    } catch (error) {
      console.error(error)
      dispatch({ type: 'TYPES_SET_LOADING', payload: false })
    }
  }
}
