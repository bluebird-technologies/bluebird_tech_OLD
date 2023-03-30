import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export interface SolutionItem {
  icon: React.ReactNode;
  label: string;
}

interface CarouselProps {
  slides: SolutionItem[];
  onChange: (val: string) => void;
}

export default function OfferSolutionsCarousel({ slides, onChange }: CarouselProps) {
  return (
    <div className="max-w-[100vw]">
      <Carousel
        emulateTouch
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        // centerMode={true}
        // centerSlidePercentage={80}
        // width={500}
        onChange={(val) => onChange(slides[val].label)}
      >
        {slides.map((slide, i) => {
          return (
            <div key={i}>
              <OfferSolutionsCarouselSlideItem icon={slide.icon} label={slide.label} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

function SolutionCarouselIconContainer({ children }: { children: React.ReactNode }) {
  return <div className="w-24 h-24 text-highlight">{children}</div>;
}

function OfferSolutionsCarouselSlideItem({ icon, label }: SolutionItem) {
  return (
    <div className="flex flex-col space-y-2 text-white cursor-pointer">
      <div className="flex justify-center">
        <SolutionCarouselIconContainer>{icon}</SolutionCarouselIconContainer>
      </div>
      <div className="flex justify-center  text-center">
        <h1 className="text-2xl font-semibold max-w-[200px]">{label}</h1>
      </div>
    </div>
  );
}
