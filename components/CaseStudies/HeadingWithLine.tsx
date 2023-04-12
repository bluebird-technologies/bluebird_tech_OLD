import React from 'react';
import SwiggleSvg from 'public/case-studies/swiggle.svg';
import BlueSwiggle from 'public/case-studies/blue-swiggle.svg';

interface Props {
  text: React.ReactNode | string;
  swiggleOption: '1' | '2';
}

function HeadingWithLine({ text, swiggleOption }: Props) {
  return (
    <div className="flex w-full justify-center lg:px-32">
      <h2 className="text-highlight font-medium text-xl md:text-2xl lg:text-3xl text-center break-keep flex-nowrap lg:pr-16">
        {text}
      </h2>
      <div className="hidden lg:block flex-1">
        {swiggleOption === '1' ? <SwiggleSvg /> : <BlueSwiggle />}
      </div>
    </div>
  );
}

export default HeadingWithLine;
