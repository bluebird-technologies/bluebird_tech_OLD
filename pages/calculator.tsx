import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import Swiggle from '../public/swiggle.svg';
import Lottie from 'lottie-react';
import LottieFile from '../public/lottie/5d49851b-aa9d-4d30-ad87-eb72343de7bc.json';
import {
  CalculatorContext,
  OptionWithRole,
} from '../components/Calculator/context/CalculatorContext';
import { FormSection } from '../components/Calculator/FormSection';
import QuoteCalculator from '../components/Calculator/QuoteCalculator';

function Calculator() {
  const [formSectionActive, setFormSectionActive] = useState(false);

  const [optimisticArray, setOptimisticArray] = useState<number[]>([]);
  const [pessimisticArray, setPessimisticArray] = useState<number[]>([]);
  const [hasDesigner, setHasDesigner] = useState('');
  const [platform, setPlatform] = useState<OptionWithRole>({ title: '', roles: [] });
  const [platformSize, setPlatformSize] = useState('');

  const contextValue = {
    optimisticArray,
    setOptimisticArray,
    pessimisticArray,
    setPessimisticArray,
    hasDesigner,
    setHasDesigner,
    platform,
    setPlatform,
    platformSize,
    setPlatformSize,
  };

  return (
    <>
      {formSectionActive ? (
        <div>
          <CalculatorContext.Provider value={contextValue}>
            <div className="w-full flex flex-col items-center relative h-[200px]">
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
            <div className="flex bg-secondary h-[1100px] w-full -mt-64">
              <div className="flex grow pt-32 max-w-[900px] ml-32">
                <FormSection />
              </div>
              <div className="flex mt-[350px] ml-64 w-[440px]">
                <QuoteCalculator />
              </div>
            </div>
            <Footer />
          </CalculatorContext.Provider>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center relative h-[900px]">
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
          <div className="w-full flex flex-col">
            <div className="flex w-full mt-32" style={{ zIndex: 5 }}>
              <div className="flex flex-col justify-center text-center w-1/2">
                <h3 className="text-6xl uppercase font-bold text-white">
                  Get a hassle-free
                  <br />
                  quote estimate
                </h3>
                <div>
                  <Lottie
                    animationData={LottieFile}
                    style={{
                      height: '500px',
                      transform: 'rotate(280deg)',
                    }}
                    loop={true}
                  />
                </div>
              </div>
              <div className="w-1/2 mt-52">
                <div className="pr-64">
                  <p className="text-white font-normal mb-4 text-2xl">
                    Intro line of what this page is about (Get an estimate of what you want done).
                  </p>
                  <p className="text-white font-normal text-2xl">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                  </p>
                </div>
              </div>
            </div>

            {/* divide from top section */}

            <div className="h-[750px] w-full bg-secondary -mt-32">
              <div className="flex w-full h-full justify-center mt-60">
                <div className="flex flex-col w-[1000px]">
                  <div className="flex flex-col text-left">
                    <p className="text-white italic text-5xl font-normal mb-12">I want to:</p>
                    <Swiggle width={900} />
                  </div>
                  <div className="flex justify-between px-12 mt-20">
                    <button
                      onClick={() => {
                        setFormSectionActive(true);
                        window.scrollTo(0, 0);
                      }}
                      className="w-[340px] h-[66px] font-bold text-2xl text-dark transition delay-75 bg-white hover:border-4 hover:border-black duration-300 rounded-full"
                    >
                      Build a Platform
                    </button>
                    <button className="w-[420px] h-[66px] font-bold text-2xl text-dark transition delay-75 bg-white hover:border-4 hover:border-black duration-300 rounded-full">
                      Find a Particular Resource
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Calculator;
