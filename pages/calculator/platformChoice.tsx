import React from 'react';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import AppleIcon from '../../public/calculator/appleIcon.svg';
import AndroidIcon from '../../public/calculator/androidIcon.svg';
import WebIcon from '../../public/calculator/webIcon.svg';
import MultiPlatformIcon from '../../public/calculator/multiPlatformIcon.svg';
function platformChoice() {
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
      </div>
      <div className="bg-secondary flex-1 py-52 -mt-40">
        <Container wide>
          <div className="w-2/3 mt-8">
            <h3 className="text-white text-3xl font-medium ">
              What type of platform are you building?
            </h3>
            <div className="w-2/3 mt-8">
              <span className="text-white text-base  ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              </span>
            </div>
            <div className="flex flex-row justify-between w-2/3 mt-6">
              <div className="flex flex-col items-center justify-center">
                <AppleIcon />
                <div className="flex -mt-6 items-center">
                  <span className="text-center text-white font-medium">Apple iOS</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <AndroidIcon />
                <div className="flex -mt-6 items-center">
                  <span className="text-center text-white font-medium">Android</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <WebIcon />
                <div className="flex -mt-6 items-center">
                  <span className="text-center text-white font-medium">Web</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <MultiPlatformIcon />
                <div className="flex -mt-6 items-center">
                  <span className="text-center text-white font-medium">Multi Platform</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default platformChoice;
