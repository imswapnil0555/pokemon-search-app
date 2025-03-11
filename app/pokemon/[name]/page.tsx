'use client';

import { usePokemonDetails } from '@/app/hooks/usePokemon';
import Breadcrumb from '@/app/components/Breadcrumb';
import Image from 'next/image';

interface PokemonDetailsProps {
  params: {
    name: string;
  };
}

export default function PokemonDetails({ params }: PokemonDetailsProps) {
  const { pokemon, isLoading, isError } = usePokemonDetails(params.name);

  if (isLoading) return <div className="container mx-auto px-4 py-8">Loading...</div>;
  if (isError) return <div className="container mx-auto px-4 py-8">Failed to load Pokemon details</div>;
  if (!pokemon) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: pokemon.name, href: `/pokemon/${pokemon.name}` },
        ]}
      />

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full h-64">
            <Image
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold capitalize mb-4">{pokemon.name}</h1>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Types</h2>
                <div className="flex gap-2">
                  {pokemon.types.map((type: any) => (
                    <span
                      key={type.type.name}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Stats</h2>
                <div className="space-y-2">
                  {pokemon.stats.map((stat: any) => (
                    <div key={stat.stat.name} className="flex items-center">
                      <span className="w-32 capitalize">{stat.stat.name}:</span>
                      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600"
                          style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                        />
                      </div>
                      <span className="ml-2 w-12">{stat.base_stat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Abilities</h2>
                <div className="flex flex-wrap gap-2">
                  {pokemon.abilities.map((ability: any) => (
                    <span
                      key={ability.ability.name}
                      className="px-3 py-1 bg-gray-100 rounded-full"
                    >
                      {ability.ability.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Some Moves</h2>
                <div className="flex flex-wrap gap-2">
                  {pokemon.moves.map((move: any) => (
                    <span
                      key={move.move.name}
                      className="px-3 py-1 bg-gray-100 rounded-full"
                    >
                      {move.move.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}