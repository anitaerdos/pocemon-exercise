import { TypesActions } from './types.actions'
import { ITypesState } from './types.state'

export const typeReducer = (
  state: ITypesState,
  action: TypesActions
): ITypesState => {
  switch (action.type) {
    case 'TYPES_LOAD_SUCCESS':
      return {
        ...state,
        types: action.payload,
      }
    case 'TYPES_SET_LOADING':
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}
