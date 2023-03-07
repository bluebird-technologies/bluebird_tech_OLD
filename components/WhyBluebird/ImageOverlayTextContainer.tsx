import React from 'react';

export function ImageOverlayTextContainer({ text }: { text: string }) {
  return (
    <div className="hidden group-hover:block w-[300px] h-[300px] text-highlight text-6xl font-bold uppercase">
      {text}
    </div>
  );
}
