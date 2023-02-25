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
    ? 'flex w-full max-w-7xl justify-center px-4 ' + className
    : 'flex w-full max-w-7xl justify-center px-4';
  return (
    <div className={rowClass}>
      <p className="text-highlight font-normal text-4xl text-center whitespace-nowrap mr-12">
        {text}
      </p>
      {swiggleOption === '1' ? <SwiggleSvg /> : <BlueSwiggle />}
    </div>
  );
}

export default HeadingWithLine;
