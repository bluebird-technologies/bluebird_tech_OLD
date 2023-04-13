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
  const imgSrc =
    clientName === 'revio'
      ? '/case-studies/clay.png'
      : clientName === 'raubex'
      ? 'raubex-clay.png'
      : 'aurora-clay.png';
  // using xl breakpoint for this component since the image section breaks the UI sooner
  return (
    <div className="relative flex flex-col xl:flex-row w-full xl:mt-60 xl:h-full">
      <div className="flex flex-col justify-center xl:justify-start items-center xl:items-start xl:w-1/2 xl:pl-64">
        <QuoteSvg />
        <p className="text-white text-center xl:text-left text-2xl xl:text-5xl xl:pb-8 uppercase">
          {quoteLine1}
        </p>
        <p className="text-white text-center xl:text-left text-2xl xl:text-5xl leading-10 xl:pb-16 uppercase">
          {quoteLine2}
        </p>

        <div className="relative">
          <div
            className="absolute top-16 left-0 hidden xl:block"
            style={{
              zIndex: 2,
            }}
          >
            <SwiggleSvg width="1000" />
          </div>
          <p className="text-highlight italic text-xl xl:text-3xl">- {nameAndJob}</p>
        </div>
        <p className="hidden xl:block text-highlight text-3xl pt-32">{involvedTeam}</p>
      </div>
      <div className="hidden xl:block relative xl:w-1/2 w-full">
        <div
          className="absolute right-[250px] top-[200px] scaleLottiex4"
          style={{
            zIndex: 1,
          }}
        >
          <Lottie animationData={flashingLottieOrange} loop={true} />
        </div>

        {clientName !== 'aurora' ? (
          <picture className="absolute top-0 xl:top-60" style={{ zIndex: 3 }}>
            <source srcSet={imgSrc} />
            <img src={imgSrc} alt={clientName + 'image'} className="w-full" />
          </picture>
        ) : (
          <picture className="absolute top-0 xl:-top-20" style={{ zIndex: 3 }}>
            <source srcSet={imgSrc} />
            <img src={imgSrc} alt={clientName + 'image'} className="w-full" />
          </picture>
        )}
      </div>
      <div className="xl:hidden block">
        <picture className="h-full" style={{ zIndex: 3 }}>
          <source srcSet={imgSrc} />
          <img src={imgSrc} alt={clientName + 'image'} className="w-full" />
        </picture>
      </div>
      <div className="xl:hidden w-full flex justify-center items-center mb-10">
        <p className="text-highlight text-xl xl:text-3xl pt-4 text-center">{involvedTeam}</p>
      </div>
    </div>
  );
}

export default RevioQuoteSection;
