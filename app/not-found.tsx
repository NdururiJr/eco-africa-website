import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-brand-green mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            href="/#contact"
            className="bg-white border border-border hover:border-brand-green text-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
