import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        404
      </p>
      <h1 className="mt-4 font-display text-[56px] leading-none text-ink">
        Not found
      </h1>
      <p className="mt-4 text-[16px] text-muted-body">
        That page doesn&apos;t exist.
      </p>
      <Link
        href="/about"
        className="mt-8 inline-flex h-12 items-center rounded-full border-2 border-stroke px-6 font-mono text-[14px] text-stroke transition-colors hover:bg-ink hover:text-paper"
      >
        ← Back to work
      </Link>
    </main>
  );
}
