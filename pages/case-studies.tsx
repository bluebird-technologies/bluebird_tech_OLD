import React from 'react';
import ClientCard from '../components/ClientCard';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { clients } from '../public/case-studies/clients';
import DownArrow from '../public/down-arrow.svg';
import Background from '../public/case-studies/svg.svg';

function caseStudies() {
  return (
    <div className="">
      <div
        className="w-full bg-cover bg-bottom flex flex-col items-center relative pt-[60px] pb-[77px] "
        style={{
          backgroundImage: 'url(/primary-overlay.png)',
          objectFit: 'contain',
        }}
      >
        <Header />
        <div className="flex flex-col my-12 mb-28 items-center">
          <div className="my-12">
            <h1 className="text-white font-bold text-3xl">CASE STUDIES</h1>
          </div>
          <div className="flex flex-col mb-8 w-2/5">
            <p className="text-white text-justify ">
              Intro about how prestigious our work and clients are, etc.
            </p>
            <p className="text-white mt-4 text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
            </p>
          </div>
          <DownArrow />
        </div>
      </div>
      <div className="flex flex-1 relative -mt-40 w-full">
        <div className="flex flex-col justify-center items-center  w-full">
          {clients.map((item, key) => (
            <div className={`w-2/3 `} key={key}>
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
      <div
        className=" h-[350px] -mt-40"
        style={{ backgroundImage: `url(/primary-overlay-inverse.png)` }}
      ></div>
      <div className="flex flex-1 h-full border self-end items-end justify-end">
        <Footer />
      </div>
    </div>
  );
}

export default caseStudies;
