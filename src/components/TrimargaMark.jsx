import React, { useId } from 'react';
import { MARK_BLADES, MARK_VIEWBOX } from '../data/markBlades';

/**
 * The real Trimarga mark, as vectors, drawn blade by blade.
 *
 * The paths are traced from the brand symbol (see data/markBlades.js), so the
 * intro now assembles the actual logo instead of a stand-in shape.
 *
 * Two variants share the geometry:
 *  - "intro"   solid gold-to-ember blades that fly in from four directions,
 *              lock into the pinwheel, and catch a single sheen.
 *  - "ambient" the same blades as faint filled outlines for the hero
 *              background, which assemble once the intro hands over and then
 *              drift gently on their own phases.
 *
 * All motion is CSS (see section 13b in index.css). With animation disabled
 * the blades simply render in their assembled position, so nothing depends
 * on JavaScript or on an animation actually running.
 */
export default function TrimargaMark({
  size = 200,
  variant = 'intro',
  className = ''
}) {
  const uid = useId().replace(/:/g, '');
  const clipId = `tm-clip-${uid}`;
  const sheenId = `tm-sheen-${uid}`;

  return (
    <svg
      viewBox={MARK_VIEWBOX}
      width={size}
      height={size * (1070 / 1160)}
      aria-hidden="true"
      focusable="false"
      className={`trimarga-mark tm--${variant} ${className}`}
    >
      <defs>
        <clipPath id={clipId}>
          {MARK_BLADES.map((blade) => (
            <path key={blade.name} d={blade.d} />
          ))}
        </clipPath>

        <linearGradient id={sheenId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {MARK_BLADES.map((blade, index) => (
        <path
          key={blade.name}
          className="tm-blade"
          d={blade.d}
          fill={blade.hue}
          stroke={blade.hue}
          style={{
            '--i': index,
            '--dx': blade.dx,
            '--dy': blade.dy,
            '--rot': blade.rot
          }}
        />
      ))}

      {variant === 'intro' && (
        <g clipPath={`url(#${clipId})`}>
          <rect
            className="tm-sheen"
            x="-360"
            y="0"
            width="320"
            height="1200"
            fill={`url(#${sheenId})`}
          />
        </g>
      )}
    </svg>
  );
}
