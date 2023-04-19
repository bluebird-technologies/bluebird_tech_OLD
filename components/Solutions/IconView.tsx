import React, { ReactNode } from 'react';

interface IconViewProps {
  icon: ReactNode;
  iconMobile: ReactNode;
  isMobile?: boolean;
}

export default function IconView({ icon, iconMobile, isMobile }: IconViewProps) {
  if (isMobile) {
    return (
      <>
        <div className="flex flex-1 justify-center items-center h-14">{iconMobile}</div>
      </>
    );
  }
  return (
    <>
      <div className="cursor-pointer hidden lg:flex flex-1 justify-center items-center h-20 2xl:h-24 opacity-100 md:opacity-60 hover:opacity-100 md:hover:scale-105">
        {icon}
      </div>
    </>
  );
}
