'use client';

import { useState } from 'react';
import { usePokemonList } from './hooks/usePokemon';
import SearchForm from './components/SearchForm';
import PokemonCard from './components/PokemonCard';
import type { Pokemon } from './hooks/usePokemon';

export default function Home() {
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { pokemon, isLoading, isError } = usePokemonList(selectedType);

  const filteredPokemon = pokemon.filter((p: Pokemon) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isError) return <div>Failed to load Pokemon</div>;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Pokemon Search</h1>
      
      <SearchForm
        onSearch={setSearchTerm}
        onTypeChange={setSelectedType}
      />

      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPokemon.map((pokemon: Pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      )}
    </main>
  );
}