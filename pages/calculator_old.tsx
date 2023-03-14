import React, { useContext, useState } from 'react';
import { Container } from '../components/Container';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import Swiggle from '../public/swiggle.svg';
import Lottie from 'lottie-react';
import LottieFile from '../public/lottie/5d49851b-aa9d-4d30-ad87-eb72343de7bc.json';
import { CalculatorContext } from '../components/Calculator/context/CalculatorContext';

function Calculator() {
  const optimisticHourTracker = useContext(CalculatorContext);

  const [formSectionActive, setFormSectionActive] = useState(false);

  return (
    <CalculatorContext.Provider value={optimisticHourTracker}>
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
          {/* {formSectionActive ? () : ()} */}

          <Container wide>
            <div className="mt-20">
              <Container wide>
                <h3 className="text-[40px] w-2/4  uppercase font-bold text-white">
                  Get a hassle-free quote estimate
                </h3>
              </Container>

              <Container wide>
                <div className="flex  flex-1 items-center flex-row justify-between">
                  <Lottie
                    animationData={LottieFile}
                    style={{
                      height: '250px',
                      transform: 'rotate(280deg)',
                    }}
                    loop={true}
                  />
                  <div className="w-2/4">
                    <p className=" text-white font-normal mb-4 text-lg">
                      Intro line of what this page is about (Get an estimate of what you want done).
                    </p>
                    <p className=" text-white font-normal text-lg">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    </p>
                  </div>
                </div>
              </Container>
            </div>
          </Container>
        </div>
        <div className="bg-secondary py-52 -mt-40 flex-1  px-60">
          <div className="bg-secondary flex-1  ">
            <p className="text-white italic text-2xl font-normal">I want to:</p>
            <Swiggle width={420} className="mt-4" />
            <div className="flex flex-1 justify-start mt-16  flex-row ">
              <button
                // onClick={() => router.push('/calculator/quoteWizard')}
                onClick={() => setFormSectionActive(true)}
                className=" w-[200px] h-12 font-bold text-xl text-dark transition delay-100 bg-white hover:-translate-y-1 hover:scale-95  hover:border-[2px] hover:border-black duration-300 rounded-full "
              >
                Build a Platform
              </button>
              <button className=" w-[320px] h-12 ml-40 font-bold text-xl text-dark transition  delay-100 bg-white hover:-translate-y-1 hover:scale-95  hover:border-[2px] hover:border-black duration-300 rounded-full ">
                Find a Particular Resource
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </CalculatorContext.Provider>
  );
}

export default Calculator;
