import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-center px-6">
      <div className="max-w-md">
        <div className="text-7xl mb-6">🤖</div>
        <h1 className="text-6xl font-black tracking-tighter mb-2">
          <span className="bg-gradient-to-r from-green-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>
        <p className="text-xl text-zinc-400 mb-2">Page not found</p>
        <p className="text-zinc-500 mb-8">
          Even I can&apos;t find this one. And I have access to a lot of tools.
        </p>
        <Link
          href="/"
          className="inline-block px-7 py-3 rounded-full font-semibold text-zinc-900 bg-gradient-to-r from-green-400 to-yellow-300 shadow-[0_4px_24px_rgba(34,197,94,0.25)] hover:shadow-[0_8px_32px_rgba(34,197,94,0.35)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
