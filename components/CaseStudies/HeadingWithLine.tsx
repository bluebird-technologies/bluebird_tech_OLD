import React from 'react';
import SwiggleSvg from 'public/case-studies/swiggle.svg';
import BlueSwiggle from 'public/case-studies/blue-swiggle.svg';

interface Props {
  text: React.ReactNode | string;
  swiggleOption: '1' | '2';
  className?: string;
}

function HeadingWithLine({ text, swiggleOption, className }: Props) {
  const rowClass = className
    ? 'hidden lg:flex w-full max-w-7xl justify-center px-4 ' + className
    : 'hidden lg:flex w-full max-w-7xl justify-center px-4';
  return (
    <div>
      <div className={rowClass}>
        <p className="text-highlight font-normal text-xl lg:text-4xl text-center whitespace-nowrap lg:mr-12">
          {text}
        </p>
        {swiggleOption === '1' ? <SwiggleSvg /> : <BlueSwiggle />}
      </div>
      <div className="lg:hidden flex justify-center items-center">
        <p className="text-highlight font-normal text-md text-center whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default HeadingWithLine;
