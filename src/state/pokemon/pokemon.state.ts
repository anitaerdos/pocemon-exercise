import { IPokemonProps } from "@/api/pokemonAPI";

export interface IPokemonState {
  isLoading: boolean;
  pokemon: IPokemonProps;
}

export const initialPokemonState: IPokemonState = {
  isLoading: false,
  pokemon: {
    id: 0,
    name: "",
    height: 0,
    weight: 0,
    abilities: [],
    sprites: { front_default: "" },
  },
};
