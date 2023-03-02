import { initialPokemonsState, IPokemonsState, pokemonsReducer } from "@/state/pokemons";
import { useFetchPokemons } from "@/state/pokemons/pokemons.creators";
import { createContext, useEffect, useReducer } from "react";

export const PokemonsContext =
  createContext<IPokemonsState>(initialPokemonsState)

  export interface IPokemonsProps {
    type?: string,
    children?: JSX.Element
  }

  export const PokemonsProvider = (props: IPokemonsProps) => {
    const {type} = props
    const [data, dispatch] = useReducer(pokemonsReducer, initialPokemonsState)
    const fetchPokemons = useFetchPokemons(dispatch)
    useEffect(() => {
        fetchPokemons(type)
    }, [type])
  
    return (
      <PokemonsContext.Provider value={data}>
        {props.children}
      </PokemonsContext.Provider>
    )
  }
  
  export const PokemonsConsumer = PokemonsContext.Consumer