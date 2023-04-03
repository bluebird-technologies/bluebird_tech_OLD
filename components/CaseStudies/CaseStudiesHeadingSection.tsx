import React from 'react';
import DownArrow from '../../public/down-arrow.svg';

export default function CaseStudiesHeadingSection() {
  return (
    <div className="relative flex flex-col items-center md:mt-20 md:pb-0 pb-12">
      <h2 className="uppercase title-1 alt hidden md:block">CASE STUDIES</h2>
      <h2 className="uppercase md:hidden block text-white font-bold text-3xl pt-[140px]">
        CASE STUDIES
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
