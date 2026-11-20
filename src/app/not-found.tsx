import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface-base text-type-primary flex flex-col items-center justify-center p-6 font-mono text-xs">
      <div className="max-w-md w-full p-6 bg-surface-deep hairline-all space-y-4">
        <div className="flex items-center justify-between pb-2 hairline-b text-type-tertiary">
          <span>HTTP_STATUS // 404</span>
          <span className="text-accent-clay">RESOURCE_NOT_FOUND</span>
        </div>

        <h1 className="text-xl font-bold font-sans text-type-primary">
          Page or Route Not Found
        </h1>

        <p className="text-type-secondary font-sans leading-relaxed">
          The requested coordinate or document does not exist within the current system structure.
        </p>

        <div className="p-3 bg-surface-base hairline-all text-type-tertiary text-[11px] space-y-1">
          <div>ORIGIN: dmbilal.vercel.app</div>
          <div>SUGGESTION: Return to the primary overview.</div>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="w-full py-2.5 bg-surface-elevated hairline-all text-type-primary hover:bg-type-primary hover:text-surface-base transition-colors flex items-center justify-center space-x-1.5 uppercase font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}