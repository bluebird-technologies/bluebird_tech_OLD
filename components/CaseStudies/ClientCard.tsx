import React from 'react';
import Router from 'next/router';
import Revio from '../../public/case-studies/logo/revio-logo.svg';
import Raubex from '../../public/case-studies/logo/raubex-logo.svg';
import Aurora from '../../public/case-studies/logo/aurora-logo.svg';

export interface ClientCardProps {
  clientName: string;
  responsibilities: string[];
  backgroundImageSrc: string;
  backgroundImageSrcMobile: string;
}

function ClientCard({ clientName, responsibilities, backgroundImageSrc }: ClientCardProps) {
  return (
    <div
      onClick={() => {
        Router.push({
          pathname: `/case-studies/${clientName}`,
          query: { clientName },
        });
      }}
      className="flex flex-col group w-full relative h-[400px] items-center cursor-pointer"
    >
      <div className="hidden absolute w-full opacity-50 h-[400px] bg-black group-hover:block z-10" />
      <div className="hidden absolute w-full h-[400px] group-hover:block p-16 z-20">
        <div className="flex flex-col h-full justify-center">
          {clientName === 'revio' ? (
            <div className="w-[200px] flex justify-start">
              <Revio />
            </div>
          ) : clientName === 'aurora' ? (
            <div className="w-[120px] flex justify-start">
              <Aurora />
            </div>
          ) : (
            <div className="w-[140px] flex justify-start">
              <Raubex />
            </div>
          )}
          <div>
            {responsibilities.map((item, key) => (
              <div className="flex flex-col mt-3" key={key}>
                <span className="text-white text-xl">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex absolute right-10 bottom-10">
            <a href="#" className="uppercase font-bold text-2xl text-highlight">
              View Project
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex flex-1 w-full z-0"
        style={{
          backgroundImage: `url(/${backgroundImageSrc})`,
          backgroundColor: 'black',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  );
}

export default ClientCard;
