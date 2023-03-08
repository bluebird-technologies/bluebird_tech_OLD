import React from 'react';
import ClientCard from '../components/ClientCard';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { clients } from '../public/case-studies/clients';
import DownArrow from '../public/down-arrow.svg';
import { Lottie } from '../components/Lottie';

function caseStudies() {
  return (
    <div>
      <div className="w-full flex flex-col items-center relative h-[94vh]">
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
            style={{ width: '750px' }}
            src="lottie/6c9228ec-9c25-492d-9758-432393638219.json"
            className="absolute left-0 "
          />
          <Lottie
            style={{ width: '300px' }}
            src="lottie/355a04a6-668d-4fcc-aae2-d2af1451ba80.json"
            className="absolute left-[400px] bottom-[200px] "
          />
         
        </div>

        <div className="relative flex flex-col items-center mt-20">
          <h2 className="title-1 alt">CASE STUDIES</h2>

          <div className="flex flex-col my-16 max-w-[800px] space-y-8">
            <p className="text-xl text-center text-white">
              Intro about how prestigious our work and clients are, etc.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
            </p>
          </div>
          <DownArrow />
        </div>
      </div>

      <div className="flex flex-1 relative -mt-40 w-full">
        <div className="flex flex-col justify-center items-center space-y-8 w-full">
          {clients.map((item, key) => (
            <div className="w-2/3" key={key}>
              <ClientCard
                clientName={item.clientName}
                clientLogo={item.clientLogo}
                responsibilities={item.responsibilities}
                backgroundImageSrc={item.backgroundImageSrc}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center relative h-[40vh] -mt-[25vh]">
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

      <div className="flex flex-1 h-full border self-end items-end justify-end">
        <Footer />
      </div>
    </div>
  );
}

export default caseStudies;
