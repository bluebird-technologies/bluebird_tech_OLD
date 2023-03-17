import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState } from 'react';
import animation from '../../public/lottie/724c861b-ff93-4c29-8e91-ab091ab26774.json';
import { Checkmark } from './icons/Checkmark';
import { CalculatorContext } from './context/CalculatorContext';

function QuoteCalculator() {
  const { optimisticArray, pessimisticArray, platform, platformSize, hasDesigner } =
    useContext(CalculatorContext);

  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  const optimisticTotal = optimisticArray.reduce(
    (partialSum: number, a: number) => partialSum + a,
    0
  );

  const pessimisticTotal = pessimisticArray.reduce(
    (partialSum: number, a: number) => partialSum + a,
    0
  );

  useEffect(() => {
    // TODO this is not working as intended, need another implementation
    if (platform.roles.length > 0) {
      const shallowCopy = [...teamMembers, platform.roles];
      setTeamMembers(shallowCopy);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform]);

  return (
    <div className="bg-white max-h-[650px] w-full shadow-md overflow-scroll overflow-x-hidden scrollbar-hide">
      <div className="flex flex-row justify-between pt-10 px-8">
        <div className="text-lightGrey text-xl">Platform:</div>
        <div className="text-primary text-xl font-semibold">{platform.title ?? ''}</div>
      </div>
      <div className="border-t border-lightGrey mx-8 mt-4" />

      <div className="flex flex-row mt-4 px-8">
        <div className="text-lightGrey text-xl italic">Title</div>
      </div>

      <div className="border-t border-lightGrey mx-8 mt-4" />

      <div className="flex flex-row justify-between pt-10 px-8">
        <div className="text-lightGrey text-xl">Size</div>
        <div className="text-primary text-xl font-semibold">{platformSize ?? ''}</div>
      </div>

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-lightGrey text-xl italic">UX</div>
      </div>

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-lightGrey text-xl italic">Designer</div>
        <div className="text-primary text-xl font-bold">{hasDesigner ?? ''}</div>
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
      </div>
      <div className="text-primary text-xl font-bold">Your Team</div>
      {/* TODO your team section */}
      {/* <div>
        {teamMembers.map((member, i) => {
          return <div key={i}>{member}</div>;
        })}
      </div> */}
    </div>
  );
}

export default QuoteCalculator;
