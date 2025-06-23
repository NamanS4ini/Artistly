import Link from "next/link";

export default function Home() {
  const categories = [
    {
      name: "Singers",
      description: "Hire professional singers for weddings, events, and parties.",
      image: "/images/singers.jpg",
      href: "/artists?category=Singer"
    },
    {
      name: "Dancers",
      description: "Book classical and modern dancers for shows and festivals.",
      image: "/images/dancers.jpg",
      href: "/artists?category=Dancer"
    },
    {
      name: "Speakers",
      description: "Engage motivational speakers for corporate and educational events.",
      image: "/images/speakers.jpg",
      href: "/artists?category=Speaker"
    },
    {
      name: "DJs",
      description: "Bring energy to your party with top DJs.",
      image: "/images/djs.jpg",
      href: "/artists?category=DJ"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-blue-100 to-purple-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Connecting Event Planners & Performing Artists</h2>
        <p className="text-lg text-gray-600 mb-6">Discover, connect, and book the perfect artist for your next event.</p>
        <Link href="/artists" className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">Explore Artists</Link>
      </section>

      {/* Category Cards */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Browse by Category</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold text-gray-700">{cat.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}


export const metadata = {
  title: "Artistly | Home",
  description: "Discover and book artists for your events. Browse by category, location, and price."
};