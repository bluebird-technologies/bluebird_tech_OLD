import React from 'react';
import { Container } from '../components/Container';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import Swiggle from '../public/swiggle.svg';

function calculator() {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="relative w-full bg-cover bg-bottom flex flex-col items-center pb-[90px]">
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
        <Container wide>
          <div className="mt-20">
            <Container wide>
              <h3 className="text-[40px] w-2/4  uppercase font-bold text-white">
                Get a hassle-free quote estimate
              </h3>
            </Container>

            <Container wide>
              <div className="flex  self-end flex-1  flex-col w-2/6">
                <p className=" text-white font-normal mb-4 text-sm">
                  Intro line of what this page is about (Get an estimate of what you want done).
                </p>
                <p className=" text-white font-normal text-base">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                </p>
              </div>
            </Container>
          </div>
        </Container>
      </div>
      <div className="bg-secondary py-52 -mt-40 flex-1  px-60">
        <div className="bg-secondary flex-1  ">
          <p className="text-white italic text-2xl font-normal">I want to:</p>
          <Swiggle width={420} className="mt-4" />
          <div className="flex flex-1 justify-between mt-16  flex-row ">
            <button className=" w-[200px] h-12 font-bold text-xl text-dark transition delay-100 bg-white hover:-translate-y-1 hover:scale-95  hover:border-[2px] hover:border-black duration-300 rounded-full ">
              Build a Platform
            </button>
            <button className=" w-[320px] h-12 font-bold text-xl text-dark transition  delay-100 bg-white hover:-translate-y-1 hover:scale-95  hover:border-[2px] hover:border-black duration-300 rounded-full ">
              Find a Particular Resource
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default calculator;
