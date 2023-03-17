import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../Button';
import animation from '../../public/lottie/724c861b-ff93-4c29-8e91-ab091ab26774.json';
import { Checkmark } from './icons/Checkmark';
import { CalculatorContext } from './context/CalculatorContext';

function QuoteCalculator() {
  const { optimisticArray, pessimisticArray, hasDesigner, plat } = useContext(CalculatorContext);

  const optimisticTotal = optimisticArray.reduce(
    (partialSum: number, a: number) => partialSum + a,
    0
  );

  const pessimisticTotal = pessimisticArray.reduce(
    (partialSum: number, a: number) => partialSum + a,
    0
  );

  return (
    <div className="bg-white max-h-[650px] w-full shadow-md overflow-scroll overflow-x-hidden scrollbar-hide">
      <div className="flex flex-row justify-between pt-10 px-8">
        <div className="text-lightGrey text-xl">Platform:</div>
        <div className="text-primary text-xl font-semibold">{plat ?? ''}</div>
      </div>
      <div className="border-t border-lightGrey mx-8 mt-4" />

      <div className="flex flex-row mt-4 px-8">
        <div className="text-lightGrey text-xl italic">Title</div>
        {/* <div className="text-lightGrey text-xl italic">Time</div> */}
      </div>

      <div className="border-t border-lightGrey mx-8 mt-4" />

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-lightGrey text-xl italic">Size</div>
      </div>

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-lightGrey text-xl italic">UX</div>
      </div>

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-lightGrey text-xl italic">Designer</div>
        <div className="text-primary text-xl font-bold">{hasDesigner ? 'Yes' : 'No'}</div>
      </div>

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-lightGrey text-xl underline">Total:</div>
      </div>

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-primary text-xl font-bold">Optimistic</div>
        <div className="text-secondary text-xl font-bold">{optimisticTotal} hours</div>
      </div>

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-primary text-xl font-bold">Pessimistic</div>
        <div className="text-secondary text-xl font-bold">{pessimisticTotal} hours</div>
      </div>

      <div className="mt-64">
        <Lottie animationData={animation} loop={true} />
        <Button onClick={() => console.log(hasDesigner)}>Calculate</Button>
      </div>
    </div>
  );
}

export default QuoteCalculator;
