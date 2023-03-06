import React from 'react';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';

function QuoteEstimate() {
  return (
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
      <div className="bg-secondary flex-col flex-1 flex pt-60 pb-16 px-20 w-full  -mt-40">
        <Container center>
          <p className="text-white font-bold text-[40px]">YOUR QUOTE ESTIMATE</p>
        </Container>
        <Container wide>
          <div className="w-2/5 ml-20 mt-16">
            <p className="text-white text-base">
              (Disclaimer) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            </p>
          </div>
        </Container>
      </div>
      <div className="bg-black flex flex-1"></div>
    </div>
  );
}

export default QuoteEstimate;
