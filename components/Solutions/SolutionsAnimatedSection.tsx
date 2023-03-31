import React from 'react';
import Lottie from 'lottie-react';
import { Button } from '../Button';
import Link from 'next/link';

interface SolutionsAnimatedSectionProps {
  secondLayerTitle: string;
  secondLayerLottie: unknown;
}

function SolutionsAnimatedSection({
  secondLayerTitle,
  secondLayerLottie,
}: SolutionsAnimatedSectionProps) {
  return (
    <div className="flex items-center justify-center md:pb-0 pb-16">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center text-center md:w-full w-[350px] md:pt-0 pt-16">
          <h1 className="text-white text-2xl md:text-5xl font-extrabold uppercase">
            {secondLayerTitle}
          </h1>
        </div>

        <Lottie
          animationData={secondLayerLottie}
          style={{
            marginTop: 30,
            marginBottom: 30,
            height: '450px',
          }}
          loop={true}
        />
        <Button className="bg-[#e97724] inline-flex rounded-full whitespace-nowrap hover:bg-gradient-to-t from-[#f6c4a1] to-[#e97724] transition-all hover:duration-1000 ease-in-out">
          <Link href={'/calculator'}>
            <span className="uppercase text-white text-[16px] font-semibold">Get Started</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default SolutionsAnimatedSection;
