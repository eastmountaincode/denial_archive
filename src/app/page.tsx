import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold mb-8">Denial Archive</h1>
        
        <p className="text-xl mb-12 text-gray-700">
          A digital space for exploration and reflection
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/you"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Enter /you
          </Link>
        </div>
      </div>
    </div>
  );
}
