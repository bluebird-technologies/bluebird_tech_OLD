import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Lottie from 'lottie-react';
import teammemberanimation from '../../public/lottie/teammemberanimation.json';
import ChevronRight from '../../public/chevron-right.svg';

interface Props {
  item: string[];
}

export default function TeamCarousel({ item }: Props) {
  return (
    <Carousel
      emulateTouch
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      width={350}
      centerMode={true}
      centerSlidePercentage={100}
      onChange={(val) => console.log(val)}
      renderArrowNext={(clickHandler) => {
        return (
          <div onClick={clickHandler} className="absolute top-28 right-4">
            <ChevronRight />
          </div>
        );
      }}
    >
      {item?.map((label, i) => {
        return (
          <div className="flex items-center  justify-center" key={i}>
            <div className="flex justify-center    items-center">
              <CarouselSlideItem label={label} />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

interface CarouselSlideItemProps {
  label: string;
}

function CarouselSlideItem({ label }: CarouselSlideItemProps) {
  return (
    <div className="flex  h-full flex-col items-center justify-between">
      <div className="flex justify-center text-center items-center">
        <Lottie className="h-[300px]" animationData={teammemberanimation} loop={true} />
      </div>
      <div className="text-2xl md:text-4xl text-white font-medium text-center">{label}</div>
    </div>
  );
}
