import Link from "next/link";

export default function YouPageContent() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-white">
      {/* Left aligned text with left padding */}
      <div className="pl-4 md:pl-8 mb-0">
        <h1 className="text-3xl md:text-6xl font-light">
          <Link href="https://www.youtube.com/watch?v=dKuKXATyT9g" className="underline decoration-1 underline-offset-4 hover:decoration-4 transition-all">
            Look
          </Link> for me
        </h1>
      </div>
      
      {/* Right aligned text with right padding */}
      <div className="pr-4 md:pr-8 text-right">
        <h2 className="text-3xl md:text-6xl font-light">
          I'll be in <Link href="https://www.lailasmith.com/" className="underline decoration-1 underline-offset-4 hover:decoration-4 transition-all">
            touch
          </Link>
        </h2>
      </div>
    </div>
  );
} 