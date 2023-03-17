import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../Button';
import animation from '../../public/lottie/724c861b-ff93-4c29-8e91-ab091ab26774.json';
import { Checkmark } from './icons/Checkmark';
import { CalculatorContext } from './context/CalculatorContext';

function QuoteCalculator() {
  const { optimisticArray, pessimisticArray } = useContext(CalculatorContext);

  // const [optimisticTotal, setOptimisticTotal] = useState(0);
  const [tempval, setTempval] = useState(true);

  useEffect(() => {
    // when checking the values of optimisticArray, they are updating. But i cant get the effect to trigger
    console.log(optimisticArray);
  }, [optimisticArray]);

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
        <div className="text-primary text-xl font-semibold">Xyzabc</div>
      </div>
      <div className="border-t border-lightGrey mx-8 mt-4" />

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-lightGrey text-xl italic">Title</div>
        <div className="text-lightGrey text-xl italic">Time</div>
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
        <div className="text-primary text-xl font-bold">No</div>
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
        <Button onClick={() => setTempval((prev) => !prev)}>Calculate</Button>
      </div>
    </div>
  );
}

export default QuoteCalculator;
