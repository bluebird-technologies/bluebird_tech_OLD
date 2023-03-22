import React, { ReactNode, useState } from 'react';
import { Container } from '../components/Container';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { items } from '../sections/WhatWeOfferBig';
import Lottie from 'lottie-react';
import RigthArrow from '../public/right-arrow.svg';
import { Button } from '../components/Button';
import { solutions } from '../sections/WhatWeOfferBig/solutions';
import SolutionsCard from '../components/SolutionsCard';
import Link from 'next/link';

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
        <Container center>
          <h1 className="title-1 mt-[82px]">
            <span className="font-bold italic">What we</span> offer
          </h1>
          <h4 className="italic text-[27px] leading-[34px] mt-[7px] text-highlight">
            A solution for any part of your business
          </h4>
          <div className="flex w-full mt-[92px]">
            {items.map((i) => (
              <div
                onClick={() => setSolutionOption(i.label)}
                key={i.label}
                className={`flex-1 flex flex-col items-center ${
                  i.label === solutionOption ? 'text-secondary group ' : ''
                } text-highlight hover:text-secondary hover:cursor-pointer group transition-all`}
              >
                <div className="w-16 h-16">
                  {/* <picture>
                    <source srcSet={`/what-we-offer-big/${i.icon}.svg`} type="image/svg+xml" />
                    <img
                      src={`/what-we-offer/${i.icon}.svg`}
                      alt="Bluebird"
                      className="max-w-[120px] w-full h-full max-h-[120px] text-highlight"
                    />
                  </picture> */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.182 28.967">
                    <g id="OBJECTS" transform="translate(-109.985 -132.848)">
                      <path
                        id="Path_2968"
                        data-name="Path 2968"
                        d="M166.667,154.611a7.823,7.823,0,0,0-2.992-6.108,9.171,9.171,0,0,0-5.494-2.111,6.156,6.156,0,0,0-.818.054,7.412,7.412,0,0,0-8.963-4.071,8.547,8.547,0,0,0-7.612-4.679,8.248,8.248,0,0,0-3.478.748,9.523,9.523,0,0,0-8.479-5.1,9.647,9.647,0,0,0-9.609,8.941,8.58,8.58,0,0,0-6.547,8.3.939.939,0,0,0,.043.281,3.11,3.11,0,1,0,1.787.008.937.937,0,0,0,.046-.289A6.688,6.688,0,0,1,120.268,144a.938.938,0,0,0,.806-.929v-.087a7.767,7.767,0,0,1,7.758-7.758A7.659,7.659,0,0,1,136,140.087a.938.938,0,0,0,1.368.452,6.368,6.368,0,0,1,3.417-.967,6.652,6.652,0,0,1,6.229,4.321.938.938,0,0,0,1.272.528,5.533,5.533,0,0,1,7.583,3.383.938.938,0,0,0,1.153.623,4.2,4.2,0,0,1,1.155-.16c2.372,0,6.609,2.12,6.609,6.353A5.327,5.327,0,0,1,163.406,158a5.594,5.594,0,0,1-4.138,1.436h-34.52a4.492,4.492,0,0,1-1.754-.445,3,3,0,0,1-1.655-2.965,3.284,3.284,0,0,1,3.41-3.41H144.7a3.112,3.112,0,1,0,0-1.876H124.749a5.286,5.286,0,1,0,0,10.572h34.52a7.382,7.382,0,0,0,5.472-1.992A7.156,7.156,0,0,0,166.667,154.611Zm-53.07.481a1.236,1.236,0,1,1,1.236-1.236A1.237,1.237,0,0,1,113.6,155.092Zm34.067-4.647a1.236,1.236,0,1,1-1.236,1.236A1.237,1.237,0,0,1,147.664,150.445Z"
                        stroke-width="1"
                        className="fill-current w-full h-full stroke-primary"
                      />
                    </g>
                  </svg> */}
                  {i.icon}
                </div>
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
          {solutions.map((item) => (
            <div key={item.title}>
              {solutionOption === item.title && <SolutionsCard item={item} />}
            </div>
          ))}
        </Container>
      </div>

      <div className="flex  bg-secondary items-center justify-center pb-[150px] pt-[280px] -mt-[200px]">
        {solutions.map((item) => (
          <div key={item.title} className="  flex items-center justify-center">
            {solutionOption === item.title && (
              <div className="flex flex-col   items-center  justify-center">
                <h1 className="text-white text-5xl items-center font-extrabold uppercase">
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
      <div className="z-10 w-full bg-[#F1F1F1] pb-[90px]">
        <Footer />
      </div>
    </div>
  );
}
