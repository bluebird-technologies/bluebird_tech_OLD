import React, { useState } from 'react';
import { Header } from '../components/Header';
import underline from '../components/WhyBluebird/icons/underline';
import orangeCircleSelected from '../components/WhyBluebird/icons/orange-circle-selected';
import blueCircle from '../components/WhyBluebird/icons/blue-circle';
import { Button } from '../components/Button';
import waveLines from '../components/WhyBluebird/icons/wave-lines';
import Lottie from 'lottie-react';
import coderAnimation from '../public/why/teaLottie.json';
import leanAnimation from '../public/why/leanAnimation.json';
import personalAnimation from '../public/why/personalAnimation.json';
import Line from '../public/why/line.svg';
import Footer from '../components/Footer';
import { CircleButton } from '../components/WhyBluebird/CircleButton';
import { ImageOverlayTextContainer } from '../components/WhyBluebird/ImageOverlayTextContainer';
import { MobileHeader } from '../components/MobileHeader';
import WhatSetsUpApartCarousel from '../components/Carousel/WhatSetsUsApartCarousel';

export type btnOptions = 'Lean' | 'Boutique' | 'Personal';

export const coreValues: {
  key: btnOptions;
  description: string;
  animation: unknown;
}[] = [
  {
    key: 'Boutique',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    animation: coderAnimation,
  },
  {
    key: 'Lean',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    animation: leanAnimation,
  },
  {
    key: 'Personal',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    animation: personalAnimation,
  },
];

const Why = () => {
  const [activeBtn, setActiveBtn] = React.useState<btnOptions>('Boutique');

  const [isFirstSelected, setIsFirstSelected] = useState(true);
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full flex flex-col relative pb-8 2xl:h-[94vh] ">
        <div
          className="absolute bg-primary h-full w-[285vw] -z-1 left-[-98%]  2xl:left-[-16%] 2xl:w-[130vw]"
          style={{
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
        <div className="hidden xl:block">
          <Header />
        </div>
        <div className="block xl:hidden">
          <MobileHeader />
        </div>

        {/* Heading section */}
        <div
          className="flex  self-center xl:self-start  flex-col justify-center xl:justify-start mt-24 px-12 xl:px-48 2xl:px-60"
          style={{
            width: 'fit-content',
            blockSize: 'fit-content',
          }}
        >
          <span className="font-bold z-10 text-white text-4xl  lg:text-5xl">
            WHY <span className="italic">BLUEBIRD</span>
          </span>
          <div className="flex justify-end">
            <div className="w-[120px] z-10 lg:w-[250px]">{underline}</div>
          </div>
        </div>

        {/* Post Heading section */}
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start mt-8 px-12 xl:px-48 2xl:px-60">
          <div className="w-1/2 relative pr-0 2xl:pr-16">
            <picture>
              <source srcSet="/why/laptop_1.png" />
              <img src="/why/laptop_1.png" alt="laptop" />
            </picture>
            <div className="absolute -bottom-[100px] -left-4  xl:left-0 xl:top-0 xl:ml-[26vw] 2xl:mt-8 lg:mt-4 2xl:scale-100 lg:scale-90">
              <div className="flex  2xl:flex-col space-y-12">
                {isFirstSelected ? (
                  <div className="xl:pl-16">
                    <CircleButton disabled icon={orangeCircleSelected} text="VISION" />
                  </div>
                ) : (
                  <div className=" xl:pl-16">
                    <CircleButton
                      onClick={() => setIsFirstSelected((prev) => !prev)}
                      icon={blueCircle}
                      text="VISION"
                    />
                  </div>
                )}
                {!isFirstSelected ? (
                  <CircleButton disabled icon={orangeCircleSelected} text="MISSION" />
                ) : (
                  <div className="ml-6">
                    <CircleButton
                      onClick={() => setIsFirstSelected((prev) => !prev)}
                      icon={blueCircle}
                      text="MISSION"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="2xl:w-1/2 z-10 mt-32 xl:mt-0 2xl:mt-0">
            <div className="flex w-full 2xl:justify-start justify-center">
              <div className="hidden xl:block w-1/3" />
              {isFirstSelected ? (
                <p className="text-white text-lg mt-4 w-full">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              ) : (
                <p className="text-white text-lg mt-4 w-full">
                  Lorem ipsum dolor sit amet sed diam nonumy eirmod tempor invidunt ut labore et
                  dolore magna aliquyam erat, sed diam voluptua. Sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                  et accusam et justo duo dolores et ea rebum.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center items-center 2xl:hidden">
        <WhatSetsUpApartCarousel />
      </div>

      {/* What Sets us apart Section */}
      <div className="hidden w-full h-[900px] 2xl:relative 2xl:block">
        <div
          className="absolute bg-grey h-[1050px] -mt-[150px] w-full top-0 left-0"
          style={{ zIndex: -5 }}
        />
        <div className="flex flex-col w-full justify-center h-[full] pt-12 2xl:pt-24">
          <h1 className="text-center font-bold text-3xl lg:text-5xl  text-secondary uppercase">
            <span className="italic">WHAT SETS US </span>
            <span className="font-extrabold">APART?</span>
          </h1>
          <div className="flex mt-12 px-40">
            <div className="flex-none w-[350px] flex flex-col space-y-16 justify-start mr-32">
              {coreValues.map((val, i) => {
                return (
                  <Button
                    key={i}
                    active={activeBtn !== val.key}
                    className="h-[75px] text-center items-center justify-center max-w-[400px]"
                    onClick={() => setActiveBtn(val.key)}
                  >
                    <span className="text-3xl">{val.key}</span>
                  </Button>
                );
              })}
            </div>
            <div className="flex-1 flex flex-col">
              <div className="w-[300px]">{waveLines}</div>
              <div className="pt-8">
                {coreValues.map((res) => {
                  if (res.key === activeBtn) {
                    return (
                      <p key={res.key} className="text-2xl">
                        {res.description}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
            <div className="flex-1 flex">
              {coreValues.map((item, index) => (
                <div key={index} className={item.key === 'Personal' ? '-mt-24' : ''}>
                  {item.key === activeBtn && <Lottie animationData={item.animation} loop={true} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Culture section */}
      <div className="relative 2xl:-mt-60">
        <div
          className="absolute bg-secondary h-full w-[285vw] -z-1 left-[-98%]  2xl:left-[-16%] 2xl:w-[130vw]"
          style={{
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
          }}
        />
        <div className="flex flex-col w-full h-[1300px]">
          <div className="flex w-full items-center justify-center mt-32">
            <h1 className="text-white text-center text-5xl font-extrabold">CULTURE</h1>
          </div>
          <div className="flex flex-col w-full h-[1300px]">
            {/* relative containers for each image group */}
            {/* relative container #1 */}
            <div className="relative w-full group">
              <div
                className="absolute top-0 left-0 -rotate-90 ml-32 mt-16 group-hover:scale-125 transition duration-150"
                style={{
                  zIndex: 5,
                }}
              >
                <ImageOverlayTextContainer text="diversity" />
              </div>

              <div className="absolute ml-24 left-0 top-0 min-w-[600px] w-[35vw] origin-left transition duration-150 overflow-hidden">
                <picture>
                  <source srcSet="/why/handshake.png" />
                  <img
                    className="p-0 m-0 group-hover:scale-110 origin-left transition duration-500"
                    src="/why/handshake.png"
                    alt="handshake"
                  />
                </picture>
              </div>
            </div>

            {/* relative container #2 */}
            <div className="relative w-full group">
              <div
                className="absolute top-0 ml-[30vw] mt-8 group-hover:scale-125 transition duration-150"
                style={{
                  zIndex: 5,
                  top: '0',
                  left: '34%',
                }}
              >
                <ImageOverlayTextContainer text="word 3" />
              </div>
              <div className="absolute mr-24 mt-16 right-0 top-0 min-w-[500px] w-[35vw] group-hover:scale-110 transition duration-150 overflow-hidden">
                <picture>
                  <source srcSet="/why/meeting.png" />
                  <img
                    className="p-0 m-0 group-hover:scale-110 origin-bottom transition duration-300"
                    src="/why/meeting.png"
                    alt="meeting"
                  />
                </picture>
              </div>
            </div>

            {/* relative container #3 */}
            <div className="relative w-full group">
              <div
                className="absolute max-h-[740px] mt-[600px] left-0 group-hover:scale-110 transition duration-150"
                style={{
                  zIndex: 5,
                  top: '0',
                  left: '34%',
                }}
              >
                <ImageOverlayTextContainer text="digital nomads" />
              </div>
              <div
                className="absolute max-h-[740px] mt-[12vh] min-w-[380px] w-[30vw] scale-90 group-hover:scale-100 transition duration-150 overflow-hidden"
                style={{
                  top: '0',
                  left: '34%',
                }}
              >
                <picture>
                  <source srcSet="/why/music.png" />
                  <img
                    className="p-0 m-0 group-hover:scale-125 transition duration-500"
                    src="/why/music.png"
                    alt="music"
                  />
                </picture>
              </div>
            </div>
            <div className="flex justify-center items-end h-full mb-24">
              <div className="max-w-[1200px] min-w-[400px]">
                <h1 className="text-white text-center text-2xl">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards section */}
      <div className="py-24 flex flex-1 items-center flex-col bg-primary justify-center">
        <h1 className="text-highlight font-extrabold text-4xl pb-6">AWARDS</h1>
        <Line />
        <div className="max-w-[350px] mt-16">
          <picture>
            <source srcSet="/why/topDevelopers.png" />
            <img src="/why/topDevelopers.png" alt="award" />
          </picture>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Why;
