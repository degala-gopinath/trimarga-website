import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  // A single-page app has to answer every URL with the app shell, so unknown
  // addresses come back as HTTP 200. Tell search engines not to index them.
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div className="bg-[#0A0907] text-white py-28">
      <div className="mx-auto max-w-xl px-5 text-center space-y-6">
        <span className="inline-block bg-[#FBAF01] px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-[#0A0907]">
          404 — Page Not Found
        </span>
        <h1 className="font-serif text-4xl font-bold text-white">
          We could not find that page.
        </h1>
        <p className="text-base text-white/75">
          Return to the Trimarga home page or get in touch with our team directly.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="btn-primary inline-block w-full sm:w-auto bg-[#FBAF01] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0907]"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="btn-ghost inline-block w-full sm:w-auto border border-white/25 px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-white"
          >
            Contact Trimarga
          </Link>
        </div>
      </div>
    </div>
  );
}
