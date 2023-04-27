import React from 'react';
import RightArrow from '../../public/right-arrow.svg';

export interface TFormOption {
  optionIndex: number;
  title: string;
  icon: React.ReactNode;
  optimisticHours?: number;
  pessimisticHours?: number;
}

export interface FormCardProps {
  currentIndex: number;
  title: string;
  description: string;
  setSelectedOption: ({ option }: { option: TFormOption }) => void;
  backButton?: boolean;
  goBack?: () => void;
  options: TFormOption[];
}

function FormCard({
  currentIndex,
  title,
  description,
  options,
  setSelectedOption,
  backButton,
  goBack,
}: FormCardProps) {
  const indexesForLeftAlign = [2];
  let alignOptionsLeft = false;
  if (indexesForLeftAlign.includes(currentIndex)) {
    alignOptionsLeft = true;
  }

  return (
    <div className="flex flex-col">
      <h3 className="text-white text-2xl lg:text-4xl font-semibold text-center lg:text-left">
        {title}
      </h3>
      <div className="mt-8 text-white text-xl lg:text-2xl text-center lg:text-left">
        {description}
      </div>
      <div
        className={
          alignOptionsLeft
            ? 'flex flex-row flex-wrap lg:flex-nowrap mt-16 justify-center lg:justify-start space-x-2 sm:space-x-8 lg:space-x-24'
            : 'flex flex-row flex-wrap lg:flex-nowrap mt-16 justify-center lg:justify-between space-x-2 lg:space-x-0'
        }
      >
        {options.map((option) => (
          <div
            key={option.optionIndex}
            className="flex min-w-[150px] justify-center items-center m-2 lg:m-0"
          >
            <div
              onClick={() =>
                setSelectedOption({
                  option,
                })
              }
              className="cursor-pointer justify-center items-center text-center"
            >
              <div className="h-[7.5rem] transition transform lg:hover:scale-125 duration-300">
                {option.icon}
              </div>
              <div className="text-center text-white font-medium text-xl mt-2 lg:mt-6">
                {option.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      {backButton && goBack && (
        <div className="w-full flex justify-between mt-12 h-8 md:h-12">
          <button
            onClick={() => goBack()}
            className="text-white font-medium text-xl flex items-center justify-center"
          >
            <div className="mr-4 rotate-180 h-[3rem]">
              <RightArrow className="origin-center" />
            </div>
            <span className="text-sm md:text-2xl">BACK</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default FormCard;
