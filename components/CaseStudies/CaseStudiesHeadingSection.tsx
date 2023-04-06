import React from 'react';
import DownArrow from '../../public/down-arrow.svg';
import Lottie from 'lottie-react';
import offerWaveAnimation from '../../public/lottie/offerWaveAnimation.json';

export default function CaseStudiesHeadingSection() {
  const heading = 'Case Stuides';
  return (
    <div className="relative flex flex-col items-center md:mt-20 md:pb-0 pb-12">
      <div className="absolute bottom-0 mb-44 md:hidden" style={{ zIndex: -1 }}>
        <Lottie
          animationData={offerWaveAnimation}
          style={{
            height: '30px',
          }}
          loop={true}
        />
      </div>

      <h2 className="uppercase title-1 alt hidden md:block">{heading}</h2>
      <h2 className="uppercase md:hidden block text-white font-bold text-3xl pt-[140px]">
        {heading}
      </h2>

      <div className="flex flex-col mt-16 mb-8 md:my-16 md:max-w-[800px] space-y-8">
        <p className="px-12 md:px-0 text-sm md:text-xl text-center text-white">
          Intro about how prestigious our work and clients are, etc.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam
        </p>
      </div>
      <div className="h-[75px] md:h-[190px]">
        <DownArrow />
      </div>
    </div>
  );
}
