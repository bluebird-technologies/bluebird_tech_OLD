import React, { ReactElement } from 'react';
import Router from 'next/router';

export interface Props {
  clientName: string;
  clientLogo: ReactElement;
  responsibilities: string[];
  backgroundImageSrc: string;
}

function ClientCard({ clientName, clientLogo, responsibilities, backgroundImageSrc }: Props) {
  const logoClass = 'flex justify-start max-h-[80px] max-w-[200px] mb-[30px]';
  const logoClassAurora = 'flex justify-start max-h-[130px] max-w-[130px] mb-[30px]';

  return (
    <div
      onClick={() => {
        Router.push({
          pathname: `/case-studies/${clientName}`,
          query: { clientName },
        });
      }}
      className="group relative flex h-[400px] w-full cursor-pointer flex-col items-center"
    >
      <div className="absolute z-10 hidden h-[400px] w-full bg-black opacity-50 group-hover:block"></div>
      <div className="absolute z-20 hidden h-[400px] w-full p-16 group-hover:block">
        <div className="flex h-full flex-col justify-center">
          <div className={clientName === 'aurora' ? logoClassAurora : logoClass}>{clientLogo}</div>
          <div>
            {responsibilities.map((item, key) => (
              <div className="mt-3 flex flex-col" key={key}>
                <span className="text-xl text-white">{item}</span>
              </div>
            ))}
          </div>
          <div className="absolute right-10 bottom-10 flex">
            <a href="#" className="text-2xl font-bold uppercase text-highlight">
              View Project
            </a>
          </div>
        </div>
      </div>
      <div
        className="z-0 flex w-full flex-1"
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
