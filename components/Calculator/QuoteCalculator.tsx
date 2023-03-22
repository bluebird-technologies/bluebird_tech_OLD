import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState } from 'react';
import animation from '../../public/lottie/724c861b-ff93-4c29-8e91-ab091ab26774.json';
import { Checkmark } from './icons/Checkmark';
import { CalculatorContext } from './context/CalculatorContext';
import { getAllRoles } from './data/Utility';
import { resolve } from 'path/win32';

function QuoteCalculator() {
  const { optimisticArray, pessimisticArray, platform, platformSize, uxLevel, hasDesigner } =
    useContext(CalculatorContext);

  const [teamMembers, setTeamMembers] = useState<string[]>([]);

  const optimisticTotal = optimisticArray.reduce(
    (partialSum: number, a: number) => partialSum + a,
    0
  );

  const pessimisticTotal = pessimisticArray.reduce(
    (partialSum: number, a: number) => partialSum + a,
    0
  );

  useEffect(() => {
    const combineAndDisplayRoles = () => {
      const allRolesArr = [].concat(platform.roles, platformSize.roles);
      const roles = getAllRoles(allRolesArr);

      return roles;
    };

    const res = combineAndDisplayRoles();
    if (res) {
      setTeamMembers(res);
    }
  }, [platform, platformSize]);

  return (
    <div className="bg-white max-h-[650px] w-full shadow-md overflow-scroll overflow-x-hidden scrollbar-hide">
      <div className="flex flex-row justify-between pt-10 px-8">
        <div className="text-lightGrey text-xl">Platform:</div>
        <div className="text-primary text-xl font-semibold">{platform.title ?? ''}</div>
      </div>
      <div className="border-t border-lightGrey mx-8 mt-4" />

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-lightGrey text-xl italic">Title</div>
        <div className="text-lightGrey text-xl italic">Hours</div>
      </div>

      <div className="border-t border-lightGrey mx-8 mt-4" />

      {platformSize.title.length > 0 && (
        <SectionHours title="Size" value={platformSize.title} hours={120} />
      )}

      {uxLevel.title.length > 0 && <SectionHours title="UX" value={uxLevel.title} hours={120} />}

      {hasDesigner.title.length > 0 && (
        <SectionHours title="Designer" value={hasDesigner.title} hours={100} />
      )}

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

      <div className="mt-24">
        <Lottie animationData={animation} loop={true} />
      </div>
      {teamMembers.length > 0 && (
        <div className="px-8 py-8">
          <div className="text-primary text-2xl font-bold justify-center text-center mb-4">
            Your Team:
          </div>

          <div>
            {teamMembers.map((member, i) => {
              return (
                <div key={i} className="flex justify-between">
                  <div className="text-xl font-medium">{member}</div>
                  <div className="text-highlight">
                    <Checkmark />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuoteCalculator;

interface SectionHoursProps {
  title: string;
  value: string;
  hours: number;
}

const SectionHours = ({ title, value, hours }: SectionHoursProps) => {
  return (
    <div className="flex flex-col justify-between mt-4 px-8">
      <div className="flex justify-start">
        <div className="text-lightGrey text-xl italic">{title}</div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-primary text-xl font-bold">{value}</div>
        <div className="text-secondary text-xl font-bold">{hours} hours</div>
      </div>
    </div>
  );
};
