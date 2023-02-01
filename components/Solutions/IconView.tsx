import React from 'react';

export default function IconView({ icon }: { icon: any }) {
  return (
    <div className="flex flex-1 justify-center items-center h-16 opacity-60 hover:opacity-100 hover:scale-105">
      {icon}
    </div>
  );
}
