import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
