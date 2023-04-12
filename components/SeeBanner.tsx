import React from 'react';
import RigthArrow from '../public/right-arrow.svg';
import RigthArrowMobile from '../public/right-arrow-mobile.svg';
import Link from 'next/link';

interface SeeBannerProps {
  label: string;
  url: string;
  invert?: boolean;
}

export default function SeeBanner({ label, url, invert }: SeeBannerProps) {
  return (
    <div className="flex flex-row justify-center py-8 lg:py-20">
      <Link href={url}>
        <div className="hidden lg:flex items-center justify-center">
          {invert ? (
            <>
              <div className="mr-5 rotate-180">
                <RigthArrow />
              </div>
              <h1 className="text-white text-3xl lg:text-4xl font-bold uppercase">{label}</h1>
            </>
          ) : (
            <>
              <h1 className="text-white text-3xl lg:text-4xl font-bold uppercase">{label}</h1>
              <div className="ml-5">
                <RigthArrow />
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col lg:flex-row lg:hidden items-center justify-center">
          {invert ? (
            <>
              <div className="lg:max-w-[220px] mb-6 lg:mb-0 px-2 lg:px-0">
                <h1 className="text-white text-xl uppercase">{label}</h1>
              </div>
              <div className="ml-3 h-6 rotate-180">
                <RigthArrowMobile />
              </div>
            </>
          ) : (
            <>
              <div className="lg:max-w-[220px] mb-6 lg:mb-0 px-2 lg:px-0">
                <h1 className="text-white text-xl uppercase">{label}</h1>
              </div>
              <div className="ml-3 h-6">
                <RigthArrowMobile />
              </div>
            </>
          )}
        </div>
      </Link>
    </div>
  );
}
