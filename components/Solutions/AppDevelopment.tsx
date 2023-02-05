import React from 'react';
import SwiggleLine from '../../public/what-we-offer/swiggle.svg';
import FlutterLogo from '../../public/what-we-offer/flutter-logo.svg';
import IonicLogo from '../../public/what-we-offer/ionic-logo.svg';
import XamarinLogo from '../../public/what-we-offer/xamarin-logo.svg';
import ReactNativeLogo from '../../public/what-we-offer/react-native.svg';

// TODO I dont think this file is being used, need to check in with Marvelous
function AppDevelopment() {
  return (
    <div className="flex flex-row  mt-28 mx-3 w-[80vw]  justify-between">
      <div className="">
        <div className="flex flex-1 flex-row justify-between">
          <h1 className="text-white font-bold text-5xl">APP </h1>
          <SwiggleLine className="ml-20" />
        </div>
        <div className="flex flex-row w-full">
          <div className="flex-row mt-4">
            <h1 className="text-white font-bold text-5xl">DEVELOPMENT</h1>
            <div className="w-3/5">
              <p className="mt-5 text-white">
                Native or cross-platform — we take the hassle out of mobile development, and deliver
                beautiful apps quickly and cost effectively. <b />
              </p>
              <p className="mt-5 text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              </p>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-highlight text-2xl text-right italic">
              Experts in technology that’s here to stay
            </p>
            <div className="w-full">
              <div className="flex justify-between  mt-4 ">
                <FlutterLogo />
                <ReactNativeLogo height={100} width={100} />
              </div>
              <div
                className="flex justify-between 
               mt-12"
              >
                <IonicLogo />
                <XamarinLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end  w-2/5 justify-center"></div>
    </div>
  );
}

export default AppDevelopment;
