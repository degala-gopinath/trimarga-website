import React, { useMemo } from 'react';

/**
 * Splits a headline into words so each can animate independently.
 *
 * `variant="blur"` resolves each word out of focus rather than fading it in,
 * and releases them in a shuffled order — the effect reads as the sentence
 * coming into focus instead of sliding into place.
 *
 * Words wrapped in *asterisks* render in the accent colour.
 *
 *   <SplitHeading text="We help local businesses *get found*." variant="blur" />
 */

// Deterministic shuffle, so the order is stable across re-renders but still
// looks unordered. Seeded by word count alone — no layout thrash.
function shuffledDelays(count, step, start) {
  const order = Array.from({ length: count }, (_, i) => i);
  let seed = count * 9301 + 49297;
  for (let i = order.length - 1; i > 0; i -= 1) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const delays = new Array(count);
  order.forEach((wordIndex, position) => {
    delays[wordIndex] = start + position * step;
  });
  return delays;
}

export default function SplitHeading({
  text,
  as: Tag = 'h1',
  className = '',
  variant = 'blur',
  step = 60,
  start = 120,
  gate = false
}) {
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  const delays = useMemo(
    () =>
      variant === 'blur'
        ? shuffledDelays(words.length, step, start)
        : words.map((_, index) => start + index * step),
    [words, variant, step, start]
  );

  const wrapperClass = [
    variant === 'blur' ? 'blur-words' : 'words',
    gate ? 'intro-gate-words' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={className}>
      <span className={wrapperClass}>
        {words.map((word, index) => {
          const accent = word.startsWith('*') || word.endsWith('*');
          const clean = word.replace(/\*/g, '');

          return (
            <React.Fragment key={`${clean}-${index}`}>
              <span className="w">
                <span
                  className={[
                    accent ? 'text-[#FBAF01]' : '',
                    gate ? 'intro-gate' : ''
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ '--d': delays[index], '--i': index }}
                >
                  {clean}
                </span>
              </span>
              {index < words.length - 1 ? ' ' : null}
            </React.Fragment>
          );
        })}
      </span>
    </Tag>
  );
}
