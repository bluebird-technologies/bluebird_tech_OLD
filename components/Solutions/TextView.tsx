import React, { ReactNode } from 'react';

export default function IconView({ icon }: { icon: ReactNode }) {
  return (
    <div className="cursor-pointer flex flex-1 justify-center items-center break-words text-primary md:text-white text-center text-xl font-bold md:hover:scale-105 opacity-100 md:opacity-60 hover:opacity-100">
      {icon}
    </div>
  );
}
