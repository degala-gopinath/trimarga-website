import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';

const RELOAD_KEY = 'trimarga:chunk-reload';
const RELOAD_WINDOW_MS = 15000;

/**
 * Matches the errors a browser throws when a lazily-loaded route file can no
 * longer be fetched — the signature of a visitor holding an old copy of the
 * site open across a deploy, whose cached HTML points at file names that no
 * longer exist.
 */
export function isStaleChunkError(error) {
  const text = `${error?.name ?? ''} ${error?.message ?? ''}`;
  // The last pattern is what React.lazy throws when a preload failure was
  // swallowed and it received an empty module.
  return /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|Loading chunk [\w-]+ failed|ChunkLoadError|is not a valid JavaScript MIME type|reading 'default'/i.test(
    text
  );
}

/**
 * Reloads the page once to pick up the current deploy. The timestamp guard
 * stops a genuinely broken deploy from reload-looping a visitor forever.
 * Returns true if a reload was started.
 */
export function reloadOnceForNewDeploy() {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
    if (Date.now() - last < RELOAD_WINDOW_MS) return false;
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  } catch {
    // Storage blocked: reload once anyway rather than strand the visitor.
  }
  window.location.reload();
  return true;
}

/**
 * Without this, any render error — or a stale lazy chunk after a deploy —
 * unmounts the whole tree and leaves a blank page. This keeps a way forward on
 * screen instead: reload, home, or WhatsApp.
 *
 * Plain <a> tags are deliberate: the boundary may sit outside the router, and
 * a full page load is also the right recovery.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, reloading: false };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    if (isStaleChunkError(error) && reloadOnceForNewDeploy()) {
      this.setState({ reloading: true });
    }
  }

  render() {
    const { error, reloading } = this.state;
    if (!error) return this.props.children;

    // Mid-reload: show nothing alarming.
    if (reloading) return null;

    const stale = isStaleChunkError(error);

    return (
      <div
        role="alert"
        className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-5 py-20 sm:px-8"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBAF01]">
          {stale ? 'Site updated' : 'Something went wrong'}
        </span>

        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {stale
            ? 'We just updated the site.'
            : 'This page did not load properly.'}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-white/75">
          {stale
            ? 'Please reload to get the latest version.'
            : 'Reloading usually fixes it. If it does not, message us and we will help right away.'}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn-primary bg-[#FBAF01] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0907]"
          >
            Reload page
          </button>

          <a
            href="/"
            className="btn-ghost border border-white/25 px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-white"
          >
            Go to home
          </a>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost border border-white/25 px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-white"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    );
  }
}
