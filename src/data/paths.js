/**
 * Trimarga means "three paths". Every service belongs to one of the three
 * routes to growth, and that membership drives its colour everywhere it
 * appears — so the palette carries meaning instead of decoration.
 */

export const PATHS = {
  found: {
    key: 'found',
    num: '01',
    label: 'Get Found',
    promise: 'Be the business they find first — on Google, on maps, and inside the answers AI assistants give.',
    hue: 'var(--path-1)',
    rgb: 'var(--path-1-rgb)'
  },
  trusted: {
    key: 'trusted',
    num: '02',
    label: 'Look Trusted',
    promise: 'Look like the obvious choice in the few seconds someone spends deciding.',
    hue: 'var(--path-2)',
    rgb: 'var(--path-2-rgb)'
  },
  customers: {
    key: 'customers',
    num: '03',
    label: 'Get More Customers',
    promise: 'Turn that attention into calls, messages, bookings and orders.',
    hue: 'var(--path-3)',
    rgb: 'var(--path-3-rgb)'
  }
};

export const PATH_ORDER = ['found', 'trusted', 'customers'];

const CATEGORY_TO_PATH = {
  'Local Visibility': 'found',
  'Search & AI': 'found',
  Websites: 'trusted',
  'Brand & Social': 'trusted',
  'Paid Growth': 'customers',
  'Complete Setup': 'customers'
};

export function pathForCategory(category) {
  return PATHS[CATEGORY_TO_PATH[category] ?? 'trusted'];
}

/**
 * Buckets a service list into the three paths, in order. Returns
 * `{ path, services }` and skips any path that ended up empty.
 */
export function groupByPath(services) {
  return PATH_ORDER.map((key) => ({
    path: PATHS[key],
    services: services.filter(
      (service) => pathForCategory(service.category).key === key
    )
  })).filter((group) => group.services.length > 0);
}

/**
 * Inline style for a card, exposing its path hue to the CSS that paints the
 * spotlight and the drawing edge.
 */
export function pathStyle(category) {
  const path = pathForCategory(category);
  return {
    '--card-hue': path.hue,
    '--card-rgb': path.rgb
  };
}
