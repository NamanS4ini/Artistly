import { notFound } from 'next/navigation';
import { artists } from '@/lib/artists';
import Image from 'next/image';

type Props = {
  params: {
    id: string;
  };
};

export default function ArtistDetailPage({ params }: Props) {
    // Find the artist by ID from the params
  const artist = artists.find((a) => a.id === params.id);

  if (!artist) return notFound();

  return (
    <div className='min-h-screen w-full p-20 bg-gradient-to-r from-blue-50 to-blue-100'>

    <div className="max-w-3xl p-20 mx-auto bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-xl rounded-2xl mt-12">
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 mb-6">
          <Image
            src={artist.profileImage}
            alt={artist.name}
            fill
            className="object-cover rounded-full border-4 border-blue-300 shadow-lg"
            sizes="192px"
          />
        </div>
        <h1 className="text-4xl font-extrabold mb-2 text-blue-900 text-center drop-shadow">
          {artist.name}
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">{artist.bio}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-blue-900">
        <div className="bg-white bg-opacity-80 rounded-lg p-4 shadow flex flex-col gap-2">
          <span className="font-semibold">Categories:</span>
          <span className="text-blue-700">{artist.categories.join(', ')}</span>
        </div>
        <div className="bg-white bg-opacity-80 rounded-lg p-4 shadow flex flex-col gap-2">
          <span className="font-semibold">Languages:</span>
          <span className="text-blue-700">{artist.languages.join(', ')}</span>
        </div>
        <div className="bg-white bg-opacity-80 rounded-lg p-4 shadow flex flex-col gap-2">
          <span className="font-semibold">Fee Range:</span>
          <span className="text-blue-700">{artist.feeRange}</span>
        </div>
        <div className="bg-white bg-opacity-80 rounded-lg p-4 shadow flex flex-col gap-2">
          <span className="font-semibold">Location:</span>
          <span className="text-blue-700">{artist.location}</span>
        </div>
        <div className="bg-white bg-opacity-80 rounded-lg p-4 shadow flex flex-col gap-2 md:col-span-2">
          <span className="font-semibold">Price:</span>
          <span className="text-2xl font-bold text-green-600">₹{artist.price}</span>
        </div>
      </div>
    </div>
            </div>
  );
}



export async function generateMetadata({ params }: Props) {
  const artist = artists.find((a) => a.id === params.id);
  if (!artist) return {};
  return {
    title: artist.name,
    description: artist.bio,
  };
}