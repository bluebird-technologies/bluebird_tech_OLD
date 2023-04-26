import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { latestWorkSlide } from '../slideObjects';

interface Props {
  backgroundImage: string;
  label: string;
  link: string;
  icon: string;
}

export default function LatestWorkCarousel() {
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
    >
      {latestWorkSlide?.map((slide, i) => {
        return (
          <div key={i}>
            <CarouselSlideItem
              backgroundImage={slide.backgroundImage}
              label={slide.label}
              link={slide.link}
              icon={slide.icon}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

function CarouselSlideItem({ backgroundImage, label, link, icon }: Props) {
  const router = useRouter();
  return (
    <div className="mt-[80px] flex ">
      <div
        className="bg-contian flex h-80 w-80 flex-1 cursor-pointer items-end bg-bottom"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        onClick={() => router.push(`${link}`)}
      >
        <div className="mb-[13px] flex h-[59px] items-center rounded-full bg-secondary">
          <div className="relative h-full w-[59px] rounded-full bg-white">
            <Image src={icon} alt="revio icon" fill />
          </div>
          <span className="px-4 text-[35px] font-medium leading-[43px] text-white">{label}</span>
        </div>
      </div>
    </div>
  );
}
