import Image from 'next/image';
import Link from 'next/link';
import FilterBar from '../../components/filter-bar';

type Artist = {
  id: string;
  name: string;
  profileImage: string;
  categories: string[];
  location: string;
  feeRange: string;
  price: number;
};

type Props = {
  searchParams: {
    category?: string;
    location?: string;
    price?: string;
  };
};

export default async function ArtistsPage({ searchParams }: Props) {
    const params = await searchParams
  const category = params.category;
  const location = params.location;
  const price = params.price ? parseInt(params.price) : null;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/artists`, {
    cache: 'no-store'
  });

  const allArtists: Artist[] = await res.json();

  const filteredArtists = allArtists.filter(artist => {
    const matchesCategory = category
      ? artist.categories.map(c => c.toLowerCase()).includes(category.toLowerCase())
      : true;
    const matchesLocation = location
      ? artist.location.toLowerCase() === location.toLowerCase()
      : true;
    const matchesPrice = price ? artist.price <= price : true;
    return matchesCategory && matchesLocation && matchesPrice;
  });



  if ((category || location || price) && filteredArtists.length === 0 && allArtists.length) {
    return (
        <div className="p-6 min-h-screen bg-gradient-to-r pt-20 text-black from-blue-100 to-purple-100">
          <FilterBar
            currentCategory={category || 'All'}
            currentLocation={location || 'All'}
            currentPrice={price || null}
          />
            <h1 className="text-3xl font-bold mb-4 text-center">No Artists Found</h1>
            <p className="text-center text-gray-600">Try adjusting your filters.</p>
        </div>
    )
  }

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r pt-20 text-black from-blue-100 to-purple-100">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {category || location || price ? `Filtered Artists` : 'Explore Artists'}
      </h1>

      <div className="max-w-6xl mx-auto mb-8">
          <FilterBar
            currentCategory={category || 'All'}
            currentLocation={location || 'All'}
            currentPrice={price || null}
          />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArtists.map(artist => (
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
              <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">Ask for Quote</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
