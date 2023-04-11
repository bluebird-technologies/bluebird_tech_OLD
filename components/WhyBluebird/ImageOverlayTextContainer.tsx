import React from 'react';

export function ImageOverlayTextContainer({ text }: { text: string }) {
  return (
    <div className="xl:hidden xl:group-hover:block w-[300px] h-[300px] text-highlight text-3xl sm:text-4xl xl:text-6xl font-bold uppercase">
      {text}
    </div>
  );
}
