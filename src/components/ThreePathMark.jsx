import React from 'react';

/**
 * Three paths converging into one closed form.
 *
 * Trimarga means "three paths", and the three routes to growth (Get Found,
 * Look Trusted, Get More Customers) are the brand's whole proposition. This
 * draws that literally: three arcs, each in its own path hue, meeting at three
 * vertices to close a single shape.
 *
 * It complements the logo rather than reproducing it — the logo only exists
 * here as a raster .webp. Given the vector, these arcs can be replaced with
 * the real mark's outline and everything else keeps working.
 *
 * `pathLength="1"` normalises every arc to a length of 1 regardless of its
 * real geometry, so one dash offset value drives all three.
 */

const ARCS = [
  // Each arc runs vertex → vertex, bowed outward from the centre.
  { d: 'M100,42 Q142.4,75.5 150.2,129', hue: 'var(--path-1)' },
  { d: 'M150.2,129 Q100,149 49.8,129', hue: 'var(--path-2)' },
  { d: 'M49.8,129 Q57.6,75.5 100,42', hue: 'var(--path-3)' }
];

// Straight approach lines that travel in from off-canvas toward each vertex.
const APPROACHES = [
  { d: 'M100,-60 L100,42', hue: 'var(--path-1)' },
  { d: 'M250,205 L150.2,129', hue: 'var(--path-2)' },
  { d: 'M-50,205 L49.8,129', hue: 'var(--path-3)' }
];

export default function ThreePathMark({
  size = 200,
  className = '',
  showApproach = false,
  idle = false,
  strokeWidth = 3
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      className={`three-path-mark ${idle ? 'is-idle' : ''} ${className}`}
      overflow="visible"
    >
      <defs>
        <filter id="tpm-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {showApproach && (
        <g filter="url(#tpm-glow)" opacity="0.75">
          {APPROACHES.map((line, index) => (
            <path
              key={`approach-${index}`}
              className="tpm-approach"
              d={line.d}
              pathLength="1"
              stroke={line.hue}
              strokeWidth={strokeWidth * 0.5}
              strokeLinecap="round"
              style={{ '--i': index }}
            />
          ))}
        </g>
      )}

      <g filter="url(#tpm-glow)">
        {ARCS.map((arc, index) => (
          <path
            key={`arc-${index}`}
            className="tpm-arc"
            d={arc.d}
            pathLength="1"
            stroke={arc.hue}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ '--i': index }}
          />
        ))}
      </g>
    </svg>
  );
}
