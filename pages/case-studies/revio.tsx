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
import { CircleImageSection } from '../../components/CaseStudies/CircleImageSection';
import { DesignBuildSection } from '../../components/CaseStudies/DesignBuildSection';
import { ResultsSection } from '../../components/CaseStudies/ResultsSection';
import { IntroAndChallengeSection } from '../../components/CaseStudies/IntroAndChallengeSection';

function RevioDetails() {
  const router = useRouter();

  const clientDetails = {
    clientName: 'revio',
    coverImage: '',
    problem:
      'We joined Revio shortly after their inception to add debit order collections as one of the tools on their system. Integrating with local banking systems offered some very interesting and unique challenges',
    solution:
      'Here is how we created a system that abstracts the bank’s payment and collection flows into a more modern and simple to use API.',
    challenge: [
      {
        title: 'Concept Behind the Product',
        description:
          'Direct debits (or debit orders) are generally a foreign concept for most international clients, but for medium to large companies in South Africa this is the most effective tool for collecting insurance premiums, rent, car payments, etc. on a large scale.',
      },
      {
        title: 'Gap in the Market',
        description:
          'Give smaller businesses the opportunity to affordably play within the debit order collection space. Handle large amounts of collections for larger businesses. Abstract banking processes for clients. Transparency and early warning on negative collection results.',
      },
      {
        title: 'The Problem',
        description:
          'Easier way for clients to utilise the full suite of collection tools provided by the banks. Mandate management (Create, Amendments and Authentication). Automatic recon and settlement from intermediary accounts.',
      },
    ],
    services: [
      'System Architecture',
      'Database Design',
      'Infrastructure Design',
      'Back-end Development',
    ],
    teamSize: 3,
    quoteSectionImage: '/../public/case-studies/clay.png',
    infoGathered: [
      'What were the banks’ limitations? Which technologies do they use?',
      'What was our average amount of projected collections? Per day? Per month?',
      'Are we able to find a better way to handle the banks’ file-based systems?',
      'How can we be better than the competitions’ systems?',
      'How do we simplify some of the concepts?',
      'How do we secure the whole process?',
      'How do we test the system?',
    ],
    infoGatheringMethod: [
      'Going through bank integration specification documents',
      'Speaking to stakeholders',
      'Researching the tech available on cloud platforms such as AWS',
      'Looking at best practices for enterprise systems',
    ],
    designProcess: [
      'Talking to stakeholders to ask about possible pitfalls and known hiccups',
      'Created multiple iterations of entity relationship diagrams (ERD) to flesh out possible database structures.',
      'Drafted many flow diagrams to determine the lifecycle of a collection or mandate.',
      'Discussed which technologies to use to solve problems created by older banking technologies.',
      'Discuss ways to test system without actually connecting to the bank',
    ],
    buildingProcess: [
      'Talking to stakeholders to ask about possible pitfalls and known hiccups.',
      'Created multiple iterations of entity relationship diagrams (ERD) to flesh out possible database structures.',
      'Drafted many flow diagrams to determine the lifecycle of a collection or mandate.',
      'Discussed which technologies to use to solve problems created by older banking technologies.',
      'Discuss ways to test system without actually connecting to the bank',
    ],
    results: [
      'Mandate management made easy. Intuitive creation, authentication and amendment calls.',
      'Able to create collections from existing mandates to save time.',
      'Able to handle the processing of collections end-to-end.',
      'Comprehensive testing and monitoring',
    ],
    resultsBackgroundImage: '/case-studies/revioLandingPage.png',
    clientResults: '50 Contracted Clients at Present',
    solutionsImage: '',
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

      <div className="relative flex -mt-20 h-[1100px] w-full overflow-hidden">
        <div className="absolute bg-primary h-[1100px] w-full overflow-hidden -z-10" />
        <div className="flex w-full mt-60">
          <div className="w-1/3 pl-64">
            <QuoteSvg />
            <p className="text-white text-[35px] pb-8">QUOTE/FEEDBACK</p>
            <p className="text-white text-[35px] leading-10 pb-16">FROM KEY PERSON</p>

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
            <picture className="">
              <source srcSet="/case-studies/clay.png" />
              <img
                src="/case-studies/clay.png"
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

        <div className="flex flex-row mt-8 w-full items-center justify-center px-64 pb-32 pt-12">
          <div className="w-3/5">
            <CircleImageSection />
          </div>
          <div className="w-2/5">
            <ul>
              {clientDetails?.infoGatheringMethod.map((item, key) => (
                <li key={key} className="text-white list-disc  mb-6 text-2xl leading-8">
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

export default RevioDetails;
