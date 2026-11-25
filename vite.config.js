import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Absolute URL of the live site, needed for social-preview images (WhatsApp,
 * Facebook, LinkedIn and X will not reliably resolve a relative og:image).
 *
 * Resolution order:
 *   1. VITE_SITE_URL   — set this in Vercel to pin the custom domain explicitly
 *   2. VERCEL_PROJECT_PRODUCTION_URL — provided by Vercel at build time; it is
 *      the project's production domain, so it follows a custom domain
 *   3. the current vercel.app address, so a plain local build still works
 */
const siteUrl = (
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://trimarga-website-y2i2.vercel.app')
).replace(/\/+$/, '')

// A token Vite's own %ENV% replacement would never touch.
const injectSiteUrl = () => ({
  name: 'inject-site-url',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
})

export default defineConfig({
  plugins: [react(), injectSiteUrl()],
})
