import React, { ReactNode } from 'react';

export default function IconWithTextView({
  icon,
  iconText,
}: {
  icon: ReactNode;
  iconText: string;
}) {
  return (
    <div className="cursor-pointer flex flex-col text-center justify-center items-center h-44 opacity-100 md:opacity-60 hover:opacity-100 md:hover:scale-105">
      <div className="h-16 flex-1 py-4">{icon}</div>
      <div className="text-white mt-3 text-xl">{iconText}</div>
    </div>
  );
}
