import React from 'react';
import { Header } from '../../components/Header';

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
    </div>
  );
}

export default platformChoice;
