import React from 'react';
import VerticalScribbles from './icons/VerticalScribbles';
import SwiggleSvg from '/public/case-studies/swiggle.svg';
import Lottie from 'lottie-react';
import flashingLottieWhite from '../../public/lottie/30286239-fb21-47f3-ab15-7495d639d72c.json';

interface IntroAndChallengeSectionProps {
  clientName: string;
  problem: string;
  solution: string;
  challenges: { title: string; description: string }[];
  services: string[];
}

export function IntroAndChallengeSection({
  clientName,
  problem,
  solution,
  challenges,
  services,
}: IntroAndChallengeSectionProps) {
  return (
    <>
      <div className="flex flex-col w-full max-w-6xl items-center justify-center space-y-12">
        <h1 className="text-white font-bold text-5xl capitalize mt-16">{clientName}</h1>
        <p className="text-white font-normal text-2xl text-center">{problem}</p>
        <p className="text-highlight max-w-4xl font-normal text-2xl text-center">{solution}</p>
        <>{VerticalScribbles}</>
      </div>
      <div className="flex w-full max-w-7xl justify-center px-4 pt-24">
        <p className="text-highlight font-normal text-4xl text-center whitespace-nowrap mr-12">
          The Challenge
        </p>
        <SwiggleSvg />
      </div>

      <div className="text-xl max-w-6xl mt-20">
        {challenges.map((item, key) => (
          <div className="mb-16 flex flex-row items-start" key={key}>
            <Lottie
              animationData={flashingLottieWhite}
              className={' flex-none items-start w-16 '}
              loop={true}
            />
            <div>
              <h1 className="text-white text-2xl font-normal ">{item.title}</h1>
              <p className="text-white text-xl font-normal text-justify">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="flex flex-row w-full justify-between">
          {services.map((item, key) => (
            <a key={key} className="text-white border text-center rounded-full py-2 mr-2 px-4">
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
