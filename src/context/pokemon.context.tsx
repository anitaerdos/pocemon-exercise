import { initialPokemonState, IPokemonState, pokemonReducer } from "@/state/pokemon";
import { useFetchPokemon } from "@/state/pokemon/pokemon.creators";
import { createContext, useEffect, useReducer } from "react";

export const PokemonContext =
  createContext<IPokemonState>(initialPokemonState)

  export interface IPokemonProps {
    url: string, 
    children?: JSX.Element
  }

  export const PokemonProvider = (props: IPokemonProps) => {
    const {url} = props
    const [data, dispatch] = useReducer(pokemonReducer, initialPokemonState)
    const fetchPokemon = useFetchPokemon(dispatch)
    useEffect(() => {
        fetchPokemon(url)
    }, [url])
  
    return (
      <PokemonContext.Provider value={data}>
        {props.children}
      </PokemonContext.Provider>
    )
  }
  
  export const PokemonConsumer = PokemonContext.Consumer