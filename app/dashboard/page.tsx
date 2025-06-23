'use client';
import { artists } from '@/lib/artists';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ManagerDashboard() {
    const router = useRouter();

    // Function to handle viewing artist details
    const handleViewArtist = (artistId: string) => {
        // Redirect to the artist detail page
        router.push(`/user/${artistId}`);
    }
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-50 to-blue-100 p-20 ">

    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-900 drop-shadow">
        Manager Dashboard
      </h1>

      {artists.length === 0 ? (
          <p className="text-center text-gray-500 text-lg py-12">
          No artist submissions found.
        </p>
      ) : (
        <Card className="shadow-xl border-0">
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-200">
                  <th className="p-5 border-b font-semibold text-blue-900">Name</th>
                  <th className="p-5 border-b font-semibold text-blue-900">Category</th>
                  <th className="p-5 border-b font-semibold text-blue-900">City</th>
                  <th className="p-5 border-b font-semibold text-blue-900">Fee</th>
                  <th className="p-5 border-b font-semibold text-blue-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {artists.map((artist, idx) => (
                    <tr
                    key={artist.id}
                    className={`transition-colors ${
                        idx % 2 === 0 ? "bg-white" : "bg-blue-50"
                    } hover:bg-blue-100`}
                    >
                    <td className="p-5 border-b font-medium text-blue-800">{artist.name}</td>
                    <td className="p-5 border-b text-blue-700">{artist.categories.join(', ')}</td>
                    <td className="p-5 border-b text-blue-700">{artist.location}</td>
                    <td className="p-5 border-b text-blue-700">{artist.feeRange}</td>
                    <td className="p-5 border-b">
                      <Button onClick={() => handleViewArtist(artist.id)} variant="outline" className="border border-blue-400 text-blue-700 hover:bg-blue-100">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
      </div>
  );
}
