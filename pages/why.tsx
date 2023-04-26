import React, { useState } from 'react';
import { Header } from '../components/Header';
import underline from '../components/WhyBluebird/icons/underline';
import orangeCircleSelected from '../components/WhyBluebird/icons/orange-circle-selected';
import blueCircle from '../components/WhyBluebird/icons/blue-circle';
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
import ImageGallery from '../components/WhyBluebird/ImageGallery';
import { HoverButton } from '../components/WhyBluebird/HoverButton';

const Why = () => {
  type btnOptions = 'Lean' | 'Boutique' | 'Personal';
  const [activeBtn, setActiveBtn] = React.useState<btnOptions>('Boutique');

  const coreValues: {
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

  const [isFirstSelected, setIsFirstSelected] = useState(true);

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full flex flex-col relative pv-20 xl:pb-40 ">
        <div
          className="absolute bg-primary h-full"
          style={{
            position: 'absolute',
            left: '-41%',
            width: '180vw',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            zIndex: -1,
          }}
        />
        <div className="hidden xl:block">
          <Header />
        </div>
        <div className="block xl:hidden">
          <MobileHeader />
        </div>

        {/* Heading section */}
        <div className="flex w-full justify-center mt-24">
          <div className="flex w-full max-w-[1280px] z-10 justify-center 2xl:justify-start">
            <div className="flex flex-col">
              <div className="font-bold z-10 text-white text-3xl lg:text-5xl text-center">
                WHY <span className="italic">BLUEBIRD?</span>
              </div>
              <div className="flex justify-end">
                <div className="w-[120px] lg:w-[250px] z-10">{underline}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Heading section */}
        <div className="flex w-full justify-center mt-12 lg:mt-24">
          <div className="flex flex-col 2xl:flex-row w-full 2xl:max-w-[1280px] px-12 md:px-32 2xl:px-0">
            {/* left side */}
            <div className="relative w-full 2xl:w-1/2 z-10 2xl:mr-64">
              <picture>
                <source srcSet="/why/laptop_1.png" />
                <img src="/why/laptop_1.png" alt="laptop" />
              </picture>
              <div className="hidden 2xl:block 2xl:absolute top-10 right-0 -mr-44">
                <div className="flex flex-col">
                  {isFirstSelected ? (
                    <div className="ml-12 z-20">
                      <CircleButton disabled icon={orangeCircleSelected} text="VISION" />
                    </div>
                  ) : (
                    <div className="ml-12 z-20">
                      <CircleButton
                        onClick={() => setIsFirstSelected((prev) => !prev)}
                        icon={blueCircle}
                        text="VISION"
                      />
                    </div>
                  )}
                  {!isFirstSelected ? (
                    <div className="mt-12 z-20">
                      <CircleButton disabled icon={orangeCircleSelected} text="MISSION" />
                    </div>
                  ) : (
                    <div className="mt-12 z-20">
                      <CircleButton
                        onClick={() => setIsFirstSelected((prev) => !prev)}
                        icon={blueCircle}
                        text="MISSION"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="2xl:hidden flex -mt-8 -ml-6 md:ml-20">
                {isFirstSelected ? (
                  <div className="z-20">
                    <CircleButton disabled icon={orangeCircleSelected} text="VISION" />
                  </div>
                ) : (
                  <div className="z-20">
                    <CircleButton
                      onClick={() => setIsFirstSelected((prev) => !prev)}
                      icon={blueCircle}
                      text="VISION"
                    />
                  </div>
                )}
                {!isFirstSelected ? (
                  <div className="z-20 ml-3 md:ml-12 mt-16">
                    <CircleButton disabled icon={orangeCircleSelected} text="MISSION" />
                  </div>
                ) : (
                  <div className="z-20 ml-3 md:ml-12 mt-16">
                    <CircleButton
                      onClick={() => setIsFirstSelected((prev) => !prev)}
                      icon={blueCircle}
                      text="MISSION"
                    />
                  </div>
                )}
              </div>
            </div>
            {/* right side */}
            <div className="flex flex-1 z-10 mb-24 mt-12 lg:mt-24 2xl:mt-12 2xl:mb-8">
              <div className="flex">
                {isFirstSelected ? (
                  <p className="text-white w-full lg:text-xl 2xl:text-2xl">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                ) : (
                  <p className="text-white w-full lg:text-xl 2xl:text-2xl">
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
      </div>

      {/* What Sets us apart Section */}
      <div className="flex flex-1 w-full px-4 items-center justify-center 2xl:hidden">
        <WhatSetsUpApartCarousel />
      </div>

      <div className="hidden w-full items-center 2xl:flex flex-col h-[900px] pb-20 relative">
        <div
          className="absolute bg-grey h-[1300px] -mt-[180px] w-full top-0 left-0"
          style={{ zIndex: -5 }}
        />
        <div className="flex flex-col items-center w-6/7 justify-center pt-24">
          <h1 className="text-center font-bold text-5xl text-secondary uppercase">
            <span className="italic">WHAT SETS US </span>
            <span className="font-extrabold">APART?</span>
          </h1>
          <div className="flex mt-12 px-32 3xl:px-48">
            <div className="w-1/3 flex flex-col space-y-16 justify-start">
              {coreValues.map((val, i) => {
                return (
                  <HoverButton
                    key={i}
                    active={activeBtn !== val.key}
                    onClick={() => setActiveBtn(val.key)}
                  >
                    {val.key}
                  </HoverButton>
                );
              })}
            </div>
            <div className="w-1/3 flex flex-col mx-24 mt-6">
              <div className="w-64">{waveLines}</div>
              <div className="pt-8">
                {coreValues.map((res) => {
                  if (res.key === activeBtn) {
                    return (
                      <p key={res.key} className="text-left text-xl 3xl:text-2xl">
                        {res.description}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
            <div className="flex w-1/3">
              {coreValues.map((item, index) => (
                <div key={index} className={item.key === 'Personal' ? '-mt-24' : ''}>
                  {item.key === activeBtn && (
                    <Lottie
                      className="h-[400px] w-full"
                      animationData={item.animation}
                      loop={true}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Culture section Mobile */}
      <div className="relative h-full 2xl:hidden">
        <div
          className="bg-secondary"
          style={{
            height: '10%',
            position: 'absolute',
            top: 0,
            left: '-12.5%',
            width: '125vw',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
          }}
        />
        <div
          className="bg-secondary"
          style={{
            height: '80%',
            position: 'absolute',
            top: '10%',
            width: '100vw',
          }}
        />
        <div
          className="bg-secondary"
          style={{
            height: '10%',
            position: 'absolute',
            bottom: 0,
            left: '-12.5%',
            width: '125vw',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
        <div className="pt-12">
          <ImageGallery />
        </div>
      </div>

      {/* Culture section */}
      <div className="hidden 2xl:block 2xl:relative -mt-60">
        <div
          className="h-full bg-secondary"
          style={{
            position: 'absolute',
            left: '-26%',
            width: '150vw',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            zIndex: -1,
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
            <div className="flex justify-center items-end content-end h-full mb-52 3xl:mb-24">
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
      <div className="py-28 sm:py-32 flex flex-1 items-center flex-col -mt-32 2xl:mt-0 bg-primary justify-center">
        <h1 className="text-highlight font-extrabold text-4xl mt-20 sm:mt-12 2xl:mt-0 sm:pb-6">
          AWARDS
        </h1>
        <Line className="hidden lg:block" />
        <div className="max-w-[350px] mt-16">
          <picture className="h-20 w-20">
            <source srcSet="/why/topDevelopers.png" />
            <img
              src="/why/topDevelopers.png"
              className="h-60 w-60 sm:h-auto sm:w-auto object-contain"
              alt="award"
            />
          </picture>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Why;
