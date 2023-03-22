import React from 'react';
import CircleArrow from '../../components/CaseStudies/icons/circle-arrow';
import Image from 'next/image';

export function CircleImageSection() {
  return (
    <div className="w-[700px] relative">
      {CircleArrow}
      <div className="absolute">
        <span className="absolute -top-[220px] left-[230px] font-bold text-2xl text-center">
          1-4 WEEKS
        </span>
        <div className="absolute -left-[155px] bottom-[180px] ">
          <div className="w-[250px] flex flex-row justify-between items-center">
            <span className=" text-white font-bold text-2xl">DEVELOPMENT</span>
            <Image
              src={'/revio-arrow.svg'}
              height={20}
              width={20}
              alt="arrow"
              className="rotate-90"
            />
          </div>
        </div>
        <div className="absolute left-[465px] bottom-[100px]">
          <div className="w-[150px] flex flex-row justify-between items-center">
            <Image
              src={'/revio-arrow.svg'}
              height={20}
              width={20}
              alt="arrow"
              className="-rotate-90"
            />
            <span className=" text-white font-bold text-2xl ">DESIGN</span>
          </div>
        </div>
        <div className="absolute  left-[30px] -bottom-[85px]">
          <div className="w-[150px]  h-[180px] flex  flex-1 flex-col justify-end items-center">
            <Image src={'/revio-arrow.svg'} height={20} width={20} alt="arrow" className="" />
            <span className="absolute text-white font-bold text-2xl">ANALYSIS</span>
          </div>
        </div>
        <div className="absolute  left-[420px] -bottom-[85px]">
          <div className="w-[150px]  h-[180px] flex  flex-1 flex-col justify-end items-center">
            <Image src={'/revio-arrow.svg'} height={20} width={20} alt="arrow" className="" />
            <span className="absolute text-white font-bold text-2xl">DELIVERY</span>
          </div>
        </div>
        {/* <span className="absolute text-white font-bold text-2xl left-[400px] -bottom-[70px]">
          DELIVERY
        </span> */}
      </div>
    </div>
  );
}
