import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import coderAnimation from '../../public/why/teaLottie.json';
import leanAnimation from '../../public/why/leanAnimation.json';
import personalAnimation from '../../public/why/personalAnimation.json';
import Lottie from 'lottie-react';

export type btnOptions = 'Lean' | 'Boutique' | 'Personal';

interface Props {
  label: btnOptions;
  description: string;
  animation: unknown;
}

export const coreValues: {
  label: btnOptions;
  description: string;
  animation: unknown;
}[] = [
  {
    label: 'Boutique',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    animation: coderAnimation,
  },
  {
    label: 'Lean',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    animation: leanAnimation,
  },
  {
    label: 'Personal',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    animation: personalAnimation,
  },
];

export default function WhatSetsUpApartCarousel() {
  return (
    <Carousel
      emulateTouch
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      width={800}
      centerMode={true}
      centerSlidePercentage={100}
      onChange={(val) => console.log(val)}
      renderIndicator={(clickHandler, isSelected) => (
        <span
          onClick={clickHandler}
          className={`ml-2 mt-4  text-[140px] ${isSelected ? 'text-darkGrey' : 'text-light'}`}
        >
          .
        </span>
      )}
    >
      {coreValues?.map((slide, i) => {
        return (
          <div key={i}>
            <CarouselSlideItem
              label={slide?.label}
              description={slide?.description}
              animation={slide?.animation}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

function CarouselSlideItem({ label, description, animation }: Props) {
  return (
    <div className="">
      <div className="flex-wrap items-center justify-center text-2xl font-extrabold uppercase leading-[64px] text-center">
        <h1 className="text-highlight">{label}</h1>
      </div>
      <div className=" ">
        <div className="flex w-auto items-center border justify-center">
          <p className="text-black text-base text-center mt-4 mx-4">{description}</p>
        </div>
      </div>
      <div className="w-full sm:max-w-md lg:max-w-lg mx-auto my-4 sm:my-8 lg:my-16">
        <Lottie
          animationData={animation}
          loop={true}
          style={{
            height: '250px',
          }}
        />
      </div>
    </div>
  );
}
