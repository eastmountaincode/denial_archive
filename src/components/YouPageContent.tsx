export default function YouPageContent() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-white">
      {/* Left aligned text with left padding */}
      <div className="pl-4 md:pl-8 mb-0">
        <h1 className="text-3xl md:text-6xl font-light">
          Look for me
        </h1>
      </div>
      
      {/* Right aligned text with right padding */}
      <div className="pr-4 md:pr-8 text-right">
        <h2 className="text-3xl md:text-6xl font-light">
          I'll be in touch
        </h2>
      </div>
    </div>
  );
} 