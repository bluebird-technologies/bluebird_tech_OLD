import React from 'react';
import HeadingWithLine from '../../components/CaseStudies/HeadingWithLine';
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
        <HeadingWithLine text="What did we need to know?" swiggleOption="1" />

        <div className="flex justify-center w-full mt-12 lg:px-0 px-6">
          <div className="md:max-w-[80%] xl:max-w-[60%]">
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
        <HeadingWithLine text="How did we uncover this info?" swiggleOption="1" />

        <div className="w-full flex flex-col-reverse lg:flex-row mt-12 lg:px-32 lg:mb-20">
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
    </div>
  );
}

export default OurApproachSection;
