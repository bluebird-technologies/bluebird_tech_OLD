import React from 'react';

interface ResultsSectionProps {
  clientName: string;
  resultsBackgroundImageString: string;
  clientResults: string;
  results: string[];
}

export function ResultsSection({
  clientName,
  resultsBackgroundImageString,
  clientResults,
  results,
}: ResultsSectionProps) {
  const imgUrl =
    clientName === 'revio'
      ? '/case-studies/revioLandingPage.png'
      : clientName === 'raubex'
      ? '/case-studies/raubexLandingPage.png'
      : '';
  return (
    <div className="flex flex-col lg:flex-row lg:h-[620px]">
      <div className="lg:hidden w-full relative">
        <div className="flex w-full justify-center items-center absolute bottom-10">
          <div className="flex bg-highlight p-3 rounded-full max-w-[350px]">
            <span className="text-white font-medium text-xl lg:text-2xl text-center">
              {clientResults}
            </span>
          </div>
        </div>
        <picture>
          <source srcSet={imgUrl} type="image/png" />
          <img src={imgUrl} alt="Laptop" />
        </picture>
      </div>
      <div
        style={{
          backgroundImage: `url(${resultsBackgroundImageString})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="lg:flex lg:flex-1 bg-black hidden"
      >
        <div className="flex items-end justify-end">
          <div className="flex bg-highlight ml-16 mb-20 flex-wrap py-4 px-8 w-[500px] items-center justify-center rounded-full">
            <span className="text-white font-medium text-2xl text-center">{clientResults}</span>
          </div>
        </div>
      </div>
      <div className="bg-secondary flex lg:w-2/5 flex-col flex-wrap px-6 lg:px-16 lg:py-7 justify-center">
        <h1 className="text-white text-2xl lg:text-4xl uppercase font-bold my-4 text-center lg:text-start">
          Results
        </h1>
        <ul className="pb-4">
          {results.map((item, key) => (
            <li
              key={key}
              className="text-white text-center lg:text-start list-disc list-inside lg:list-outside text-sm lg:text-xl xl:text-2xl mb-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
