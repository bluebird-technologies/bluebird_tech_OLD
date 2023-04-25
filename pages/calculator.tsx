import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import Swiggle from '../public/swiggle.svg';
import Lottie from 'lottie-react';
import LottieFile from '../public/lottie/QuoteEstimateAnimation.json';
import CalculatorAnimation from '../public/lottie/calculatelottie.json';

import {
  CalculatorContext,
  OptionWithRole,
} from '../components/Calculator/context/CalculatorContext';
import { FormSection } from '../components/Calculator/FormSection';
import QuoteCalculatorWidget from '../components/Calculator/QuoteCalculatorWidget';
import CalculatorSquiggle from '../components/Calculator/icons/CalculatorSquiggle';
import { calculateTotals, getAllRoles } from '../components/Calculator/data/Utility';
import YourTeam from '../components/Calculator/YourTeam';
import { MobileHeader } from '../components/MobileHeader';

function Calculator() {
  const [formSectionActive, setFormSectionActive] = useState(false);
  const [showCalculationScreen, setShowCalculationScreen] = useState(false);
  const buttonClass = `bg-highlight inline-flex rounded-full text-white font-bold uppercase text-xl
    leading-[17px] px-16 py-6 xl:px-8 xl:py-3 whitespace-nowrap hover:bg-gradient-to-t from-[#f6c4a1] to-[#e97724]
    transition-all hover:duration-1000 ease-in-out`;

  // context state getters and setters. This tracks all the choices and the hours
  // for the forms
  const [platform, setPlatform] = useState<OptionWithRole>({ title: '', roles: [] });
  const [platformSize, setPlatformSize] = useState<OptionWithRole>({ title: '', roles: [] });
  const [uxLevel, setUxLevel] = useState<OptionWithRole>({ title: '', roles: [] });
  const [hasDesigner, setHasDesigner] = useState<OptionWithRole>({ title: '', roles: [] });

  const [loginOptions, setLoginOptions] = useState<OptionWithRole[] | []>([]);

  const [personalProfiles, setPersonalProfiles] = useState<OptionWithRole>({
    title: '',
    roles: [],
  });
  const [connected, setConnected] = useState<OptionWithRole>({ title: '', roles: [] });

  const [payments, setPayments] = useState<OptionWithRole[] | []>([]);
  const [admin, setAdmin] = useState<OptionWithRole[] | []>([]);
  const [datesAndLocation, setDatesAndLocation] = useState<OptionWithRole[] | []>([]);

  const [showRateCard, setShowRateCard] = useState<boolean>(false);

  const contextValue = {
    platform,
    setPlatform,
    platformSize,
    setPlatformSize,
    uxLevel,
    setUxLevel,
    hasDesigner,
    setHasDesigner,
    loginOptions,
    setLoginOptions,
    personalProfiles,
    setPersonalProfiles,
    connected,
    setConnected,
    payments,
    setPayments,
    admin,
    setAdmin,
    datesAndLocation,
    setDatesAndLocation,
  };

  const totals = calculateTotals({
    platform,
    platformSize,
    uxLevel,
    hasDesigner,
    loginOptions,
    personalProfiles,
    connected,
    payments,
    admin,
    datesAndLocation,
  });

  function sortOptionsToSelections(options: OptionWithRole[]) {
    const selections = options.map((val) => {
      return { title: val.title, hours: val.optimisticHours ?? 0 };
    });

    return selections;
  }

  const loginOptionsRolesAll: string[] = [];
  loginOptions.forEach((opt: OptionWithRole) => {
    if (opt.roles.length > 0) {
      opt.roles.forEach((val) => {
        loginOptionsRolesAll.push(val);
      });
    }
  });
  const paymentsRolesAll: string[] = [];
  payments.forEach((opt: OptionWithRole) => {
    if (opt.roles.length > 0) {
      opt.roles.forEach((val) => {
        paymentsRolesAll.push(val);
      });
    }
  });
  const adminRolesAll: string[] = [];
  admin.forEach((opt: OptionWithRole) => {
    if (opt.roles.length > 0) {
      opt.roles.forEach((val) => {
        adminRolesAll.push(val);
      });
    }
  });
  const datesAndLocationRolesAll: string[] = [];
  datesAndLocation.forEach((opt: OptionWithRole) => {
    if (opt.roles.length > 0) {
      opt.roles.forEach((val) => {
        datesAndLocationRolesAll.push(val);
      });
    }
  });

  const combineAndDisplayRoles = () => {
    const allRolesArr = [].concat(
      platform.roles as [],
      platformSize.roles as [],
      uxLevel.roles as [],
      hasDesigner.roles as [],
      loginOptionsRolesAll as [],
      personalProfiles.roles as [],
      connected.roles as [],
      paymentsRolesAll as [],
      adminRolesAll as [],
      datesAndLocationRolesAll as []
    );
    const roles = getAllRoles(allRolesArr);

    return roles;
  };

  const teamMembers = combineAndDisplayRoles();

  return (
    <div className="w-full overflow-hidden xl:overflow-visible ">
      <div>
        {formSectionActive && (
          <div>
            <CalculatorContext.Provider value={contextValue}>
              {!showCalculationScreen && (
                <div>
                  <div className="w-full xl:hidden">
                    <MobileHeader />
                  </div>
                  <div className="w-full flex flex-col items-center relative h-[200px] overflow-hidden">
                    <div
                      className=" w-[285vw] -z-1 left-[-98%]  -z-1 bg-primary absolute xl:left-[-16%] xl:w-[130vw] h-3/4 xl:h-full"
                      style={{
                        borderBottomLeftRadius: '50%',
                        borderBottomRightRadius: '50%',
                      }}
                    />

                    <div className="hidden 2xl:block">
                      <Header />
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row  bg-secondary xl:h-[1100px] w-full -mt-64">
                    <div className="flex grow xl:pt-32 max-w-[900px] mx-4 xl:ml-12 2xl:ml-32">
                      <FormSection setShowCalc={setShowCalculationScreen} />
                    </div>
                    <div className="flex  xl:mt-[350px]  xl:ml-12 2xl:ml-64 xl:w-[440px] xl:pr-12">
                      <QuoteCalculatorWidget />
                    </div>
                  </div>
                </div>
              )}
              {showCalculationScreen && (
                <div className="overflow-hidden">
                  <div className="w-full flex flex-col items-center relative h-[600px]">
                    <div
                      className=" w-[285vw] -z-1 left-[-98%] bg-primary absolute xl:left-[-16%]  xl:w-[130vw]  h-full"
                      style={{
                        borderBottomLeftRadius: '50%',
                        borderBottomRightRadius: '50%',
                      }}
                    />
                    <div className="w-full xl:hidden">
                      <MobileHeader />
                    </div>
                    <div className="hidden xl:block">
                      <Header />
                    </div>
                    <div className="flex flex-col w-full mt-32" style={{ zIndex: 10 }}>
                      <div className="mx-8 xl:mx-0">
                        <h1 className=" xl:w-full text-center font-extrabold text-white xl:leading-[64px] text-[32px] xl:text-[52px] uppercase">
                          Your Quote Estimate
                        </h1>
                      </div>
                      <div className="flex w-full justify-center">
                        <div className="flex  items-center justify-center xl:justify-start xl:items-start  mt-6 xl:flex xl:w-full xl:mt-6 xl:px-64 xl:max-w-[1800px]">
                          <div className="flex mx-4 items-center justify-center  xl:mx-0 w-3/4 xl:w-3/5">
                            <p className="text-white text-center xl:text-xl xl:pl-12">
                              (Disclaimer)
                              <br />
                              <br />
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                              <br />
                              sed diam nonumy eirmod tempor invidunt
                              <br />
                              ut labore et dolore magna aliquyam erat, sed diam
                            </p>
                          </div>
                          <div className="xl:w-2/5 absolute mt-6 xl:mt-0  left-1/2 top-3/4 transform -translate-x-1/2 xl:static xl:transform-none">
                            <div>
                              <Lottie
                                animationData={CalculatorAnimation}
                                className="h-[350px]"
                                loop={true}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col bg-grey w-full -mt-64 pb-52">
                    <div className="mt-64" />
                    <div className="flex w-full px-64 mt-16">
                      <div className="hidden xl:block w-3/5">
                        <div className="w-[650px]">{CalculatorSquiggle}</div>
                      </div>
                      <div className="w-2/5" />
                    </div>

                    <div className="w-full mt-16 xl:mt-0  xl:px-64 xl:grid xl:grid-cols-3 xl:gap-x-4">
                      <QuoteScreenRow
                        mainTitle="Platform:"
                        title={platform.title}
                        hours={platform.optimisticHours}
                      />
                      <QuoteScreenRow
                        mainTitle="Size:"
                        title={platformSize.title}
                        hours={platformSize.optimisticHours}
                      />
                      <QuoteScreenRow
                        mainTitle="UX/UI:"
                        title={uxLevel.title}
                        hours={uxLevel.optimisticHours}
                      />
                      {sortOptionsToSelections(loginOptions).map((row, i) => {
                        return (
                          <QuoteScreenRow
                            mainTitle={i === 0 ? 'Login:' : ''}
                            title={row.title}
                            hours={row.hours}
                            key={'Login' + i}
                          />
                        );
                      })}
                      <QuoteScreenRow
                        mainTitle="Personal Profiles:"
                        title={personalProfiles.title}
                        hours={personalProfiles.optimisticHours}
                      />
                      <QuoteScreenRow
                        mainTitle="Connected:"
                        title={connected.title}
                        hours={connected.optimisticHours}
                      />

                      {sortOptionsToSelections(payments).map((row, i) => {
                        return (
                          <QuoteScreenRow
                            mainTitle={i === 0 ? 'Payments:' : ''}
                            title={row.title}
                            hours={row.hours}
                            key={'Payments' + i}
                          />
                        );
                      })}
                      {sortOptionsToSelections(admin).map((row, i) => {
                        return (
                          <QuoteScreenRow
                            mainTitle={i === 0 ? 'Admin:' : ''}
                            title={row.title}
                            hours={row.hours}
                            key={'Admin' + i}
                          />
                        );
                      })}
                      {sortOptionsToSelections(datesAndLocation).map((row, i) => {
                        return (
                          <QuoteScreenRow
                            mainTitle={i === 0 ? 'Dates/Location:' : ''}
                            title={row.title}
                            hours={row.hours}
                            key={'Dates' + i}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative flex h-[600px] w-full -mt-32">
                    <div
                      className=" w-[285vw] -z-1 left-[-98%] bg-secondary  absolute xl:left-[-16%]  xl:w-[130vw]  h-full"
                      style={{
                        borderTopLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                      }}
                    />
                    <div className="w-full" style={{ zIndex: 10 }}>
                      <div className="flex w-full justify-center mt-16 xl:mt-32">
                        <h1 className="uppercase text-white text-4xl font-bold text-center">
                          Total
                        </h1>
                      </div>
                      <div className="flex flex-col w-full px-4 justify-center items-center mt-16">
                        <div className="flex w-full justify-between xl:w-[600px]">
                          <h1 className="text-white text-3xl xl:text-4xl font-semibold">
                            Optimistic
                          </h1>
                          <h1 className="text-highlight text-3xl xl:text-4xl font-bold">
                            {totals.totalOptimistic}h
                          </h1>
                        </div>
                        <div className="flex w-full justify-between xl:w-[600px] mt-12">
                          <h1 className="text-white text-3xl xl:text-4xl font-semibold">
                            Pessimistic
                          </h1>
                          <h1 className="text-highlight text-3xl xl:text-4xl font-bold">
                            {totals.totalPessimistic}h
                          </h1>
                        </div>
                        <div className="mt-16">
                          {/* TODO what does calculate button do? */}
                          <button className={buttonClass}>Calculate</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <YourTeam teamMembers={teamMembers ?? []} />
                </div>
              )}
              <Footer />
            </CalculatorContext.Provider>
          </div>
        )}
        {!formSectionActive && (
          <div className="w-full overflow-hidden flex-1 flex flex-col  items-center   ">
            <div className=" lg:hidden w-full">
              <MobileHeader />
            </div>
            <div className="w-full flex flex-col relative pv-20 xl:pb-8 ">
              <div
                className="   w-[285vw] -z-1 left-[-98%] bg-primary  absolute xl:left-[-16%]  xl:w-[130vw]  h-full"
                style={{
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                }}
              />
              <div className="hidden lg:block w-full">
                <Header />
              </div>
              <div className="w-full flex-1   items-center justify-center  flex flex-col">
                <div className="flex z-10  flex-col items-center 2xl:flex-row w-full pb-8 mt-32">
                  <div className="flex flex-col  justify-center w-full items-center text-center xl:w-1/2">
                    <h3 className="text-3xl xl:text-6xl text-center uppercase  font-bold text-white">
                      Get a hassle-free
                      <br />
                      quote estimate
                    </h3>
                    <div className="hidden xl:block">
                      <Lottie
                        animationData={LottieFile}
                        style={{
                          transform: 'rotate(280deg)',
                        }}
                        className="h-[200px] 2xl:h-[500px]"
                        loop={true}
                      />
                    </div>
                  </div>
                  <div className="2xl:w-1/2 px-12  flex items-center justify-center  mt-8 mx-8 xl:mx-0 xl:mt-8 2xl:mt-52">
                    <div className="flex items-center justify-center flex-col xl:pr-64">
                      <p className=" text-center text-lg  text-white font-normal mb-4 xl:text-2xl">
                        Intro line of what this page is about (Get an estimate of what you want
                        done).
                      </p>
                      <p className="text-center text-lg text-white font-normal mb-4 xl:text-2xl">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* divide from top section */}

            <div className="w-full overflow-hidden bg-secondary pb-20 -mt-32 xl:-mt-60">
              <div className="flex w-full justify-center mt-40 xl:mt-80">
                <div className="flex flex-col items-center  xl:w-[1000px]">
                  <div className="flex flex-col mx-4 w-full  item-center xl:items-start justify-center">
                    <div className="flex flex-col items-center">
                      <p className="text-3xl  text-white italic text-center xl:text-5xl font-normal mb-12">
                        I want to:
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Swiggle className="w-2/3 xl:w-[900px]" />
                    </div>
                  </div>
                  <div className="flex w-full flex-col xl:flex-row items-center justify-between px-12 mt-20">
                    <button
                      onClick={() => {
                        setFormSectionActive(true);
                        window.scrollTo(0, 0);
                      }}
                      className="px-8 text-xl xl:px-0 xl:w-[340px] mb-8 xl:mb-0 h-[66px] font-bold xl:text-2xl text-dark transition delay-75 bg-white hover:border-4 hover:border-black duration-300 rounded-full"
                    >
                      Build a Platform
                    </button>
                    <button
                      onClick={() => setShowRateCard(true)}
                      className="px-8 text-xl xl:px-0 xl:w-[420px] h-[66px] font-bold xl:text-2xl text-dark transition delay-75 bg-white hover:border-4 hover:border-black duration-300 rounded-full"
                    >
                      Find a Particular Resource
                    </button>
                  </div>
                </div>
              </div>
              {/* Rate card */}
              {showRateCard && (
                <div className="w-full  xl:flex justify-center my-16 xl:my-24">
                  <picture className="xl:px-64">
                    <source srcSet="/calculator/RateCard.png" />
                    <img src="/calculator/RateCard.png" alt="rates" />
                  </picture>
                </div>
              )}
            </div>
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

const QuoteScreenRow = ({
  mainTitle,
  title,
  hours,
}: {
  mainTitle: string;
  title: string;
  hours: number | undefined;
}) => {
  return (
    <>
      {/* Desktop view */}
      <div className="hidden xl:block text-3xl text-primary pt-6 font-bold">{mainTitle}</div>
      <div className="hidden xl:block text-2xl text-primary pt-6 font-medium">{title}</div>
      <div
        className="hidden xl:block max-w-[200px]"
        style={{
          backgroundColor: 'rgba(233, 119, 36, 0.36)',
        }}
      >
        <div className="hidden xl:block w-[200px] px-3 pt-6 text-center text-2xl text-highlight font-bold">
          {hours ?? 0} h
        </div>
      </div>
      {/* Mobile View */}
      <div className="xl:hidden flex flex-col mx-8 items-left">
        <div className="text-2xl mt-8 mb-2 font-bold">{mainTitle}</div>
        <div className="flex items-center justify-between">
          <div className="text-xl underline">{title}</div>
          <div className="text-2xl font-bold text-highlight">{hours ?? 0} h</div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
