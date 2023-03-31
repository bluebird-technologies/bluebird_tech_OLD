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
        <div className="mb-14 w-full">
          <div className="flex w-full">
            <h1 className="text-5xl font-extrabold uppercase text-white">{title.split(' ')[0]}</h1>
            <SwiggleLine className="ml-20 -mt-5" />
          </div>
          <h1 className="mt-2 text-5xl font-extrabold uppercase text-white">
            {title.split(' ')[1]}
          </h1>
        </div>
        <div className="mr-32">
          <p className="text-[27px] leading-8 text-white">
            {firstParagraphDescription} <b />
          </p>
          <p className="mt-5 text-[27px] leading-8 text-white">{secondParagraphDescription}</p>
        </div>
      </SolutionsCardContainer>
    );
  }

  return (
    <SolutionsCardContainer>
      {/* heading section */}
      <div className="mb-14 w-full">
        {title !== 'API & System Development' ? (
          <div className="flex w-full">
            <h1 className="text-5xl font-extrabold uppercase text-white">{title.split(' ')[0]}</h1>
            <div className="relative">
              <SwiggleLine className="absolute ml-20 -mt-5" />
            </div>
          </div>
        ) : (
          <div className="flex w-full">
            <h1 className="text-5xl font-extrabold uppercase text-white">
              {title.split(' ')[0]} {title.split(' ')[1]} {title.split(' ')[2]}
            </h1>
            <div className="relative">
              <SwiggleLine className="absolute ml-20 -mt-5" />
            </div>
          </div>
        )}

        {title !== 'API & System Development' ? (
          <h1 className="mt-2 text-5xl font-extrabold uppercase text-white">
            {title.split(' ')[1]}
          </h1>
        ) : (
          <h1 className="mt-2 text-5xl font-extrabold uppercase text-white">
            {title.split(' ')[3]}
          </h1>
        )}
      </div>
      {/* parralel sections */}
      <div className="flex flex-row justify-between">
        {/* left section */}
        <div className="w-3/5">
          <div className="w-4/5">
            <p className="text-[27px] leading-8 text-white">
              {firstParagraphDescription} <b />
            </p>
            <p className="mt-5 text-[27px] leading-8 text-white">{secondParagraphDescription}</p>
          </div>
        </div>
        {/* right section */}
        <div className="-mt-24 w-2/5">
          <div className="flex justify-end">
            <div className="flex w-full flex-col justify-end space-y-8">
              <p className="pb-6 text-right text-2xl italic text-highlight">{catchPhrase}</p>
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
    <div className="mt-28 mb-10 flex w-full justify-center">
      <div className="max-w-[1350px]">{children}</div>
    </div>
  );
}
