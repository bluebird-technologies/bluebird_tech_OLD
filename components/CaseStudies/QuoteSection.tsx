import React from 'react';
import SwiggleSvg from 'public/case-studies/swiggle.svg';
import QuoteSvg from 'public/case-studies/quote.svg';
import Lottie from 'lottie-react';
import flashingLottieOrange from '../../public/lottie/flashingLottieOrange.json';

interface RevioQuoteSectionProps {
  clientName: string;
  quoteLine1: string;
  quoteLine2: string;
  nameAndJob: string;
  involvedTeam: string;
}

function RevioQuoteSection({
  clientName,
  quoteLine1,
  quoteLine2,
  nameAndJob,
  involvedTeam,
}: RevioQuoteSectionProps) {
  return (
    <div className="relative flex flex-col lg:flex-row w-full lg:mt-60 lg:h-full">
      <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:w-1/2 lg:pl-64">
        <QuoteSvg />
        <p className="text-white text-center lg:text-left text-2xl lg:text-5xl lg:pb-8 uppercase">
          {quoteLine1}
        </p>
        <p className="text-white text-center lg:text-left text-2xl lg:text-5xl leading-10 lg:pb-16 uppercase">
          {quoteLine2}
        </p>

        <div className="relative">
          <div
            className="absolute top-16 left-0 hidden lg:block"
            style={{
              zIndex: 2,
            }}
          >
            <SwiggleSvg width="1000" />
          </div>
          <p className="text-highlight italic text-xl lg:text-3xl">- {nameAndJob}</p>
        </div>
        <p className="hidden lg:block text-highlight text-3xl pt-32">{involvedTeam}</p>
      </div>
      <div className="hidden lg:block relative lg:w-1/2 w-full">
        <div
          className="absolute right-[250px] top-[200px] scaleLottiex4"
          style={{
            zIndex: 1,
          }}
        >
          <Lottie animationData={flashingLottieOrange} loop={true} />
        </div>
        <picture className="absolute top-0 lg:top-60" style={{ zIndex: 3 }}>
          <source srcSet="/case-studies/clay.png" />
          <img src="/case-studies/clay.png" alt={clientName + 'image'} className="w-full" />
        </picture>
      </div>
      <div className="lg:hidden block">
        <picture className="h-full" style={{ zIndex: 3 }}>
          <source srcSet="/case-studies/clay.png" />
          <img src="/case-studies/clay.png" alt={clientName + 'image'} className="w-full" />
        </picture>
      </div>
      <div className="lg:hidden w-full flex justify-center items-center mb-10">
        <p className="text-highlight text-xl lg:text-3xl pt-4 text-center">{involvedTeam}</p>
      </div>
    </div>
  );
}

export default RevioQuoteSection;
