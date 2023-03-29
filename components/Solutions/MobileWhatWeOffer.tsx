import React from 'react';
import OfferSolutionsCarousel, { SolutionItem } from '../Carousel/OfferSolutionsCarousel';
import { items } from '../../sections/WhatWeOfferBig';

export default function MobileWhatWeOffer() {
  const handleChangeSlider = (currentOption: string) => {
    console.log(currentOption);
  };

  return (
    <div style={{ zIndex: 5 }} className="flex md:hidden w-full justify-center">
      <OfferSolutionsCarousel slides={items} onChange={(val) => handleChangeSlider(val)} />
    </div>
  );
}
