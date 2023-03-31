import React from 'react';
import OfferSolutionsCarousel from '../Carousel/OfferSolutionsCarousel';
import { items } from '../../sections/WhatWeOfferBig';
import { solutions } from '../../sections/WhatWeOfferBig/solutions';
import SwiggleMobile from '../../public/what-we-offer/offer-squiggle-mobile.svg';

interface MobileWhatWeOfferProps {
  currentSelectedOption: string;
  onChangeSelected: (val: string) => void;
}

export default function MobileWhatWeOffer({
  currentSelectedOption,
  onChangeSelected,
}: MobileWhatWeOfferProps) {
  const handleChangeSlider = (currentOption: string) => {
    onChangeSelected(currentOption);
  };

  return (
    <div style={{ zIndex: 5 }} className="flex md:hidden w-full justify-center">
      <div className="flex flex-col">
        <OfferSolutionsCarousel slides={items} onChange={(val) => handleChangeSlider(val)} />
        <div className="mt-12">
          <div className="w-full px-12">
            <SwiggleMobile />
          </div>
          <div className="mt-12">
            {solutions.map((sol) => {
              if (sol.title === currentSelectedOption) {
                return (
                  <div className="text-center px-12" key={sol.title}>
                    <h1 className="text-4xl text-white font-bold">{sol.title}</h1>
                    <p className="text-white mt-6">{sol.firstParagraphDescription}</p>
                    <p className="text-white mt-6">{sol.secondParagraphDescription}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
