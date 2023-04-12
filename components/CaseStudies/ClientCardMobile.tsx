import React from 'react';
import Router from 'next/router';
import { ClientCardProps } from './ClientCard';
import RevioX from '../../public/case-studies/logo/revio-logo-2.svg';
import Raubex from '../../public/case-studies/logo/raubex-logo.svg';
import Aurora from '../../public/case-studies/logo/aurora-logo.svg';

export default function ClientCardMobile({
  clientName,
  responsibilities,
  backgroundImageSrcMobile,
}: ClientCardProps) {
  return (
    <div
      className="relative flex flex-col items-center w-[305px] h-[250px]"
      style={{
        backgroundImage: `url(/${backgroundImageSrcMobile})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={() => {
        Router.push({
          pathname: `/case-studies/${clientName}`,
          query: { clientName },
        });
      }}
    >
      <div className="flex flex-col w-full h-full bg-opacity-50 bg-black">
        <div className="flex w-full justify-center mt-4">
          {clientName === 'revio' ? (
            <div className="w-[90px]">
              <RevioX />
            </div>
          ) : clientName === 'aurora' ? (
            <div className="w-[70px]">
              <Aurora />
            </div>
          ) : (
            <div className="w-[70px]">
              <Raubex />
            </div>
          )}
        </div>

        <div className="space-y-2 mt-3">
          {responsibilities.map((item, key) => (
            <div className="flex flex-col justify-center" key={key}>
              <span className="text-white text-sm text-center">{item}</span>
            </div>
          ))}
        </div>

        <div className="absolute flex justify-center bottom-2 w-full items-center">
          <span className="uppercase font-bold text-sm text-highlight text-center">
            View Project
          </span>
        </div>
      </div>
    </div>
  );
}
