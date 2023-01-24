import React from 'react';
import SwiggleLine from '../../public/what-we-offer/swiggle.svg';
import AngularLogo from '../../public/what-we-offer/angular_solidBlack.svg';
import DjangoLogo from '../../public/what-we-offer/django-seeklogo.svg';
import ReactNativeLogo from '../../public/what-we-offer/react-native.svg';
import VueLogo from '../../public/what-we-offer/vue.svg';
import WordpressLogo from '../../public/what-we-offer/Wordpress-Logo.svg';

function WebDevelopment() {
  return (
    <div className="flex flex-row  mt-28 mx-3 w-[80vw]  justify-between">
      <div className="">
        <div className="flex flex-1 flex-row justify-between">
          <h1 className="text-white font-bold text-5xl">WEB </h1>
          <SwiggleLine className="ml-20" />
        </div>
        <div className="flex flex-row w-full">
          <div className="flex-row mt-4">
            <h1 className="text-white font-bold text-5xl">DEVELOPMENT</h1>
            <div className="w-3/5">
              <p className="mt-5 text-white">
                Using modern technologies combined with the latest web standards, we create
                performant, responsive, sleek, and secure websites. <b />
              </p>
              <p className="mt-5 text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              </p>
            </div>
          </div>
          <div className="mt-2 w-3/12">
            <p className="text-highlight text-2xl text-right italic">
              Experts in technology that’s here to stay
            </p>
            <div className="flex justify-between mt-4 ">
              <AngularLogo height={100} width={100} />
              <ReactNativeLogo />
              <VueLogo />
            </div>
            <div className="flex justify-around items-center ">
              <DjangoLogo />
              <WordpressLogo />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end  w-2/5 justify-center"></div>
    </div>
  );
}

export default WebDevelopment;
