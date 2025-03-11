'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IMAGE_PATH } from '../config/apiConfig';

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard({ name, url }: PokemonCardProps) {
  const id = url.split('/').filter(Boolean).pop();
  const imageUrl = `${IMAGE_PATH}/${id}.png`;

  return (
    <Link href={`/pokemon/${name}`}>
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="relative w-32 h-32 mx-auto">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h2 className="mt-2 text-xl font-semibold text-center capitalize">
          {name}
        </h2>
        <p className="text-center text-blue-500 mt-2">Details →</p>
      </div>
    </Link>
  );
}