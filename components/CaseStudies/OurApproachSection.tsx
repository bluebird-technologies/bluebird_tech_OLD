import React from 'react';
import HeadingWithLine from '../../components/CaseStudies/HeadingWithLine';

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
  const listClass = 'list-disc list-inside lg:list-outside space-y-1 lg:px-0 px-6';
  const listClassRevio = 'list-disc list-inside lg:list-outside space-y-1 lg:space-y-8';

  const raubexImg = '/case-studies/raubex-solutions.png';
  const revioImg = '/case-studies/revio-circle/revio-circle.svg';
  const auroraImg = '/case-studies/aurora-solutions.png';

  const outerClass =
    clientName !== 'aurora'
      ? 'w-full flex flex-col-reverse lg:flex-row mt-12 lg:px-32 lg:mb-20'
      : 'w-full flex flex-col-reverse lg:flex-row mt-12 lg:pr-32 lg:mb-20';

  const outerClassMobile =
    clientName !== 'aurora'
      ? 'lg:hidden block w-full px-8 sm:px-32 mt-6 mb-6 lg:mb-0 relative'
      : 'lg:hidden block w-full pr-8 sm:pr-32 mt-6 mb-6 lg:mb-0 relative';

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

        <div className={outerClass}>
          {/* mobile view */}
          <div className="w-full lg:w-2/3">
            <div className={outerClassMobile}>
              {clientName === 'revio' && (
                <picture className="h-full">
                  <source srcSet={revioImg} />
                  <img src={revioImg} alt={clientName + '-approach-image'} className="w-full" />
                </picture>
              )}
              {clientName === 'raubex' && (
                <picture className="h-full">
                  <source srcSet={raubexImg} />
                  <img src={raubexImg} alt={clientName + '-approach-image'} className="w-full" />
                </picture>
              )}
              {clientName === 'aurora' && (
                <div className="h-full scale-125 origin-left">
                  <picture className="h-full">
                    <source srcSet={auroraImg} />
                    <img src={auroraImg} alt={clientName + '-approach-image'} className="w-full" />
                  </picture>
                </div>
              )}
            </div>

            {/* desktop view */}
            <div className="hidden lg:block w-full pr-8">
              {clientName === 'revio' && (
                <div className="md:mr-10 xl:mr-16">
                  <picture className="h-full">
                    <source srcSet={revioImg} />
                    <img src={revioImg} alt={clientName + '-approach-image'} className="w-full" />
                  </picture>
                </div>
              )}
              {clientName === 'raubex' && (
                <picture className="h-full">
                  <source srcSet={raubexImg} />
                  <img src={raubexImg} alt={clientName + '-approach-image'} className="w-full" />
                </picture>
              )}
              {clientName === 'aurora' && (
                <picture className="h-full">
                  <source srcSet={auroraImg} />
                  <img src={auroraImg} alt={clientName + '-approach-image'} className="w-full" />
                </picture>
              )}
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
