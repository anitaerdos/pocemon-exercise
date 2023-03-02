import { INamedAPIResourceListProps } from "@/api/pokemonAPI"

export interface ITypesSetSuccessAction {
  type: 'TYPES_LOAD_SUCCESS'
  payload: INamedAPIResourceListProps
}

export interface ITypesSetLoadingAction {
  type: 'TYPES_SET_LOADING'
  payload: boolean
}

export type TypesActions = ITypesSetSuccessAction | ITypesSetLoadingAction
