import React, { useEffect, useState } from 'react';
import RightArrow from '../../public/right-arrow.svg';
import { Checkmark } from './icons/Checkmark';

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
  goBack: () => void;
  options: TFormOption[];
  submitSelection: ({
    optimisticHours,
    pessimisticHours,
  }: {
    optimisticHours: number;
    pessimisticHours: number;
  }) => void;
}

function FormCard({
  currentIndex,
  title,
  description,
  options,
  goBack,
  submitSelection,
}: FormCardProps) {
  const [currentOptionSelection, setCurrentOptionSelection] = useState<number[]>([]);

  const handleClickAdd = (key: number) => {
    const tempOptions = [...currentOptionSelection];
    tempOptions.push(key);
    setCurrentOptionSelection(tempOptions);
  };

  const handleClickRemove = (key: number) => {
    const tempOptions = [...currentOptionSelection];
    const index = tempOptions.indexOf(key);
    tempOptions.splice(index, 1);
    setCurrentOptionSelection(tempOptions);
  };

  const handleSubmit = () => {
    const tempOpt: number[] = [];
    const tempPes: number[] = [];

    options.map((option) => {
      if (currentOptionSelection.includes(option.optionIndex)) {
        if (option.optimisticHours) {
          tempOpt.push(option.optimisticHours);
        }
        if (option.pessimisticHours) {
          tempPes.push(option.pessimisticHours);
        }
      }
    });

    const optimisticHours = tempOpt.reduce((partialSum, a) => partialSum + a, 0);
    const pessimisticHours = tempPes.reduce((partialSum, a) => partialSum + a, 0);

    submitSelection({ optimisticHours, pessimisticHours });
  };

  useEffect(() => {
    setCurrentOptionSelection([]);
  }, [currentIndex]);

  return (
    <div className="flex flex-col">
      <h3 className="text-white text-4xl font-semibold">{title}</h3>
      <div className="mt-8">
        <span className="text-white text-2xl">{description}</span>
      </div>
      <div className="flex flex-row mt-16 justify-between">
        {options.map((option) => (
          <div
            onClick={() => {
              if (currentOptionSelection.includes(option.optionIndex)) {
                handleClickRemove(option.optionIndex);
              } else {
                handleClickAdd(option.optionIndex);
              }
            }}
            key={option.optionIndex}
            className="relative cursor-pointer justify-center items-center text-center max-w-[150px]"
          >
            {currentOptionSelection.includes(option.optionIndex) && (
              <div className="absolute w-full h-full text-5xl text-white" style={{ zIndex: 10 }}>
                <div className="text-white h-[80px]">
                  <Checkmark />
                </div>
              </div>
            )}

            <div
              className={
                currentOptionSelection.includes(option.optionIndex)
                  ? 'h-[120px] transition transform hover:scale-125 duration-300 opacity-50'
                  : 'h-[120px] transition transform hover:scale-125 duration-300'
              }
            >
              {option.icon}
            </div>
            <div className="text-center text-white font-medium text-xl">{option.title}</div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-between mt-12">
        <button
          onClick={() => goBack()}
          className="text-white font-medium text-xl flex items-center justify-center"
        >
          <RightArrow className="origin-center rotate-180 mr-4" />
          BACK
        </button>
        <button
          onClick={() => handleSubmit()}
          className="text-white font-medium text-xl flex items-center justify-center"
        >
          <RightArrow className="origin-center mr-4" />
          PROCEED
        </button>
      </div>
    </div>
  );
}

export default FormCard;
