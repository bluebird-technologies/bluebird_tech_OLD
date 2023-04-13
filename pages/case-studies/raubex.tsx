import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import { DesignBuildSection } from '../../components/CaseStudies/DesignBuildSection';
import { ResultsSection } from '../../components/CaseStudies/ResultsSection';
import { IntroAndChallengeSection } from '../../components/CaseStudies/IntroAndChallengeSection';
import SeeBanner from '../../components/SeeBanner';
import { MobileHeader } from '../../components/MobileHeader';
import QuoteSection from '../../components/CaseStudies/QuoteSection';
import OurApproachSection from '../../components/CaseStudies/OurApproachSection';

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

    // QUOTE SECTION DATA
    quoteSectionImage: '/../public/case-studies/raubex-clay.png',
    quoteSectionQuoteLine1: 'QUOTE/FEEDBACK',
    quoteSectionQuoteLine2: 'FROM KEY PERSON',
    quoteSectionNameAndJob: 'Name & Job Title',
    quoteSectionTeamInvolved: 'Involved Team',
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

      <div className="bg-primary w-full flex justify-center items-center">
        <SeeBanner label="Back to case studies" url="/case-studies" invert />
      </div>

      {/* Footer section */}

      <Footer />
    </div>
  );
}

export default RaubexDetails;
