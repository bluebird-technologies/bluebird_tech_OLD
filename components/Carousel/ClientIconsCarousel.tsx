import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  item: {
    icon: string;
  }[];
}

export default function ClientIconsCarousel({ item }: Props) {
  return (
    <Carousel
      emulateTouch
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      width={300}
      centerMode={true}
      centerSlidePercentage={100}
      onChange={(val) => console.log(val)}
    >
      {item?.map((slide, i) => {
        return (
          <div key={i}>
            <CarouselSlideItem icon={slide.icon} />
          </div>
        );
      })}
    </Carousel>
  );
}

function CarouselSlideItem({ icon }: { icon: string }) {
  return (
    <div className="mx-2 mb-4 flex flex-col items-center justify-center   text-primary">
      <picture>
        <img src={icon} alt="revix" className="max-w-10 h-12" />
      </picture>
    </div>
  );
}
