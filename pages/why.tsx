import React from 'react';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import UnderlineSvg from '../public/why/underline.svg';
import MissionSvg from '../public/why/mission.svg';
import VisionSvg from '../public/why/vision.svg';
import Image from 'next/image';
import { Button } from '../components/Button';
import WaveLines from '../public/why/wave-lines.svg';
import Lottie from 'lottie-react';
import coderAnimation from '../public/why/teaLottie.json';
import Line from '../public/why/line.svg';
import Footer from '../components/Footer';

const Why = () => {
  return (
    <div className=" flex-1 flex flex-col bg-seashell h-[100%]">
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
                <Image src="/why/laptop.png" alt="laptop" width={500} height={500} />
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
      <div className="mx-32">
        <div className="flex flex-col w-full ">
          <div className="flex mb-4 flex-1 items-center justify-center">
            <h1 className="text-center font-bold italic text-3xl text-secondary">
              WHAT SETS US APART
            </h1>
          </div>
          <div className="flex flex-row items-center flex-1 justify-between">
            <div className="flex flex-col">
              <Button>BOUTIQUE</Button>
              <Button backgroundColor="white" textColor="highlight" className="mt-4">
                LEAN
              </Button>
              <Button backgroundColor="white" textColor="highlight" className="mt-4">
                PERSONAL
              </Button>
            </div>
            <div className="flex flex-1  justify-center items-center flex-col">
              <WaveLines height={30} width={200} />
              <h1 className="w-2/3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.{' '}
              </h1>
            </div>
            <Lottie
              animationData={coderAnimation}
              loop={true}
              style={{ height: 200, width: 250 }}
            />
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
              <div className="relative mx-10 mt-14 flex  justify-around">
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
              </div>
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
        <Image
          src={'/why/topDevelopers.png'}
          height={200}
          alt="top-software-developers"
          width={200}
          style={{
            marginTop: 20,
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Why;
