import React from 'react';
import RigthArrow from '../public/right-arrow.svg';
import RigthArrowMobile from '../public/right-arrow-mobile.svg';

interface SeeBannerProps {
  label: string;
  url: string;
}

export default function SeeBanner({ label, url }: SeeBannerProps) {
  return (
    <div className="flex flex-row justify-center">
      <a href={url}>
        <div className="hidden md:flex items-center justify-center">
          <h1 className="text-white text-3xl lg:text-4xl font-bold uppercase">{label}</h1>
          <div className="ml-5">
            <RigthArrow />
          </div>
        </div>
        <div className="flex md:hidden items-center justify-center">
          <div className="max-w-[220px]">
            <h1 className="text-white text-xl uppercase">{label}</h1>
          </div>
          <div className="ml-3 h-6">
            <RigthArrowMobile />
          </div>
        </div>
      </a>
    </div>
  );
}
