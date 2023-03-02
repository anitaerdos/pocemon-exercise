import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

export interface ICatchedState {
    catchedPokemons: Array<string>,
    setCatchedPokemons: Dispatch<SetStateAction<string[]>>
}

export const initialCatchedState: ICatchedState = {
    catchedPokemons: [],
    setCatchedPokemons: ()=> []
};

export interface ICatchedProps {
    children?: JSX.Element;
}

export const CatchedContext = createContext<ICatchedState>(initialCatchedState);

export const CatchedProvider = (props: ICatchedProps) => {
  const [catchedPokemons, setCatchedPokemons] = useState<Array<string>>([])

  return (
    <CatchedContext.Provider value={{catchedPokemons, setCatchedPokemons}}>
      {props.children}
    </CatchedContext.Provider>
  );
};

export const CatchedConsumer = CatchedContext.Consumer;
