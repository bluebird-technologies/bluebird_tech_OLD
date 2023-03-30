import React from 'react';
import { SolutionType } from '../pages/offer';
import SwiggleLine from '../public/what-we-offer/swiggle.svg';
import IconLayout from './Solutions/IconLayout';

export interface Props {
  item: SolutionType;
}

function SolutionsCard({ item }: Props) {
  const {
    title,
    catchPhrase,
    firstParagraphDescription,
    secondParagraphDescription,
    content,
    amtItemsInFirstRow,
    centerSecondRow,
  } = item;
  if (title === 'Developer Outsourcing') {
    return (
      <SolutionsCardContainer>
        <div className="w-full mb-14">
          <div className="flex w-full">
            <h1 className="text-white font-extrabold uppercase text-5xl">{title.split(' ')[0]}</h1>
            <SwiggleLine className="ml-20 -mt-5" />
          </div>
          <h1 className="text-white font-extrabold uppercase text-5xl mt-2">
            {title.split(' ')[1]}
          </h1>
        </div>
        <div className="mr-32">
          <p className="text-white text-[27px] leading-8">
            {firstParagraphDescription} <b />
          </p>
          <p className="mt-5 text-white text-[27px] leading-8">{secondParagraphDescription}</p>
        </div>
      </SolutionsCardContainer>
    );
  }

  return (
    <SolutionsCardContainer>
      {/* heading section */}
      <div className="w-full mb-14">
        {title !== 'API & System Development' ? (
          <div className="flex w-full">
            <h1 className="text-white font-extrabold uppercase text-5xl">{title.split(' ')[0]}</h1>
            <div className="relative">
              <SwiggleLine className="absolute ml-20 -mt-5" />
            </div>
          </div>
        ) : (
          <div className="flex w-full">
            <h1 className="text-white font-extrabold uppercase text-5xl">
              {title.split(' ')[0]} {title.split(' ')[1]} {title.split(' ')[2]}
            </h1>
            <div className="relative">
              <SwiggleLine className="absolute ml-20 -mt-5" />
            </div>
          </div>
        )}

        {title !== 'API & System Development' ? (
          <h1 className="text-white font-extrabold uppercase text-5xl mt-2">
            {title.split(' ')[1]}
          </h1>
        ) : (
          <h1 className="text-white font-extrabold uppercase text-5xl mt-2">
            {title.split(' ')[3]}
          </h1>
        )}
      </div>
      {/* parralel sections */}
      <div className="flex flex-row justify-between">
        {/* left section */}
        <div className="w-3/5">
          <div className="w-4/5">
            <p className="text-white text-[27px] leading-8">
              {firstParagraphDescription} <b />
            </p>
            <p className="mt-5 text-white text-[27px] leading-8">{secondParagraphDescription}</p>
          </div>
        </div>
        {/* right section */}
        <div className="w-2/5 -mt-24">
          <div className="flex justify-end">
            <div className="flex flex-col w-full justify-end space-y-8">
              <p className="text-highlight text-2xl text-right italic pb-6">{catchPhrase}</p>
              <IconLayout
                content={content}
                amtIconsRowOne={amtItemsInFirstRow}
                rowTwoCenter={centerSecondRow}
              />
            </div>
          </div>
        </div>
      </div>
    </SolutionsCardContainer>
  );
}

export default SolutionsCard;

interface ContainerProps {
  children: React.ReactNode;
}
function SolutionsCardContainer({ children }: ContainerProps) {
  return (
    <div className="flex mt-28 mb-10 w-full justify-center">
      <div className="max-w-[1350px]">{children}</div>
    </div>
  );
}
