'use client';

import useSWR from 'swr';
import { BASEURL } from '../config/apiConfig';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export interface PokemonType {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  url: string;
}

export function usePokemonTypes() {
  const { data, error } = useSWR(`${BASEURL}/api/v2/type`, fetcher);
  
  return {
    types: data?.results || [],
    isLoading: !error && !data,
    isError: error
  };
}

export function usePokemonList(type?: string) {
  const url = type 
    ? `${BASEURL}/api/v2/type/${type}`
    : `${BASEURL}/api/v2/pokemon?limit=151`;
    
  const { data, error } = useSWR(url, fetcher);
  
  const pokemon = type 
    ? data?.pokemon?.map((p: { pokemon: Pokemon }) => p.pokemon) || []
    : data?.results || [];
    
  return {
    pokemon,
    isLoading: !error && !data,
    isError: error
  };
}

export function usePokemonDetails(name: string) {
  const { data, error } = useSWR(
    name ? `${BASEURL}/api/v2/pokemon/${name}` : null,
    fetcher
  );
  
  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error
  };
}