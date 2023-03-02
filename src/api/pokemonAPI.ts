// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type INamedAPIResourceListProps = {
  count: number;
  next: string;
  previous: string;
  results: INamedAPIResourceProps[];
};

export type IPokemonTypeProps = {
  id: number;
  name: string;
  pokemon: [];
};

export type ITypePokemonProps = {
  slot: number;
  pokemon: INamedAPIResourceProps;
};

export type INamedAPIResourceProps = {
  name: string;
  url: string;
};

export type IPokemonProps = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Array<IPokemonAbilityProps>;
  sprites: IPokemonSpritesProps;
};

export type IPokemonAbilityProps = {
  is_hidden: boolean;
  ability: INamedAPIResourceProps;
};

export type IPokemonSpritesProps = {
  front_default: string;
};

export const fetchTypes = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/type/");
  if (response.ok) {
    const JSONData = await response.json();
    return JSONData;
  } else return;
};

export const fetchPokemons = async (type?: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  if (response.ok) {
    const JSONData = await response.json();
    return JSONData;
  } else return;
};

export const fetchPokemon = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) {
    const JSONData = await response.json();
    return JSONData;
  }
};
