import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import Swiggle from '../public/swiggle-responsive.svg';
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
    leading-[17px] px-16 py-6 md:px-8 md:py-3 whitespace-nowrap hover:bg-gradient-to-t from-[#f6c4a1] to-[#e97724]
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
    <div className="w-full overflow-hidden md:overflow-visible ">
      <div>
        {formSectionActive && (
          <div>
            <CalculatorContext.Provider value={contextValue}>
              {!showCalculationScreen && (
                <div>
                  <div className="w-full md:hidden">
                    <MobileHeader />
                  </div>
                  <div className="w-full flex flex-col items-center relative h-[200px] overflow-hidden">
                    <div
                      className=" w-[285vw] -z-1 left-[-98%]  -z-1 bg-primary absolute md:left-[-16%] md:w-[130vw] h-3/4 md:h-full"
                      style={{
                        borderBottomLeftRadius: '50%',
                        borderBottomRightRadius: '50%',
                      }}
                    />

                    <div className="w-full hidden md:block">
                      <Header />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row  bg-secondary md:h-[1100px] w-full -mt-64">
                    <div className="flex grow md:pt-32 max-w-[900px] mx-4 md:ml-12 2xl:ml-32">
                      <FormSection setShowCalc={setShowCalculationScreen} />
                    </div>
                    <div className="flex md:mt-[350px] md:ml-12 2xl:ml-64 md:w-[440px] md:pr-12">
                      <QuoteCalculatorWidget />
                    </div>
                  </div>
                </div>
              )}
              {showCalculationScreen && (
                <div className="overflow-hidden">
                  <div className="w-full flex flex-col items-center relative h-[600px]">
                    <div
                      className=" w-[285vw] -z-1 left-[-98%] bg-primary absolute md:left-[-16%]  md:w-[130vw]  h-full"
                      style={{
                        borderBottomLeftRadius: '50%',
                        borderBottomRightRadius: '50%',
                      }}
                    />
                    <div className="block lg:hidden w-full">
                      <MobileHeader />
                    </div>
                    <div className="hidden lg:block w-full">
                      <Header />
                    </div>
                    <div className="flex flex-col w-full mt-20 md:mt-32" style={{ zIndex: 10 }}>
                      <div className="mx-8 md:mx-0">
                        <h1 className=" md:w-full text-center font-extrabold text-white md:leading-[64px] text-[32px] md:text-[52px] uppercase">
                          Your Quote Estimate
                        </h1>
                      </div>
                      <div className="flex w-full justify-center">
                        <div className="flex  items-center justify-center md:justify-start md:items-start  mt-6 md:flex md:w-full md:mt-6 md:px-64 md:max-w-[1800px]">
                          <div className="flex mx-4 items-center justify-center  md:mx-0 w-3/4 md:w-3/5">
                            <p className="text-white text-center md:text-xl md:px-12">
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
                          <div className="xl:w-2/5 absolute -mt-12 lg:mt-4 md:mt-0  left-1/2 top-3/4 transform -translate-x-1/2 md:static md:transform-none">
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
                      <div className="hidden md:block w-3/5">
                        <div className="w-[650px]">{CalculatorSquiggle}</div>
                      </div>
                      <div className="w-2/5" />
                    </div>

                    <div className="w-full mt-16 md:mt-0  md:px-64 md:grid md:grid-cols-3 md:gap-x-4">
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
                      className=" w-[285vw] -z-1 left-[-98%] bg-secondary  absolute md:left-[-16%]  md:w-[130vw]  h-full"
                      style={{
                        borderTopLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                      }}
                    />
                    <div className="w-full" style={{ zIndex: 10 }}>
                      <div className="flex w-full justify-center mt-16 md:mt-32">
                        <h1 className="uppercase text-white text-4xl font-bold text-center">
                          Total
                        </h1>
                      </div>
                      <div className="flex flex-col w-full px-4 justify-center items-center mt-16">
                        <div className="flex w-full justify-between md:w-[600px]">
                          <h1 className="text-white text-3xl md:text-4xl font-semibold">
                            Optimistic
                          </h1>
                          <h1 className="text-highlight text-3xl md:text-4xl font-bold">
                            {totals.totalOptimistic}h
                          </h1>
                        </div>
                        <div className="flex w-full justify-between md:w-[600px] mt-12">
                          <h1 className="text-white text-3xl md:text-4xl font-semibold">
                            Pessimistic
                          </h1>
                          <h1 className="text-highlight text-3xl md:text-4xl font-bold">
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
          <div className="w-full overflow-hidden flex-1 flex flex-col items-center">
            <div className="block lg:hidden w-full">
              <MobileHeader />
            </div>
            <div className="w-full flex flex-col relative pv-20 md:pb-8 ">
              <div
                className="w-[285vw] -z-1 left-[-98%] bg-primary  absolute md:left-[-16%]  md:w-[130vw]  h-full"
                style={{
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                }}
              />
              <div className="hidden lg:block w-full">
                <Header />
              </div>
              <div className="flex w-full mt-20 md:mt-32 pb-8 md:pb-24 lg:pb-20 xl:pb-16 2xl:pb-0">
                <div className="flex z-10 flex-col 2xl:flex-row w-full px-4 md:px-20 2xl:px-0">
                  <div className="flex flex-col justify-center w-full items-center text-center 2xl:w-1/2">
                    <h3 className="text-3xl md:text-6xl text-center uppercase font-bold text-white">
                      Get a hassle-free
                      <br />
                      quote estimate
                    </h3>
                    <div className="hidden md:block">
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
                  <div className="flex 2xl:w-1/2 justify-center 2xl:justify-start mt-12 2xl:mt-40">
                    <div className="flex flex-col 2xl:pr-32 justify-center items-center 2xl:justify-start 2xl:items-start">
                      <p className="text-center 2xl:text-left text-lg text-white font-normal mb-4 md:text-2xl">
                        Intro line of what this page is about (Get an estimate of what you want
                        done).
                      </p>
                      <p className="text-center mt-2 2xl:mt-8  2xl:text-left text-lg text-white font-normal mb-4 md:text-2xl">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* divide from top section */}

            <div className="w-full overflow-hidden bg-secondary pb-20 -mt-32 md:-mt-60">
              <div className="flex w-full justify-center mt-40 md:mt-80">
                <div className="flex flex-col justify-center w-full md:w-[1000px]">
                  <div className="w-full px-12">
                    <div className="flex w-full justify-center lg:justify-start">
                      <p className="text-white text-3xl lg:text-5xl font-normal italic mb-12">
                        I want to:
                      </p>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center lg:items-start">
                      <Swiggle className="max-w-[300px] md:max-w-[550px] xl:max-w-[900px]" />
                    </div>
                  </div>

                  {/* <div className="flex flex-col mx-4 w-full  item-center lg:items-start justify-center">
                    <div className="flex flex-col items-center">
                      <p className="text-3xl text-white italic text-center md:text-5xl font-normal mb-12">
                        I want to:
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Swiggle className="w-2/3 md:w-[900px]" />
                    </div>
                  </div> */}
                  <div className="flex w-full flex-col md:flex-row items-center justify-between space-x-0 md:space-x-4 px-12 mt-20">
                    <button
                      onClick={() => {
                        setFormSectionActive(true);
                        window.scrollTo(0, 0);
                      }}
                      className="px-4 md:px-0 w-full md:w-[340px] mb-8 md:mb-0 h-[66px] font-bold text-md xs:text-xl md:text-2xl text-dark transition delay-75 bg-white hover:border-4 hover:border-black duration-300 rounded-full"
                    >
                      Build a Platform
                    </button>
                    <button
                      onClick={() => setShowRateCard(true)}
                      className="px-4 md:px-0 w-full md:w-[420px] h-[66px] font-bold text-md xs:text-xl md:text-2xl text-dark transition delay-75 bg-white hover:border-4 hover:border-black duration-300 rounded-full"
                    >
                      Find a Particular Resource
                    </button>
                  </div>
                </div>
              </div>
              {/* Rate card */}
              {showRateCard && (
                <div className="w-full  md:flex justify-center my-16 md:my-24">
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
      <div className="hidden md:block text-3xl text-primary pt-6 font-bold">{mainTitle}</div>
      <div className="hidden md:block text-2xl text-primary pt-6 font-medium">{title}</div>
      <div
        className="hidden md:block max-w-[200px]"
        style={{
          backgroundColor: 'rgba(233, 119, 36, 0.36)',
        }}
      >
        <div className="hidden md:block w-[200px] px-3 pt-6 text-center text-2xl text-highlight font-bold">
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
