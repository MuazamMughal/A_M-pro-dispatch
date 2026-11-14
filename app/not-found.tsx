import Link from 'next/link';
import { ArrowLeft, Truck } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 bg-am-red-light text-am-red rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-200">
          <Truck className="w-8 h-8" />
        </div>
        <span className="text-xs font-black uppercase tracking-wider text-am-red">
          404 • Lane Not Found
        </span>
        <h1 className="mt-2 text-3xl font-black text-am-dark sm:text-4xl">
          Off Route
        </h1>
        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
          The dispatch page you are looking for has been moved or does not exist. Let&apos;s get you back on the right freight lane.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-am-red hover:bg-am-red-hover transition shadow-lg shadow-red-600/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home Base</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
