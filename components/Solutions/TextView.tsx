import React, { ReactNode } from 'react';

export default function IconView({ icon }: { icon: ReactNode }) {
  return (
    <div className="cursor-pointer flex flex-1 justify-center items-center break-words text-white text-center text-xl font-bold hover:scale-105 opacity-60 hover:opacity-100">
      {icon}
    </div>
  );
}
