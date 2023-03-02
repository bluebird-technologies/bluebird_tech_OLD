import React, { useState } from 'react';
import { Header } from '../components/Header';
import underline from '../components/WhyBluebird/icons/underline';
import orangeCircle from '../components/WhyBluebird/icons/orange-circle';
import orangeCircleSelected from '../components/WhyBluebird/icons/orange-circle-selected';
import blueCircle from '../components/WhyBluebird/icons/blue-circle';
import blueCircleSelected from '../components/WhyBluebird/icons/blue-circle-selected';
import { Button } from '../components/Button';
import WaveLines from '../public/why/wave-lines.svg';
import Lottie from 'lottie-react';
import coderAnimation from '../public/why/teaLottie.json';
import leanAnimation from '../public/why/leanAnimation.json';
import personalAnimation from '../public/why/personalAnimation.json';
import Line from '../public/why/line.svg';
import Footer from '../components/Footer';
import { CircleButton } from '../components/WhyBluebird/CircleButton';

const Why = () => {
  type btnOptions = 'Lean' | 'Boutique' | 'Personal';
  const [activeBtn, setActiveBtn] = React.useState<btnOptions>('Lean');

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
    <div>
      <div className="w-full flex flex-col relative h-[110vh] xl:h-[94vh] ">
        <div
          className="bg-primary h-full"
          style={{
            position: 'absolute',
            left: '-16%',
            width: '130vw',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            zIndex: -1,
          }}
        />
        <Header />

        {/* Heading section */}
        <div
          className="flex flex-col justify-center xl:justify-start mt-24 px-12 xl:px-48 2xl:px-60"
          style={{
            width: 'fit-content',
            blockSize: 'fit-content',
          }}
        >
          <div className="font-bold text-white text-5xl">
            WHY <span className="italic">BLUEBIRD ?</span>
          </div>
          <div className="flex justify-end">
            <div className="w-[250px]">{underline}</div>
          </div>
        </div>

        {/* post heading section */}
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start mt-12 px-12 xl:px-48 2xl:px-60">
          <div className="w-1/2 relative pr-0 2xl:pr-16">
            <picture>
              <source srcSet="/why/laptop_1.png" />
              <img src="/why/laptop_1.png" alt="laptop" />
            </picture>
            <div className="absolute left-0 top-0 ml-[26vw] 2xl:mt-8 lg:mt-4 2xl:scale-100 lg:scale-90">
              <div className="flex flex-col space-y-12">
                {isFirstSelected ? (
                  <div className="pl-16">
                    <CircleButton disabled icon={orangeCircleSelected} text="VISION" />
                  </div>
                ) : (
                  <div className="pl-16">
                    <CircleButton
                      onClick={() => setIsFirstSelected((prev) => !prev)}
                      icon={orangeCircle}
                      text="VISION"
                    />
                  </div>
                )}
                {!isFirstSelected ? (
                  <CircleButton disabled icon={blueCircleSelected} text="MISSION" />
                ) : (
                  <CircleButton
                    onClick={() => setIsFirstSelected((prev) => !prev)}
                    icon={blueCircle}
                    text="MISSION"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-1/2 mt-12 2xl:mt-0">
            <div className="flex w-full 2xl:justify-start justify-center">
              <div className="hidden xl:block w-1/3" />
              {isFirstSelected ? (
                <p className="text-white text-xl w-full xl:w-2/3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              ) : (
                <p className="text-white text-xl w-full xl:w-2/3">
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

      <div className="mx-32 mt-12">
        <div className="flex flex-col w-full">
          <div>
            <div className="flex mb-4 flex-1 items-center justify-center">
              <h1 className="text-center font-bold italic text-3xl text-secondary">
                WHAT SETS US APART
              </h1>
            </div>
            <div className="flex flex-row items-center flex-1 justify-between">
              <div className="flex flex-col">
                <Button active={activeBtn === 'Boutique'} onClick={() => setActiveBtn('Boutique')}>
                  Boutique
                </Button>
                <Button
                  active={activeBtn === 'Lean'}
                  className="mt-4"
                  onClick={() => setActiveBtn('Lean')}
                >
                  Lean
                </Button>
                <Button
                  active={activeBtn === 'Personal'}
                  className="mt-4"
                  onClick={() => setActiveBtn('Personal')}
                >
                  Personal
                </Button>
              </div>
              {coreValues.map((item, index) => (
                <div key={index}>
                  {item.key === activeBtn && (
                    <div className="flex flex-row items-center">
                      <div className="flex flex-1  justify-center items-center flex-col">
                        <WaveLines height={30} width={200} />
                        <h1 className="w-2/3">{item.description}</h1>
                      </div>
                      <Lottie
                        animationData={item.animation}
                        loop={true}
                        style={{ height: 300, width: 350 }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            height: '100%',
            width: '100%',
            position: 'relative',
            backgroundImage: `url(/why/bluebackground.svg)`,
            backgroundRepeat: 'no-repeat',
            paddingTop: '20px',
          }}
          className="flex-1 pb-10 item-center "
        >
          <div className=" flex flex-1 justify-center">
            <div className="relative flex flex-col flex-1 mt-20">
              <div className="flex flex-1 items-center justify-center">
                <h1 className="text-white text-center text-3xl font-bold">CULTURE</h1>
              </div>
              {/* <div className="relative mx-10 mt-14 flex  justify-around">
                <Image
                  src={'/why/handshake.png'}
                  alt="handshake"
                  width={250}
                  height={100}
                  style={{
                    height: '100%',
                    width: '34%',
                    objectFit: 'contain',
                  }}
                />
                <Image
                  src={'/why/meeting.png'}
                  alt="handshake"
                  width={300}
                  height={100}
                  style={{
                    height: '100%',
                    width: '35%',
                    marginTop: 50,
                    objectFit: 'contain',
                  }}
                />
                <Image
                  src={'/why/music.png'}
                  alt="handshake"
                  width={210}
                  height={100}
                  style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    objectFit: 'contain',
                    top: 90,
                  }}
                />
              </div> */}
              <div className="px-8 flex-1 mt-24 items-center justify-center">
                <h1 className="text-white  text-center font-bold">
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
      <div className="px-8 flex flex-1 py-8  items-center flex-col bg-primary justify-center">
        <h1 className="text-highlight font-bold text-3xl">AWARDS</h1>
        <Line />
        {/* <Image
          src={'/why/topDevelopers.png'}
          height={200}
          alt="top-software-developers"
          width={200}
          style={{
            marginTop: 20,
          }}
        /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Why;
