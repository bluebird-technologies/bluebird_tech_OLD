import React from 'react';
import { Header } from '../../components/Header';
import SwiggleSvg from 'public/case-studies/swiggle.svg';
import QuoteSvg from 'public/case-studies/quote.svg';
import Footer from '../../components/Footer';
import flashingLottieOrange from '../../public/lottie/flashingLottieOrange.json';
import Lottie from 'lottie-react';
import HeadingWithLine from '../../components/CaseStudies/HeadingWithLine';
import { DesignBuildSection } from '../../components/CaseStudies/DesignBuildSection';
import { ResultsSection } from '../../components/CaseStudies/ResultsSection';
import { IntroAndChallengeSection } from '../../components/CaseStudies/IntroAndChallengeSection';
import SeeBanner from '../../components/SeeBanner';
import { MobileHeader } from '../../components/MobileHeader';

function RaubexDetails() {
  const clientDetails = {
    clientName: 'raubex',
    coverImage: '',
    problem:
      'Originally Bluebird was contracted to maintain a 2nd generation system for Raubex Building Group. As this system started scaling it started to show some serious cracks.',
    solution:
      'After about a year and a half, we convinced Raubex to rebuild this from the ground up.',
    challenge: [
      {
        title: 'Concept Behind the Product',
        description:
          'The system needs to cater for the day-to-day operations at Raubex. This involves loading requisitions, creating orders and managing deliveries.',
      },
      {
        title: 'Gap in the Market',
        description:
          'No affordable systems exist that focus specifically on the “building world”. A new system could open up the possibilities of automating tasks that have been manual up to this point.',
      },
      {
        title: 'The Problem',
        description:
          'The previous system was very slow and sometimes even unusable. Some processes are manual and Excel-based.',
      },
    ],
    services: [
      'System Architecture',
      'Database Design',
      'Infrastructure Design',
      'Back-end Development',
      'Web Development',
    ],
    teamSize: 2,
    quoteSectionImage: '/../public/case-studies/raubex-clay.png',
    infoGathered: [
      'We needed to determine a breakdown of all the intended roles and permissions ',
      'Distill core concepts that would define the system',
      'Determine regular process flows to optimise for scaling',
      'Possible Architecture constraints(cloud hosting, email server hosting, internal firewall access, etc.).',
    ],
    infoGatheringMethod: [
      'Calls and meetings with stakeholders',
      ' Domain knowledge acquired by working on older system',
      'Meetings with internal IT department',
    ],
    designProcess: [
      'Created multiple iterations of entity relationship diagrams (ERD) to flesh out possible database structures.',
      'Created wireframes to visualise the website flow and function. ',
      'Determined which parts of the old system could be reused to not reinvent the wheel',
    ],
    buildingProcess: [
      'Domain driven design principles on the backend to clean up the structure and make it more manageable and scalable.',
      'Used our own internal boilerplate for the website structure(react, tailwind, d - man, etc.).',
      ' Opted for a code - first database option to facilitate easy changes and maintenance.',
      ' Hosted all infrastructure on Azure, with repo and CI / CD on Github.',
    ],
    results: [
      'Multiple roles and permission based system.',
      'Able to create, edit and delete Requisitions.',
      'Able to create, edit and delete orders',
      'Able to create deliveries and call - offs.',
      'Able to export orders and deliveries to external accounting system.',
      'Able to produce PDF quotes, orders and delivery notes.',
    ],
    resultsBackgroundImage: '/case-studies/raubexLandingPage.png',
    clientResults: 'Used as the main system actively at the company',
    solutionsImage: '/../public/case-studies/raubex-solutions.png',
  };

  return (
    <div>
      {/* mobile top section div */}
      <div className="relative block lg:hidden w-full h-full lg:overflow-hidden">
        <div className="relative w-full h-full bg-primary">
          <div className="w-full h-full">
            <MobileHeader />
          </div>
        </div>
      </div>

      {/* desktop header section */}
      <div className="relative overflow-hidden">
        <div className="hidden lg:flex lg:flex-col lg:relative w-full bg-cover bg-bottom items-center pb-[90px] z-10">
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
          className="lg:bg-bottom w-full -z-10 lg:-mt-52 flex flex-col items-center relative justify-center h-[500px] lg:h-[850px]"
          style={{
            backgroundImage: 'url(raubexBackground-2.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <h1 className="text-highlight font-bold uppercase text-5xl lg:text-8xl">
            {clientDetails.clientName}
          </h1>

          {/* Curve for next contrainer has to be defined inside this container to use the overflow hidden fix */}
          <div
            className="block lg:hidden absolute bg-secondary h-[100px] bottom-0"
            style={{
              left: '-10%',
              width: '120vw',
              borderTopLeftRadius: '50%',
              borderTopRightRadius: '50%',
            }}
          />
        </div>
      </div>

      {/* Intro Section */}

      <div className="w-full bg-cover h-full -mt-[250px] pt-12 flex flex-col items-center relative z-20">
        <div
          className="bg-secondary h-full -z-20"
          style={{
            position: 'absolute',
            left: '-41%',
            width: '180vw',
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
            left: '-41%',
            width: '180vw',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />

        <IntroAndChallengeSection
          clientName={clientDetails?.clientName}
          problem={clientDetails?.problem}
          solution={clientDetails?.solution}
          challenges={clientDetails?.challenge}
          services={clientDetails?.services}
        />
      </div>

      {/* Quote Section */}

      <div className="relative flex -mt-20 h-[1100px] w-full overflow-hidden">
        <div className="absolute bg-primary h-[1100px] w-full overflow-hidden -z-10" />
        <div className="flex w-full mt-60">
          <div className="w-1/2 pl-64">
            <QuoteSvg />
            <p className="text-white text-5xl pb-1">QUOTE/FEEDBACK</p>
            <p className="text-white text-5xl pb-16">FROM KEY PERSON</p>

            <div className="relative">
              <div
                className="absolute top-16 left-0"
                style={{
                  zIndex: '-1',
                }}
              >
                <SwiggleSvg width="1000" />
              </div>
              <p className="text-highlight italic text-3xl">- Name & Job Title</p>
            </div>
            <p className="text-highlight text-3xl pt-32">Involved Team</p>
          </div>
          <div className="relative w-1/2">
            <div
              className="absolute right-[250px] top-[200px] scaleLottiex4"
              style={{
                zIndex: '-2',
              }}
            >
              <Lottie animationData={flashingLottieOrange} loop={true} />
            </div>
            <picture className="absolute top-60">
              <source srcSet="/case-studies/raubex-clay.png" />
              <img
                src="/case-studies/raubex-clay.png"
                alt={clientDetails?.clientName + 'image'}
                className="w-full"
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
                    <li key={key} className="text-white text-2xl mb-6 leading-8 list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <HeadingWithLine text="How did we uncover this info?" swiggleOption="1" />
          </div>
        </div>

        <div className="flex flex-row mt-8 w-full items-center justify-center px-64 pb-32 pt-12">
          <div className="w-3/5 pr-12">
            <picture
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            >
              <source srcSet="/case-studies/raubex-solutions.png" />
              <img src="/case-studies/raubex-solutions.png" alt={'raubex-solution-image'} />
            </picture>
          </div>
          <div className="w-2/5">
            <ul>
              {clientDetails?.infoGatheringMethod.map((item, key) => (
                <li key={key} className="text-white list-disc mb-6 text-2xl leading-[3rem]">
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

      {/* Results Section */}
      <div>
        <ResultsSection
          clientName={clientDetails.clientName}
          resultsBackgroundImageString={clientDetails?.resultsBackgroundImage}
          clientResults={clientDetails?.clientResults}
          results={clientDetails?.results}
        />
      </div>

      {/* Navigation back arrow row Section */}

      <div className="bg-primary w-full h-[200px] flex justify-center items-center">
        <SeeBanner label="Back to case studies" url="/case-studies" invert />
      </div>

      {/* <div
        onClick={() => router.push('/case-studies')}
        className="flex flex-row bg-primary items-center justify-center py-12 cursor-pointer"
      >
        <ArrowLeftSvg />
        <span className="uppercase text-white font-bold text-3xl ml-8">Back to case studies</span>
      </div> */}

      {/* Footer section */}

      <Footer />
    </div>
  );
}

export default RaubexDetails;
