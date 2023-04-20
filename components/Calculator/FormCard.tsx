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
      <h3 className="text-white text-center text-3xl mx-2 xl:text-4xl font-semibold">{title}</h3>
      <div className="mt-8 flex  items-center justify-center px-2">
        <span className="text-white text-center text-lg xl:text-2xl">{description}</span>
      </div>
      <div
        className={
          alignOptionsLeft
            ? 'flex flex-row mt-16 justify-start space-x-24'
            : 'inline-grid grid-cols-2 mt-8 gap-4 xl:flex xl:flex-row xl:mt-16 xl:justify-between'
        }
      >
        {options.map((option, index) => (
          <div
            onClick={() =>
              setSelectedOption({
                option,
              })
            }
            key={option.optionIndex}
            className={`cursor-pointer mx-2 my-8 flex flex-col justify-center items-center text-center ${
              index === options.length - 1 && options.length % 2 !== 0 ? 'col-span-2' : ''
            }`}
          >
            <div className="xl:h-[120px] xl:w-auto w-[80px] transition mx-2 transform hover:scale-125 duration-300">
              {option.icon}
            </div>
            <div className="text-center text-white font-medium text-xl  mt-6 ">{option.title}</div>
          </div>
        ))}
      </div>
      {backButton && goBack && (
        <div className="w-full flex  justify-center items-center xl:justify-start xl:items-start  mt-12">
          <button
            onClick={() => goBack()}
            className="text-white font-medium xl:text-xl flex items-center justify-center"
          >
            <div className="flex items-center justify-center xl:h-auto xl:w-auto ">
              <RightArrow className="origin-center rotate-180 xl:mr-4" />
            </div>
            <h1 className="ml-8 xl:ml-0">BACK</h1>
          </button>
        </div>
      )}
    </div>
  );
}

export default FormCard;
