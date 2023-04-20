import React, { ReactNode } from 'react';

export default function IconView({ icon }: { icon: ReactNode }) {
  return (
    <div
      className="cursor-pointer flex flex-1 justify-center items-center break-words text-primary md:text-white px-0 md:px-3 lg:px-0 text-center text-xl 2xl:text-2xl font-bold md:hover:scale-105 opacity-100 md:opacity-60 hover:opacity-100"
      style={{
        wordSpacing: '1000px',
      }}
    >
      {icon}
    </div>
  );
}
