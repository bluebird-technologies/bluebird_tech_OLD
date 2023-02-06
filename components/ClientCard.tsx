import React, { ReactElement } from 'react';
import { useRouter } from 'next/navigation';

export interface Props {
  clientName: string;
  clientLogo: ReactElement;
  responsibilities: string[];
  backgroundImageSrc: string;
}

function ClientCard({ clientName, clientLogo, responsibilities, backgroundImageSrc }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/case-studies/details')}
      className="flex group w-full relative flex-1 h-[300px] flex-col items-center cursor-pointer"
    >
      <div className="hidden absolute w-full z-10 h-[280px] left-2 opacity-50 bg-black group-hover:block ">
        <div className="flex flex-col h-[300px]  justify-center px-5 pb-5 ">
          <div>{clientLogo}</div>
          <div>
            {responsibilities.map((item, key) => (
              <div className="flex flex-col mt-3" key={key}>
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex  items-end justify-end">
            <a href="#" className="uppercase font-medium text-lg text-highlight">
              View Project
            </a>
          </div>
        </div>
      </div>
      <div
        className=" px-10 w-full z-0 py-10  flex-1 "
        style={{
          backgroundImage: `url(/${backgroundImageSrc})`,
          backgroundColor: 'black',
          backgroundSize: 'cover',
          marginBottom: 20,
          marginLeft: 20,
        }}
      ></div>
    </div>
  );
}

export default ClientCard;
