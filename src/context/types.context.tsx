import { initialTypesState, ITypesState, typeReducer } from "@/state/types";
import { useFetchTypes } from "@/state/types/types.creators";
import { createContext, useEffect, useReducer } from "react";

export const TypesContext =
  createContext<ITypesState>(initialTypesState)

  export interface ITypesProps {
    children?: JSX.Element
  }

  export const TypesProvider = (props: ITypesProps) => {
    const [data, dispatch] = useReducer(typeReducer, initialTypesState)
    const fetchTypes = useFetchTypes(dispatch)
    useEffect(() => {
        fetchTypes()
    }, [])
  
    return (
      <TypesContext.Provider value={data}>
        {props.children}
      </TypesContext.Provider>
    )
  }
  
  export const TypesConsumer = TypesContext.Consumer