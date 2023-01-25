import React, { ReactNode } from 'react';
import SwiggleLine from '../public/what-we-offer/swiggle.svg';

export interface Props {
  title: string;
  firstParagraphDescription: string;
  secondParagraphDescription: string;
  catchPhrase: string;
  icons: ReactNode[] | 'string'[];
  numOfCols?: number;
  numOfRows?: number;
}

function SolutionsCard({
  title,
  firstParagraphDescription,
  secondParagraphDescription,
  catchPhrase,
  icons,
  numOfCols,
  numOfRows,
}: Props) {
  const cols = numOfCols ?? 2;
  const row = numOfRows ?? 2;

  console.log(cols, row);
  return (
    <div className="flex flex-row  mt-28 mx-3 w-[80vw]  justify-between">
      <div className="">
        <div className="flex flex-1 flex-row justify-between">
          <h1 className="text-white font-bold uppercase text-5xl"> {title.split(' ')[0]}</h1>
          <SwiggleLine className="ml-20" width={'50vw'} />
        </div>
        <div className="flex flex-col  w-full">
          <div className="flex flex-row mt-4 items-center justify-between">
            <h1 className="text-white font-bold uppercase text-5xl">{title.split(' ')[1]}</h1>
            <p className="text-highlight w-3/12 text-2xl text-right italic">{catchPhrase}</p>
          </div>
          <div className="flex flex-row mt-2 justify-between ">
            <div className="w-3/6">
              <p className="mt-5 text-white">
                {firstParagraphDescription} <b />
              </p>
              <p className="mt-5 text-white">{secondParagraphDescription}</p>
            </div>
            <div className="w-3/5">
              <div className={`grid gap-4 grid-cols-${cols} grid-rows-${row}  mt-4 `}>
                {icons.map((item, key) => (
                  <div className="grid" key={key}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end  w-2/5 justify-center"></div>
    </div>
  );
}

export default SolutionsCard;
