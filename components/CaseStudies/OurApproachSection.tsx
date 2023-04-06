import React from 'react';
import HeadingWithLine from '../../components/CaseStudies/HeadingWithLine';
import { CircleImageSection } from '../../components/CaseStudies/CircleImageSection';
import listDotIcon from '../../components/CaseStudies/icons/list-dot';
import SwiggleSvg from 'public/case-studies/swiggle.svg';
import Circle from 'public/case-studies/circular-arrow.svg';
import CircleBig from 'public/case-studies/circular-arrow-big.svg';

interface OurApproachSectionProps {
  clientName: string;
  infoGathered: string[];
  infoGatheringMethod: string[];
}

function OurApproachSection({
  clientName,
  infoGathered,
  infoGatheringMethod,
}: OurApproachSectionProps) {
  const listClass = 'list-disc list-inside lg:list-outside space-y-1';
  const listClassRevio = 'list-disc list-inside lg:list-outside space-y-1 lg:space-y-8';

  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-white text-center uppercase font-bold text-2xl lg:text-5xl mt-12">
        Our Approach
      </h1>

      {/* First section with bullet points */}
      <div className="mt-12">
        <div className="flex w-full justify-center lg:px-32">
          <h2 className="text-highlight font-medium text-2xl lg:text-3xl text-center break-keep flex-nowrap lg:pr-16">
            What did we need to know?
          </h2>
          <div className="hidden lg:block flex-1">
            <SwiggleSvg />
          </div>
        </div>
        <div className="flex justify-center w-full mt-12 lg:px-0 px-6">
          <div>
            <ul className="list-disc list-inside">
              {infoGathered.map((item, i) => {
                return (
                  <li
                    key={i}
                    className="text-white font-normal text-sm lg:text-2xl lg:text-start text-center"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Second section with bullet points and also image */}
      <div className="mt-12">
        <div className="flex w-full justify-center lg:px-32">
          <h2 className="text-highlight font-medium text-2xl lg:text-3xl text-center break-keep flex-nowrap lg:pr-16">
            How did we uncover this info?
          </h2>
          <div className="hidden lg:block flex-1">
            <SwiggleSvg />
          </div>
        </div>

        <div className="w-full flex flex-col-reverse lg:flex-row mt-12 lg:px-32">
          <div className="w-full lg:w-2/3">
            <div className="lg:hidden block w-full px-8 sm:px-32 mt-6">
              <Circle />
            </div>
            <div className="hidden lg:block w-full pr-8">
              <CircleBig />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <ul className={clientName === 'revio' ? listClassRevio : listClass}>
              {infoGatheringMethod.map((item, i) => {
                return (
                  <li
                    key={i}
                    className="text-white font-normal text-sm lg:text-2xl lg:text-start text-center"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Second section with bullet points and image for mobile */}

      {/* <div className="lg:hidden border-2 border-green-400 mt-12">
        <div className="flex w-full justify-center lg:px-64">
          <h2 className="text-highlight font-medium text-2xl lg:text-3xl text-center break-keep flex-nowrap lg:pr-16">
            How did we uncover this info?
          </h2>
        </div>
        <div className="w-full flex flex-col mt-12 lg:px-64">
          <div className="h-[100px] border border-red-700"></div>
          <div className="">
            <ul className="list-disc list-inside">
              {infoGatheringMethod.map((item, i) => {
                return (
                  <li
                    key={i}
                    className="text-white font-normal text-sm lg:text-2xl lg:text-start text-center"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default OurApproachSection;

{
  /* <div className="flex flex-col overflow-hidden lg:overflow-visible">
      <h1 className="text-white font-bold text-xl lg:text-4xl text-center justify-center mt-6 lg:mt-20">
        OUR APPROACH
      </h1>

      <div className="flex justify-center items-center mt-6 lg:mt-12">
        <div className="flex flex-col lg:justify-start justify-center">
          <HeadingWithLine text="What did we need to know?" swiggleOption="1" />

          <div className="flex flex-row w-full justify-center items-center px-8 mt-6 lg:mt-12">
            <div className="flex flex-col max-w-5xl">
              <ul className="space-y-1">
                {infoGathered.map((item, key) => (
                  <li
                    key={key}
                    className="text-white text-sm lg:text-2xl leading-6 lg:leading-8 text-center lg:text-start lg:list-disc"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <HeadingWithLine
            text="How did we uncover this info?"
            swiggleOption="1"
            className="lg:mt-12"
          />
          <div>
            <ul>
              {infoGatheringMethod.map((item, key) => (
                <li key={key} className="text-white mb-6 text-2xl leading-8 lg:list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-8 w-full items-center justify-center px-64 pb-32 pt-12">
        <div className="w-full lg:w-3/5">
          <CircleImageSection />
        </div>
        <div className="hidden lg:block lg:w-2/5">
          <ul>
            {infoGatheringMethod.map((item, key) => (
              <li key={key} className="text-white list-disc  mb-6 text-2xl leading-8">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div> */
}
