import { INamedAPIResourceListProps } from '@/api/pokemonAPI'

export interface ITypesState {
  isLoading: boolean
  types: INamedAPIResourceListProps
}

export const initialTypesState: ITypesState = {
  isLoading: false,
  types: {
    count: 0,
    next: '',
    previous: '',
    results: []
  },
}
