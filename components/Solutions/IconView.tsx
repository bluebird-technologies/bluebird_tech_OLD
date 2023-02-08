import React from 'react';

export default function IconView({ icon }: { icon: any }) {
  return (
    <div className="cursor-pointer flex flex-1 justify-center items-center h-20 opacity-60 hover:opacity-100 hover:scale-105">
      {icon}
    </div>
  );
}
