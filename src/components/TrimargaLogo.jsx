import React from 'react';

export default function TrimargaLogo() {
  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 select-none">
      <img
        src="/image/trimarga-symbol.webp"
        alt=""
        aria-hidden="true"
        className="h-10 w-10 sm:h-12 sm:w-12 object-contain shrink-0"
      />
      <img
        src="/image/trimarga-wordmark-alpha.webp"
        width="960"
        height="193"
        alt="Trimarga — Business Growth Partners"
        className="w-36 sm:w-44 lg:w-52 h-auto object-contain"
      />
    </div>
  );
}
