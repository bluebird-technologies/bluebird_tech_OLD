import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import { DesignBuildSection } from '../../components/CaseStudies/DesignBuildSection';
import { ResultsSection } from '../../components/CaseStudies/ResultsSection';
import { IntroAndChallengeSection } from '../../components/CaseStudies/IntroAndChallengeSection';
import { MobileHeader } from '../../components/MobileHeader';
import QuoteSection from '../../components/CaseStudies/QuoteSection';
import OurApproachSection from '../../components/CaseStudies/OurApproachSection';
import SeeBanner from '../../components/SeeBanner';

function RevioDetails() {
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

    // QUOTE SECTION DATA
    quoteSectionImage: '/../public/case-studies/clay.png',
    quoteSectionQuoteLine1: 'QUOTE/FEEDBACK',
    quoteSectionQuoteLine2: 'FROM KEY PERSON',
    quoteSectionNameAndJob: 'Name & Job Title',
    quoteSectionTeamInvolved: 'Involved Team',
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
            backgroundImage: 'url(revioBackground-2.png)',
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
      <div className="relative w-full h-full hidden lg:flex flex-col bg-cover -mt-32 lg:-mt-[150px] items-center z-20 lg:overflow-hidden">
        <div
          className="hidden lg:block bg-secondary h-full -z-20"
          style={{
            position: 'absolute',
            left: '-41%',
            width: '180vw',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
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

      {/* Intro section mobile */}
      <div className="relative w-full h-full flex flex-col lg:hidden bg-secondary z-20">
        <div className="flex w-full justify-center items-center text-center absolute -top-[70px]">
          <h1 className="text-white uppercase font-bold text-3xl">{clientDetails?.clientName}</h1>
        </div>

        <IntroAndChallengeSection
          clientName={clientDetails?.clientName}
          problem={clientDetails?.problem}
          solution={clientDetails?.solution}
          challenges={clientDetails?.challenge}
          services={clientDetails?.services}
        />
      </div>

      {/* Quote Section */}
      <div className="flex relative bg-primary xl:h-[1100px] w-full overflow-hidden">
        <div
          className="absolute hidden xl:block bg-secondary h-[150px] z-20"
          style={{
            left: '-10%',
            width: '120vw',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
        <QuoteSection
          clientName={clientDetails.clientName}
          quoteLine1={clientDetails.quoteSectionQuoteLine1}
          quoteLine2={clientDetails.quoteSectionQuoteLine2}
          nameAndJob={clientDetails.quoteSectionNameAndJob}
          involvedTeam={clientDetails.quoteSectionTeamInvolved}
        />
      </div>

      {/* Our Approach Section */}
      <div className="flex w-full bg-secondary">
        <OurApproachSection
          clientName={clientDetails.clientName}
          infoGathered={clientDetails.infoGathered}
          infoGatheringMethod={clientDetails.infoGatheringMethod}
        />
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

      {/* Footer section */}

      <Footer />
    </div>
  );
}

export default RevioDetails;
