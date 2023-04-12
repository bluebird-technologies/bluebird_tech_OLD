import React from 'react';
import VerticalScribbles from './icons/VerticalScribbles';
import SwiggleSvg from '/public/case-studies/swiggle.svg';
import SwiggleChallenge from '/public/case-studies/swiggle-challenge.svg';
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
      <div className="relative flex flex-col w-full max-w-6xl items-center justify-center lg:bg-transparent">
        <h1 className="hidden lg:block text-white uppercase font-bold text-5xl mt-16">
          {clientName}
        </h1>
        <div className="flex flex-col items-center px-8 lg:px-0">
          <p className="text-white font-normal text-sm lg:text-2xl text-center mt-0 lg:mt-16">
            {problem}
          </p>
          <p className="text-highlight max-w-4xl font-normal text-sm lg:text-2xl text-center mt-6 lg:mt-16">
            {solution}
          </p>
        </div>

        <div className="hidden lg:block">{VerticalScribbles}</div>
      </div>
      <div className="hidden lg:flex w-full max-w-7xl justify-center px-4 lg:pt-24">
        <p className="text-highlight font-normal text-4xl text-center whitespace-nowrap mr-12">
          The Challenge
        </p>
        <div className="hidden lg:block">
          <SwiggleSvg />
        </div>
      </div>

      <div className="lg:hidden flex flex-col w-full justify-center items-center mt-8">
        <div className="w-2/5 text-white">
          <SwiggleChallenge />
        </div>
        <div className="flex w-full justify-center mt-8">
          <p className="text-highlight font-normal text-3xl text-center">The Challenge</p>
        </div>
      </div>

      <div className="text-xl max-w-6xl mt-20">
        {challenges.map((item, key) => (
          <div key={key} className="lg:pr-6">
            <div className="hidden lg:flex flex-row items-start mb-16">
              <Lottie
                animationData={flashingLottieWhite}
                className="flex-none items-start w-16"
                loop={true}
              />
              <div>
                <h1 className="text-white text-2xl font-normal">{item.title}</h1>
                <p className="text-white text-xl font-normal text-justify">{item.description}</p>
              </div>
            </div>
            <div className="lg:hidden flex flex-row items-start px-12 mb-12">
              <div>
                <h1 className="text-white text-xl font-semibold text-center">{item.title}</h1>
                <p className="text-white text-sm font-normal mt-6 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-row flex-wrap w-full justify-center lg:justify-between mb-6 lg:px-2 xl:px-0">
          {services.map((item, key) => (
            <a
              key={key}
              className="text-white border text-center rounded-full py-2 mr-2 px-4 my-3 mx-4 lg:mx-0"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
