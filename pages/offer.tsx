import React, { ReactNode, useState } from 'react';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { items } from '../sections/WhatWeOfferBig';
import Lottie from 'lottie-react';
import offerWaveAnimation from '../public/lottie/offerWaveAnimation.json';
import RigthArrow from '../public/right-arrow.svg';
import { Button } from '../components/Button';
import { solutions } from '../sections/WhatWeOfferBig/solutions';
import SolutionsCard from '../components/SolutionsCard';
import Link from 'next/link';
import MobileWhatWeOffer from '../components/Solutions/MobileWhatWeOffer';
import { MobileHeader } from '../components/MobileHeader';
import IconLayout from '../components/Solutions/IconLayout';
import angular from '../sections/WhatWeOfferBig/icons/angular';
export interface SolutionType {
  title: string;
  firstParagraphDescription: string;
  secondParagraphDescription: string;
  catchPhrase: string;
  content: {
    contentType: 'text' | 'icon';
    icons: ReactNode[] | 'string'[];
  };
  amtItemsInFirstRow: number;
  centerSecondRow: boolean;
  secondLayerTitle: string;
  secondLayerLottie: unknown;
}

export default function Offer() {
  const [solutionOption, setSolutionOption] = useState<string>('Web Development');

  // for the mobile slider
  const [currentSelectedOption, setCurrentSelectedOption] = useState('Web Development');

  return (
    <div className="flex flex-1 flex-col">
      {/* mobile top section div */}
      <div className="relative block md:hidden w-full h-full overflow-hidden">
        <div className="w-full h-full bg-primary ">
          <div className="w-full h-full ">
            <MobileHeader />
          </div>
          <div className="pt-6">
            <div className="flex flex-col w-full justify-center text-center">
              <h1 className="font-extrabold text-white leading-[32px] text-[27px] uppercase">
                <span className="font-bold italic">What we</span> offer
              </h1>
              <h4 className="italic text-highlight text-xl pt-3">
                A solution for any part <br />
                of your business
              </h4>
              <div className="mt-6">
                <Lottie
                  animationData={offerWaveAnimation}
                  style={{
                    height: '20px',
                  }}
                  loop={true}
                />
              </div>
            </div>
            <div className="pt-12 pb-[60px]">
              <MobileWhatWeOffer
                currentSelectedOption={currentSelectedOption}
                onChangeSelected={(val) => {
                  setCurrentSelectedOption(val);
                }}
              />
            </div>
          </div>
        </div>
        <div className="relative block md:hidden h-[100px] bg-white overflow-hidden">
          <div
            className="bg-primary"
            style={{
              height: '80px',
              position: 'absolute',
              top: 0,
              left: '-9%',
              width: '115vw',
              borderBottomLeftRadius: '50%',
              borderBottomRightRadius: '50%',
              zIndex: 5,
            }}
          />
        </div>
        <div className="w-full bg-white mb-20">
          {solutions.map((sol) => {
            if (sol.title === currentSelectedOption) {
              return (
                <div key={sol.title} className="flex flex-col">
                  <div className="flex mt-8 mb-12 w-full justify-center">
                    <div className="max-w-[240px]">
                      <h1 className="text-xl text-highlight text-center font-semibold">
                        {sol.catchPhrase}
                      </h1>
                    </div>
                  </div>
                  <IconLayout
                    content={{
                      contentType: sol.content.contentType,
                      icons: sol.content.icons,
                    }}
                    amtIconsRowOne={sol.amtItemsInFirstRow}
                    rowTwoCenter={sol.centerSecondRow}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="hidden md:flex md:flex-col w-full bg-cover bg-bottom items-center relative pb-[150px]">
        <div
          className="bg-primary h-full"
          style={{
            position: 'absolute',
            left: '-41%',
            width: '180vw',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
        <Header />

        <div className="w-full flex">
          <div className="mx-auto relative px-8 w-full items-center">
            <div className="flex flex-col w-full justify-center text-center">
              <h1 className="title-1 mt-[82px]">
                <span className="font-bold italic">What we</span> offer
              </h1>
              <h4 className="italic text-[27px] leading-[34px] mt-[7px] text-highlight">
                A solution for any part of your business
              </h4>
              <div className="mt-12">
                <Lottie
                  animationData={offerWaveAnimation}
                  style={{
                    height: '50px',
                  }}
                  loop={true}
                />
              </div>
            </div>

            <div className="flex w-full justify-center mt-20">
              <div className="flex w-full max-w-[1080px]">
                {items.map((i) => (
                  <div
                    onClick={() => setSolutionOption(i.label)}
                    key={i.label}
                    className={`flex-1 flex flex-col items-center ${
                      i.label === solutionOption ? 'text-secondary group ' : ''
                    } text-highlight hover:text-secondary hover:cursor-pointer group transition-all`}
                  >
                    <div className="w-16 h-16">{i.icon}</div>
                    <div className="text-white text-[13px] leading-[15px] font-extrabold uppercase text-center my-4">
                      {i.label !== 'API & System Development' ? (
                        i.label.split(' ').map((t, i) => <div key={i}>{t}</div>)
                      ) : (
                        <div>{i.label}</div>
                      )}
                    </div>
                    <div
                      className={`w-[26px] h-[26px] rounded-full bg-white border-[6px] border-[#EAEAEA] ${
                        i.label === solutionOption
                          ? 'bg-highlight border-[#FFFFFF27] h-[30px] w-[30px] my-[-2px]'
                          : ''
                      } group-hover:bg-highlight group-hover:border-[#FFFFFF27] group-hover:h-[30px] group-hover:w-[30px] group-hover:`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {solutions.map((item) => (
              <div key={item.title}>
                {solutionOption === item.title && <SolutionsCard item={item} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center bg-secondary pb-[150px] pt-[280px] -mt-[200px]">
        {solutions.map((item) => (
          <div className="flex items-center justify-center" key={item.title}>
            {solutionOption === item.title && (
              <div className="flex flex-1 flex-col items-center justify-center">
                <h1 className="text-white text-5xl font-extrabold uppercase">
                  {item.secondLayerTitle}
                </h1>
                <Lottie
                  animationData={item.secondLayerLottie}
                  style={{
                    marginTop: 30,
                    marginBottom: 30,
                    height: '450px',
                  }}
                  loop={true}
                />
                <Button className="px-12 py-4 bg-[#e97724] inline-flex rounded-full whitespace-nowrap hover:bg-gradient-to-t from-[#f6c4a1] to-[#e97724] transition-all hover:duration-1000 ease-in-out">
                  <Link href={'/calculator'}>
                    <span className="uppercase text-white text-[16px] font-semibold">
                      Get Started
                    </span>
                  </Link>
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* 
      <div className="bg-primary flex flex-1 py-16 flex-row justify-center">
        <a href={'#'} className="text-white text-xl md:text-4xl font-bold">
          <div className="flex items-center justify-center">
            <h1 className="mr-5">EXPLORE OUR OTHER SERVICES</h1>
            <RigthArrow />
          </div>
        </a>
      </div> */}
      <div className="z-10 w-full bg-[#F1F1F1]">
        <Footer />
      </div>
    </div>
  );
}
