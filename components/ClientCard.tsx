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
      <div className="hidden absolute w-full h-[400px] group-hover:block p-16 z-20">
        <div className="flex flex-col h-full justify-center">
          <div className={clientName === 'aurora' ? logoClassAurora : logoClass}>{clientLogo}</div>
          <div>
            {responsibilities.map((item, key) => (
              <div className="flex flex-col mt-3" key={key}>
                <span className="text-white text-xl">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex absolute right-10 bottom-10">
            <a
              href="#"
              className="uppercase font-bold text-2xl
             text-highlight"
            >
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
