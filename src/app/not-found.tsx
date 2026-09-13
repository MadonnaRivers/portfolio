import Link from "next/link";

export default function NotFound() {
  return (
    <main className="blueprint grid min-h-dvh place-items-center px-6">
      <div className="text-center">
        <p className="tag text-accent">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          That page isn&apos;t here.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[0.9375rem] leading-relaxed text-muted">
          The link may be out of date. Everything lives on one page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-[color:var(--bg)] transition-opacity hover:opacity-88"
        >
          Back to start
        </Link>
      </div>
    </main>
  );
}
