import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function SolutionCarousel() {
  const slides = [
    {
      title: 'Boutique',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Lean',
      content:
        ' Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    },
    {
      title: 'Personal',
      content:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
  ];

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
      {slides.map((slide, i) => {
        return (
          <div key={i}>
            <CarouselSlideItem title={slide?.title} content={slide.content} />
          </div>
        );
      })}
    </Carousel>
  );
}

function CarouselSlideItem({
  title,
  icon,
  content,
}: {
  title?: string;
  icon?: React.ReactNode;
  content: string;
}) {
  return (
    <div className="flex h-96  flex-col items-center  bg-grey  py-4 text-primary">
      <div className=" flex-wrap items-center justify-center text-2xl font-extrabold uppercase leading-[64px]  text-orange">
        <h1 className="text-center">{title}</h1>
      </div>
      <div className="mb-4 w-72 items-center justify-center md:w-auto">
        <h1 className="text-center">{content}</h1>
      </div>
      <div>{icon}</div>
    </div>
  );
}
