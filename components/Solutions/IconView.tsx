import React, { ReactNode } from 'react';

interface IconViewProps {
  icon: ReactNode;
  iconMobile: ReactNode;
}

export default function IconView({ icon, iconMobile }: IconViewProps) {
  return (
    <>
      <div className="hidden md:cursor-pointer md:flex flex-1 justify-center items-center h-14 md:h-20 2xl:h-24 md:opacity-60 md:hover:opacity-100 md:md:hover:scale-105 px-6 lg:px-0">
        {icon}
      </div>
      <div className="md:hidden md:cursor-pointer flex flex-1 justify-center items-center h-14 md:h-20 2xl:h-24 md:opacity-60 md:hover:opacity-100 md:md:hover:scale-105">
        {iconMobile}
      </div>
    </>
  );
}
