import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import Swiggle from '../public/swiggle.svg';
import Lottie from 'lottie-react';
import LottieFile from '../public/lottie/5d49851b-aa9d-4d30-ad87-eb72343de7bc.json';
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

function Calculator() {
  const [formSectionActive, setFormSectionActive] = useState(false);
  const [showCalculationScreen, setShowCalculationScreen] = useState(false);
  const buttonClass = `bg-highlight inline-flex rounded-full text-white font-bold uppercase text-xl
    leading-[17px] px-8 py-3 whitespace-nowrap hover:bg-gradient-to-t from-[#f6c4a1] to-[#e97724]
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
    <>
      {formSectionActive && (
        <div>
          <CalculatorContext.Provider value={contextValue}>
            {!showCalculationScreen && (
              <>
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
                  <div className="flex grow pt-32 max-w-[900px] ml-12 2xl:ml-32">
                    <FormSection setShowCalc={setShowCalculationScreen} />
                  </div>
                  <div className="flex mt-[350px] ml-12 2xl:ml-64 w-[440px] pr-12">
                    <QuoteCalculatorWidget />
                  </div>
                </div>
              </>
            )}
            {showCalculationScreen && (
              <>
                <div className="w-full flex flex-col items-center relative h-[600px]">
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
                  <div className="flex flex-col w-full mt-32" style={{ zIndex: 10 }}>
                    <h1 className="w-full text-center title-1">Your Quote Estimate</h1>
                    <div className="flex w-full justify-center">
                      <div className="flex w-full mt-6 px-64 max-w-[1800px]">
                        <div className="w-3/5">
                          <p className="text-white text-xl xl:pl-12">
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
                        <div className="w-2/5">
                          <div>
                            <Lottie
                              animationData={CalculatorAnimation}
                              style={{
                                height: '350px',
                              }}
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
                    <div className="w-3/5">
                      <div className="w-[650px]">{CalculatorSquiggle}</div>
                    </div>
                    <div className="w-2/5" />
                  </div>

                  <div className="w-full px-64 grid grid-cols-3 gap-x-4">
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
                          mainTitle={i === 0 ? 'Payemnts:' : ''}
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
                          mainTitle={i === 0 ? 'Dates/ Location:' : ''}
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
                    className="bg-secondary h-full"
                    style={{
                      position: 'absolute',
                      left: '-16%',
                      width: '130vw',
                      borderTopLeftRadius: '50%',
                      borderTopRightRadius: '50%',
                    }}
                  />
                  <div className="w-full" style={{ zIndex: 10 }}>
                    <div className="flex w-full justify-center mt-32">
                      <h1 className="uppercase text-white text-4xl font-bold text-center">Total</h1>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center mt-16">
                      <div className="flex justify-between w-[600px]">
                        <h1 className="text-white text-4xl font-semibold">Optimistic</h1>
                        <h1 className="text-highlight text-4xl font-bold">
                          {totals.totalOptimistic}h
                        </h1>
                      </div>
                      <div className="flex justify-between w-[600px] mt-12">
                        <h1 className="text-white text-4xl font-semibold">Pessimistic</h1>
                        <h1 className="text-highlight text-4xl font-bold">
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
              </>
            )}

            <Footer />
          </CalculatorContext.Provider>
        </div>
      )}
      {!formSectionActive && (
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

            <div className="w-full bg-secondary -mt-32">
              <div className="flex w-full justify-center mt-60">
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
              <div className="w-full flex justify-center my-24">
                <picture className="px-32 xl:px-64">
                  <source srcSet="/calculator/RateCard.png" />
                  <img src="/calculator/RateCard.png" alt="rates" />
                </picture>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
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
      <div className="text-3xl text-primary pt-6 font-bold">{mainTitle}</div>
      <div className="text-2xl text-primary pt-6 font-medium">{title}</div>
      <div
        className="max-w-[200px]"
        style={{
          backgroundColor: 'rgba(233, 119, 36, 0.36)',
        }}
      >
        <div className="w-[200px] px-3 pt-6 text-center text-2xl text-highlight font-bold">
          {hours ?? 0} h
        </div>
      </div>
    </>
  );
};

export default Calculator;
