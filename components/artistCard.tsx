import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
type ArtistProps = {
  artist: {
    id: string;
    name: string;
    profileImage: string;
    categories: string[];
    location: string;
    feeRange: string;
  };
}

const Artist = ({ artist }: ArtistProps) => {
  return (
    <Link key={artist.id} href={`/user/${artist.id}`}>
            <div className="border p-4 rounded shadow text-black bg-gray-50 transition-transform duration-200 hover:scale-105">
              <Image
                src={artist.profileImage}
                alt={artist.name}
                width={300}
                height={200}
                className="w-full h-80 object-fit object-top rounded mb-2"
              />
              <h2 className="text-xl font-semibold text-gray-800">{artist.name}</h2>
              <p className="text-sm text-gray-600 mb-1">{artist.categories.join(', ')}</p>
              <p className="text-sm">📍 {artist.location}</p>
              <p className="text-sm font-medium">💰 {artist.feeRange}</p>
              <button className="mt-2 cursor-pointer px-4 py-1 bg-blue-600 text-white rounded">Ask for Quote</button>
            </div>
          </Link>
  )
}

export default Artist