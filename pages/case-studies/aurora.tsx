import React from 'react';
import { Header } from '../../components/Header';
import SwiggleSvg from 'public/case-studies/swiggle.svg';
import QuoteSvg from 'public/case-studies/quote.svg';
import ArrowLeftSvg from 'public/arrow-left.svg';
import Footer from '../../components/Footer';
import flashingLottieOrange from '../../public/lottie/flashingLottieOrange.json';
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import HeadingWithLine from '../../components/CaseStudies/HeadingWithLine';
import { DesignBuildSection } from '../../components/CaseStudies/DesignBuildSection';
import { ResultsSection } from '../../components/CaseStudies/ResultsSection';
import { IntroAndChallengeSection } from '../../components/CaseStudies/IntroAndChallengeSection';

function AuroraDetails() {
  const router = useRouter();

  const clientDetails = {
    clientName: 'aurora',
    coverImage: 'auroraBackground-2.png',
    problem:
      'Aurora was initially built by another development company. They lacked adaptability which resulted in an unmaintainable code base. We were initially tasked only to finish the original MVP, but it soon became clear that we had to re-write everything.',
    solution: 'The original project ran for more than one year, and we rebuilt it in three months.',
    challenge: [
      {
        title: 'Concept Behind the Product',
        description:
          'The system needs to cater for the day-to-day operations at Raubex. This involves loading requisitions, creating orders and managing deliveries.',
      },
      {
        title: 'Gap in the Market',
        description:
          'Their goal at this time was to become the tool for carbon footprint awareness and offsetting, ultimately creating a more sustainable world.',
      },
      {
        title: 'The Problem',
        description:
          'TGeneral lack of awareness and effort on many individuals when it comes to living in and creating a more sustainable world.',
      },
    ],
    services: [
      'Web App Architecture and Development',
      'API Architecture and Development',
      'Cloud Hosting',
      'China Deployment',
    ],
    teamSize: 4,
    quoteSectionImage: '/../public/case-studies/aurora-clay.png',
    infoGathered: [
      'The most complex part of the initial product was how the App’s questions translated into carbon emissions. The project we took over had an obscure implementation, constructed and implemented by certain data scientists with whom we had no contact with.',
      'We have never launched a product in China before.We had to learn the requirements around hosting as well as determine which dependencies would need to be replaced due to their firewall.',
    ],
    infoGatheringMethod: [
      'By digging into the unstructured and undocumented calculation functions, we were able to determine the original intention and design a calculation engine which was both easy to work with as well as scalable',
      'Lots of research in China hosting as well as WeChat business application process and documentation.',
    ],
    designProcess: [
      'Determine architecture for dynamic quiz and dynamic calculation engine',
      'Work through several entity relation diagrams for the new database.',
      'Ensure configurability using Retool.',
    ],
    buildingProcess: [
      'Implement code-first database solution and .NET API.',
      'Build Authentication, dynamic quiz engine and dynamic calculation engine.',
      'Build React web application in parallel with API features.',
      'Setup CI / CD for development and production environments.',
    ],
    results: [
      'A very user-friendly carbon footprint calculator and awareness tool, built to be highly configurable and scalable.',
      'The user would enter on the quiz and answer lifestyle questions around food consumption, travel usage and other sustainability focused areas.',
      'The app would suggest tips on what they can do to offset their emissions based on their quiz input.',
    ],
    solutionsImage: '/../public/case-studies/aurora-solutions.png',
    resultsBackgroundImage: '/case-studies/auroraLandingPage.png',
    clientResults: 'Company and product bought by the largest insurance company in Africa',
  };

  return (
    <div className="relative flex flex-1 flex-col">
      <div className="relative w-full bg-cover bg-bottom flex flex-col items-center pb-[90px] z-10">
        <div
          className="bg-primary h-full"
          style={{
            position: 'absolute',
            left: '-16%',
            width: '130vw',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
        <Header />
      </div>
      <div
        className="w-full bg-cover bg-bottom -z-10 -mt-52 flex flex-col items-center relative justify-center "
        style={{
          backgroundImage: `url(revioBackground-2.png)`,
          backgroundPosition: 'cover',
          height: '850px',
        }}
      >
        <h1 className="text-highlight font-bold uppercase text-8xl">{clientDetails.clientName}</h1>
      </div>
      <div className="w-full bg-cover h-full -mt-[200px] pt-12 px-12 flex flex-col items-center relative z-20">
        <div
          className="bg-secondary h-full -z-20"
          style={{
            position: 'absolute',
            left: '-26%',
            width: '150vw',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
          }}
        />
        <div
          className="bg-secondary -z-20"
          style={{
            position: 'absolute',
            height: '50%',
            top: '60%',
            left: '-26%',
            width: '150vw',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />

        {/* Intro Section */}

        <IntroAndChallengeSection
          clientName={clientDetails?.clientName}
          problem={clientDetails?.problem}
          solution={clientDetails?.solution}
          challenges={clientDetails?.challenge}
          services={clientDetails?.services}
        />
      </div>

      {/* Quote Section */}

      <div className="relative flex -mt-20 h-[1300px] w-full overflow-hidden">
        <div className="absolute bg-primary h-[1300px] w-full overflow-hidden -z-10" />
        <div className="flex w-full mt-60">
          <div className="w-1/3 pl-64">
            <QuoteSvg />
            <p className="text-white text-2xl pb-1">QUOTE/FEEDBACK</p>
            <p className="text-white text-2xl pb-16">FROM KEY PERSON</p>

            <div className="relative">
              <div
                className="absolute top-16 left-0"
                style={{
                  zIndex: '-1',
                }}
              >
                <SwiggleSvg width="1000" />
              </div>
              <p className="text-highlight italic">- Name & Job Title</p>
            </div>
            <p className="text-highlight text-2xl pt-32">Involved Team</p>
          </div>
          <div className="relative w-2/3">
            <div
              className="absolute right-[250px] top-[200px] scaleLottiex4"
              style={{
                zIndex: '-2',
              }}
            >
              <Lottie animationData={flashingLottieOrange} loop={true} />
            </div>
            <picture className="absolute right-0 bottom-0">
              <source srcSet="/case-studies/aurora-clay.png" />
              <img
                src="/case-studies/aurora-clay.png"
                alt={clientDetails?.clientName + 'image'}
                className=""
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}

      <div className="bg-secondary flex flex-1 flex-col w-full">
        <h1 className="text-white font-bold text-4xl text-center justify-center mt-20">
          OUR APPROACH
        </h1>

        <div className="flex justify-center items-center mt-12">
          <div className="flex flex-col">
            <HeadingWithLine text="What did we need to know?" swiggleOption="1" />

            <div className="flex flex-row w-full justify-center items-center mt-12">
              <div className="flex flex-col max-w-5xl justify-center">
                <ul>
                  {clientDetails?.infoGathered.map((item, key) => (
                    <li key={key} className="text-white text-2xl leading-[3rem] list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <HeadingWithLine
              text="How did we uncover this info?"
              swiggleOption="1"
              className="mt-12"
            />
          </div>
        </div>

        <div className="flex flex-row mt-8 w-full items-center justify-center pb-32 pt-12">
          <div className="w-3/5 pr-12">
            <picture
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            >
              <source srcSet="/case-studies/aurora-solutions.png" />
              <img src="/case-studies/aurora-solutions.png" alt={'raubex-solution-image'} />
            </picture>
          </div>
          <div className="w-2/5 pr-64">
            <ul>
              {clientDetails?.infoGatheringMethod.map((item, key) => (
                <li key={key} className="text-white list-disc mb-4 text-2xl leading-[3rem]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Designing/ Building process Section */}

      <div className="w-full">
        <DesignBuildSection
          designProcess={clientDetails?.designProcess}
          buildingProcess={clientDetails?.buildingProcess}
        />
      </div>

      {/* Restults Section */}
      <div>
        <ResultsSection
          resultsBackgroundImageString={clientDetails?.resultsBackgroundImage}
          clientResults={clientDetails?.clientResults}
          results={clientDetails?.results}
        />
      </div>

      {/* Navigation back arrow row Section */}

      <div
        onClick={() => router.push('/case-studies')}
        className="flex flex-row bg-primary items-center justify-center py-12 cursor-pointer"
      >
        <ArrowLeftSvg />
        <span className="uppercase text-white font-bold text-3xl ml-8">Back to case studies</span>
      </div>

      {/* Footer section */}

      <Footer />
    </div>
  );
}

export default AuroraDetails;
