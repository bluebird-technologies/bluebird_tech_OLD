import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  item: {
    label?: string;
    icon?: React.ReactNode;
    content?: string;
  }[];
}

export default function SolutionCarousel({ item }: Props) {
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
    >
      {item?.map((slide, i) => {
        return (
          <div key={i}>
            <CarouselSlideItem label={slide?.label} content={slide?.content} icon={slide?.icon} />
          </div>
        );
      })}
    </Carousel>
  );
}

function CarouselSlideItem({
  label,
  icon,
  content,
}: {
  label?: string;
  icon?: React.ReactNode;
  content?: string;
}) {
  return (
    <div className="flex h-96  flex-col items-center  bg-grey  py-4 text-primary">
      <div className=" flex-wrap items-center justify-center text-2xl font-extrabold uppercase leading-[64px]  text-orange">
        <h1 className="text-center">{label}</h1>
      </div>
      <div className="mb-4 w-72 items-center justify-center md:w-auto">
        <h1 className="text-center">{content}</h1>
      </div>
      <div>
        {icon && (
          <picture>
            <img src={`${icon}`} alt={`${icon}`} />
          </picture>
        )}
      </div>
    </div>
  );
}
