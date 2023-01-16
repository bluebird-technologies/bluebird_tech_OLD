import React from 'react';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import UnderlineSvg from '../public/why/underline.svg';
import MissionSvg from '../public/why/mission.svg';
import VisionSvg from '../public/why/vision.svg';
import Image from 'next/image';

const Why = () => {
  return (
    <div className=" flex-1 flex flex-col bg-seashell h-full">
      <div
        style={{
          width: '100%',
          height: '430px',
          position: 'relative',
          backgroundImage: `url(/contact/darkBackground.svg)`,
          backgroundRepeat: 'no-repeat',
        }}
        className=" flex-1 pb-24 items-center "
      >
        <Header />
        <Container wide center row>
          <div className="  w-full items-center  justify-center">
            <div className="flex flex-row ">
              <h1 className="font-bold text-white text-5xl">WHY</h1>
              <h2 className="font-bold text-white text-5xl ml-2 italic">BLUEBIRD ?</h2>
            </div>
            <div className=" w-2/5 flex  items-left justify-end">
              <UnderlineSvg />
            </div>
          </div>
        </Container>
        <Container wide center row>
          <div className="mt-3 flex flex-row items-center justify-between flex-1">
            <div className="">
              <div className="flex flex-row items-center">
                <Image src="/./why/laptop.png" alt="laptop" width={500} height={500} />
                <div>
                  <div className="relative flex flex-row items-center ">
                    <div className="absolute -left-5 bottom-6">
                      <VisionSvg />
                    </div>
                  </div>
                  <div className="relative">
                    <div className=" absolute -left-20 ">
                      <MissionSvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-2/5">
              <h1 className="text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </h1>
            </div>
          </div>
        </Container>
      </div>
      <Container wide center row>
        <div className="flex  flex-row w-full items-center justify-between">
          <div className="flex flex-1 items-center justify-center">
            <h1 className="text-center font-bold italic text-3xl text-secondary">
              WHAT SETS US APART
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Why;
