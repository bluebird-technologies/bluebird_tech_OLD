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
    icons,
    amtItemsInFirstRow,
    centerSecondRow,
  } = item;

  return (
    <div className="flex flex-col mt-28 w-[70vw]">
      {/* heading section */}
      <div className="w-full mb-14">
        <div className="flex w-full">
          <h1 className="text-white font-bold uppercase text-5xl">{title.split(' ')[0]}</h1>
          <SwiggleLine className="ml-20 -mt-5" width={'60vw'} />
        </div>
        <h1 className="text-white font-bold uppercase text-5xl">{title.split(' ')[1]}</h1>
      </div>
      {/* parralel sections */}
      <div className="flex flex-row">
        {/* left section */}
        <div className="w-3/5">
          <div className="mr-32">
            <p className="text-white">
              {firstParagraphDescription} <b />
            </p>
            <p className="mt-5 text-white">{secondParagraphDescription}</p>
          </div>
        </div>
        {/* right section */}
        <div className="w-2/5 -mt-24">
          <div className="flex justify-end">
            <div className="flex flex-col w-full ml-32 justify-end space-y-8">
              <p className="text-highlight text-2xl text-right italic">{catchPhrase}</p>
              <IconLayout
                icons={icons}
                amtIconsRowOne={amtItemsInFirstRow}
                rowTwoCenter={centerSecondRow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionsCard;
