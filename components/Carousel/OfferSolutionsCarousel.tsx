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
    <Carousel
      emulateTouch
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      // centerMode={true}
      // centerSlidePercentage={50}
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
  );
}

function SolutionCarouselIconContainer({ children }: { children: React.ReactNode }) {
  return <div className="w-16 h-16">{children}</div>;
}

function OfferSolutionsCarouselSlideItem({ icon, label }: SolutionItem) {
  return (
    <div className="flex flex-col space-y-2 text-white">
      <div className="flex justify-center">
        <SolutionCarouselIconContainer>{icon}</SolutionCarouselIconContainer>
      </div>
      <div>{label}</div>
    </div>
  );
}
