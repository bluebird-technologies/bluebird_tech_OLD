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

      <div className="flex w-full justify-center mt-12">
        <div className="max-w-6xl">
          <ul>
            {designProcess.map((item, key) => (
              <li key={key} className="text-black list-disc text-2xl mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <HeadingWithLine text="Building Process" swiggleOption={'2'} className="mt-12" />
      <div className="flex w-full justify-center mt-12">
        <div className="max-w-6xl">
          <ul>
            {buildingProcess.map((item, key) => (
              <li key={key} className="text-black list-disc text-2xl mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
