import React from 'react';

interface ResultsSectionProps {
  resultsBackgroundImageString: string;
  clientResults: string;
  results: string[];
}

export function ResultsSection({
  resultsBackgroundImageString,
  clientResults,
  results,
}: ResultsSectionProps) {
  return (
    <div className="flex flex-1 flex-row h-[620px]">
      <div
        style={{
          backgroundImage: `url(${resultsBackgroundImageString})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="flex flex-1 bg-black"
      >
        <div className="flex items-end justify-end">
          <div className="flex bg-highlight ml-16 mb-20 flex-wrap py-4 px-8 w-[500px] items-center justify-center rounded-full">
            <span className="text-white font-medium text-2xl text-center">{clientResults}</span>
          </div>
        </div>
      </div>
      <div className="bg-secondary flex w-2/5 flex-col flex-wrap px-16 py-7 justify-center">
        <h1 className="text-white text-4xl uppercase font-bold my-4">Results</h1>
        <ul className=" pb-4">
          {results.map((item, key) => (
            <li key={key} className="text-white list-disc text-2xl mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
