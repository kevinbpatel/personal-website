import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <span className="text-7xl font-display font-light text-accent/20 mb-4">404</span>
      <h1 className="text-lg font-display font-normal text-text-primary mb-2 tracking-[-0.01em]">
        Page not found
      </h1>
      <p className="text-text-secondary text-sm mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="text-accent hover:text-accent-hover text-sm transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
