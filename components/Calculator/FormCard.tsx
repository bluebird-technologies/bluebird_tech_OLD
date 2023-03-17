import React from 'react';
import RightArrow from '../../public/right-arrow.svg';

interface TFormOption {
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
      <h3 className="text-white text-4xl font-semibold">{title}</h3>
      <div className="mt-8">
        <span className="text-white text-2xl">{description}</span>
      </div>
      <div
        className={
          alignOptionsLeft
            ? 'flex flex-row mt-16 justify-start space-x-24'
            : 'flex flex-row mt-16 justify-between'
        }
      >
        {options.map((option) => (
          <div
            onClick={() =>
              setSelectedOption({
                option,
              })
            }
            key={option.optionIndex}
            className="cursor-pointer justify-center items-center text-center"
          >
            <div className="h-[120px] transition transform hover:scale-125 duration-300">
              {option.icon}
            </div>
            <div className="text-center text-white font-medium text-xl mt-6">{option.title}</div>
          </div>
        ))}
      </div>
      {backButton && goBack && (
        <div className="w-full flex justify-between mt-12">
          <button
            onClick={() => goBack()}
            className="text-white font-medium text-xl flex items-center justify-center"
          >
            <RightArrow className="origin-center rotate-180 mr-4" />
            BACK
          </button>
        </div>
      )}
    </div>
  );
}

export default FormCard;
