import React from 'react';
import HeadingWithLine from './HeadingWithLine';

interface DesignBuildSectionProps {
  designProcess: string[];
  buildingProcess: string[];
}

export function DesignBuildSection({ designProcess, buildingProcess }: DesignBuildSectionProps) {
  return (
    <div className="bg-gray w-full flex flex-1 flex-col items-center justify-center py-12">
      <HeadingWithLine text="Designing Process" swiggleOption={'2'} />

      <div className="flex justify-center w-full mt-12 mb-12 lg:px-0 px-6">
        <div className="md:max-w-[80%] xl:max-w-[60%]">
          <ul className="list-disc list-inside lg:list-outside">
            {designProcess.map((item, i) => {
              return (
                <li
                  key={i}
                  className="text-primary font-normal text-sm lg:text-2xl lg:text-start text-center"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <HeadingWithLine text="Building Process" swiggleOption={'2'} />
      <div className="flex justify-center w-full mt-12 lg:px-0 px-6">
        <div className="md:max-w-[80%] xl:max-w-[60%]">
          <ul className="list-disc list-inside lg:list-outside">
            {buildingProcess.map((item, i) => {
              return (
                <li
                  key={i}
                  className="text-primary font-normal text-sm lg:text-2xl lg:text-start text-center"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
