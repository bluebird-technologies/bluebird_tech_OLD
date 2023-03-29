import React, { ReactNode, useState } from 'react';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { items } from '../sections/WhatWeOfferBig';
import Lottie from 'lottie-react';
import RigthArrow from '../public/right-arrow.svg';
import { Button } from '../components/Button';
import { solutions } from '../sections/WhatWeOfferBig/solutions';
import SolutionsCard from '../components/SolutionsCard';
import Link from 'next/link';
import MobileWhatWeOffer from '../components/Solutions/MobileWhatWeOffer';

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

  return (
    <div className="flex flex-1 flex-col">
      <div className="w-full bg-cover bg-bottom flex flex-col items-center relative pb-[150px]">
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
          <MobileWhatWeOffer />
          <div className="mx-auto relative px-8 w-full items-center hidden md:block">
            <div className="flex flex-col w-full justify-center text-center">
              <h1 className="title-1 mt-[82px]">
                <span className="font-bold italic">What we</span> offer
              </h1>
              <h4 className="italic text-[27px] leading-[34px] mt-[7px] text-highlight">
                A solution for any part of your business
              </h4>
            </div>

            <div className="flex w-full justify-center mt-[92px]">
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

      <div className="flex items-center justify-center bg-secondary pb-[150px] pt-[280px] -mt-[200px]">
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

      <div className="bg-primary flex flex-1 py-16 flex-row justify-center">
        <a href={'#'} className="text-white text-4xl font-bold">
          <div className="flex items-center justify-center">
            <h1 className="mr-5">EXPLORE OUR OTHER SERVICES</h1>
            <RigthArrow />
          </div>
        </a>
      </div>
      <div className="z-10 w-full bg-[#F1F1F1]">
        <Footer />
      </div>
    </div>
  );
}
