import React, { ReactNode } from 'react';

interface IconViewProps {
  icon: ReactNode;
  iconMobile: ReactNode;
}

export default function IconView({ icon, iconMobile }: IconViewProps) {
  return (
    <>
      <div className="hidden lg:cursor-pointer lg:flex flex-1 justify-center items-center h-14 lg:h-20 2xl:h-24 lg:opacity-60 lg:hover:opacity-100 lg:md:hover:scale-105">
        {icon}
      </div>
      <div className="lg:hidden lg:cursor-pointer flex flex-1 justify-center items-center h-14 lg:h-20 2xl:h-24 lg:opacity-60 lg:hover:opacity-100 lg:md:hover:scale-105">
        {iconMobile}
      </div>
    </>
  );
}
