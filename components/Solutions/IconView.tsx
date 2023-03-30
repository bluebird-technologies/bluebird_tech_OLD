import React, { ReactNode } from 'react';

export default function IconView({ icon }: { icon: ReactNode }) {
  return (
    <div className="cursor-pointer flex flex-1 justify-center items-center h-20 opacity-100 md:opacity-60 hover:opacity-100 md:hover:scale-105">
      {icon}
    </div>
  );
}
