import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { clientIconsSlide } from '../slideObjects';

interface Props {
  icon: string;
}

export default function ClientIconsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleIncrement = () => {
    if (currentSlide + 2 < clientIconsSlide.length) {
      setCurrentSlide((prev) => prev + 2);
    } else {
      setCurrentSlide(0);
    }
  };

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
      onChange={() => handleIncrement()}
    >
      {clientIconsSlide?.map(() => {
        return (
          <div key={currentSlide}>
            <div>
              <CarouselSlideItem icon={clientIconsSlide[currentSlide].icon} />
            </div>
            {currentSlide + 1 < clientIconsSlide.length && (
              <div key={currentSlide + 1}>
                <CarouselSlideItem icon={clientIconsSlide[currentSlide + 1].icon} />
              </div>
            )}
          </div>
        );
      })}
    </Carousel>
  );
}

function CarouselSlideItem({ icon }: Props) {
  const altText = icon.split('/')[2].split('.')[0];
  return (
    <div className="mx-2 mb-4 flex flex-col items-center justify-center   text-primary">
      <picture>
        <img src={icon} alt={altText} className="max-w-10 h-12" />
      </picture>
    </div>
  );
}
