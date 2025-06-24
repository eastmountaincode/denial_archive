import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Link 
        href="/you"
        className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-300 transition-colors"
      >
        Enter you
      </Link>
    </div>
  );
}
