import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface SolutionItem {
  icon: React.ReactNode;
  label: string;
}

interface CarouselProps {
  slides: SolutionItem[];
  onChange: (val: string) => void;
}

export default function MobileCarousel({ slides, onChange }: CarouselProps) {
  return (
    <Carousel
      emulateTouch
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      centerMode={true}
      centerSlidePercentage={50}
      onChange={(val) => onChange(slides[val].label)}
    >
      {slides.map((slide, i) => {
        return (
          <div key={i}>
            <CarouselSlideItem icon={slide.icon} label={slide.label} />
          </div>
        );
      })}
    </Carousel>
  );
}

function SolutionIconContainer({ children }: { children: React.ReactNode }) {
  return <div className="w-16 h-16">{children}</div>;
}

function CarouselSlideItem({ icon, label }: SolutionItem) {
  return (
    <div className="flex flex-col space-y-2 text-white">
      <div className="flex justify-center">
        <SolutionIconContainer>{icon}</SolutionIconContainer>
      </div>
      <div>{label}</div>
    </div>
  );
}
