import React from 'react';
import { Header } from '../components/Header';
import DownArrow from '../public/down-arrow.svg';

function caseStudies() {
  return (
    <div>
      <div
        className="w-full bg-cover bg-bottom flex flex-col items-center relative pt-[60px] pb-[77px] "
        style={{
          backgroundImage: 'url(/primary-overlay.png)',
        }}
      >
        <Header />
        <div className="flex flex-col items-center">
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
    </div>
  );
}

export default caseStudies;
