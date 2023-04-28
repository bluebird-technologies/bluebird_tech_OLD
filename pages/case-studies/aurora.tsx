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

function AuroraDetails() {
  const clientDetails = {
    clientName: 'aurora',
    coverImage: '',
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
    quoteSectionQuoteLine1: 'QUOTE/FEEDBACK',
    quoteSectionQuoteLine2: 'FROM KEY PERSON',
    quoteSectionNameAndJob: 'Name & Job Title',
    quoteSectionTeamInvolved: 'Involved Team',
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
    <div>
      {/* mobile top section div */}
      <div className="relative block md:hidden w-full h-full md:overflow-hidden">
        <div className="relative w-full h-full bg-primary">
          <div className="w-full h-full">
            <MobileHeader />
          </div>
        </div>
      </div>

      {/* desktop header section */}
      <div className="relative overflow-hidden">
        <div className="hidden md:flex md:flex-col md:relative w-full bg-cover bg-bottom items-center pb-[90px] z-10">
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
          className="md:bg-bottom w-full -z-10 md:-mt-52 flex flex-col items-center relative justify-center h-[500px] md:h-[850px]"
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
            className="block md:hidden absolute bg-secondary h-[100px] bottom-0"
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

      <div className="relative w-full h-full hidden md:flex flex-col bg-cover -mt-32 md:-mt-[150px] items-center z-20 md:overflow-hidden">
        <div
          className="hidden md:block bg-secondary h-full -z-20"
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
      <div className="relative w-full h-full flex flex-col md:hidden bg-secondary z-20">
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

      <div className="bg-primary w-full flex justify-center items-center">
        <SeeBanner label="Back to case studies" url="/case-studies" invert />
      </div>

      {/* Footer section */}

      <Footer />
    </div>
  );
}

export default AuroraDetails;
