import React from 'react';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { clients } from '../public/case-studies/clients';
import { Lottie } from '../components/Lottie';
import CaseStudiesHeadingSection from '../components/CaseStudies/CaseStudiesHeadingSection';
import { MobileHeader } from '../components/MobileHeader';
import ClientCardContainer from '../components/CaseStudies/ClientCardContainer';

function caseStudies() {
  return (
    <div>
      {/* mobile top section div */}
      <div className="relative block md:hidden w-full h-full overflow-hidden">
        <div className="relative w-full h-full bg-primary">
          <div className="w-full h-full">
            <MobileHeader />
          </div>
        </div>
        <div className="relative">
          <div
            className="bg-primary h-full"
            style={{
              position: 'absolute',
              left: '-75%',
              width: '250vw',
              borderBottomLeftRadius: '50%',
              borderBottomRightRadius: '50%',
              zIndex: -10,
            }}
          />
          <CaseStudiesHeadingSection />
        </div>
      </div>

      <div className="hidden md:relative md:flex h-[900px] w-full flex-col items-center">
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
        <div className="overflow-hidden">
          <Lottie
            style={{ width: '650px' }}
            src="lottie/6c9228ec-9c25-492d-9758-432393638219.json"
            className="absolute  -left-40 bottom-60 "
          />
          <Lottie
            style={{ width: '250px' }}
            src="lottie/355a04a6-668d-4fcc-aae2-d2af1451ba80.json"
            className="absolute left-80 bottom-[150px] "
          />
        </div>

        <CaseStudiesHeadingSection />
      </div>

      <ClientCardContainer clients={clients} />

      <div className="hidden w-full md:flex flex-col items-center relative h-[40vh] -mt-[25vh]">
        <div
          className="bg-primary h-full -z-10"
          style={{
            position: 'absolute',
            left: '-16%',
            width: '130vw',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
          }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default caseStudies;
