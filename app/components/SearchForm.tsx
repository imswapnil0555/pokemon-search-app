'use client';

import { useState } from 'react';
import { usePokemonTypes } from '../hooks/usePokemon';
import type { PokemonType } from '../hooks/usePokemon';

interface SearchFormProps {
  onSearch: (search: string) => void;
  onTypeChange: (type: string) => void;
}

export default function SearchForm({ onSearch, onTypeChange }: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { types, isLoading } = usePokemonTypes();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0 md:flex md:gap-4 mb-8">
      <select
        className="w-full md:w-48 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onTypeChange(e.target.value)}
        defaultValue=""
      >
        <option value="">All Types</option>
        {!isLoading && types.map((type: PokemonType) => (
          <option key={type.name} value={type.name}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </option>
        ))}
      </select>
      
      <div className="flex-1 flex gap-2">
        <input
          type="text"
          placeholder="Search Pokemon..."
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}