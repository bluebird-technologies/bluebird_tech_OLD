import React, { useEffect, useState } from 'react';
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
    selection,
  }: {
    optimisticHours: number;
    pessimisticHours: number;
    selection: string[];
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
    const tempOptions = [...currentOptionSelection, key];
    // there are multiple options that are a "no" like not sure and no, when those are picked they
    // are the only one that can be selected
    const noOptions =
      currentIndex === 4
        ? [3, 4]
        : currentIndex === 7
        ? [5]
        : currentIndex === 8
        ? [5]
        : currentIndex === 9
        ? [5]
        : [];

    if (noOptions.includes(key)) {
      setCurrentOptionSelection([key]);
    } else if (tempOptions.length > 1 && tempOptions.some((arr) => noOptions.includes(arr))) {
      const newArr = tempOptions.filter(function (el) {
        return noOptions.indexOf(el) < 0;
      });
      setCurrentOptionSelection(newArr);
    } else {
      setCurrentOptionSelection(tempOptions);
    }
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
    const selection: string[] = [];

    // need to take all the options and sum up their hours
    options.map((option) => {
      if (currentOptionSelection.includes(option.optionIndex)) {
        if (option.optimisticHours) {
          tempOpt.push(option.optimisticHours);
        }
        if (option.pessimisticHours) {
          tempPes.push(option.pessimisticHours);
        }
        selection.push(option.title);
      }
    });

    const optimisticHours = tempOpt.reduce((partialSum, a) => partialSum + a, 0);
    const pessimisticHours = tempPes.reduce((partialSum, a) => partialSum + a, 0);

    submitSelection({ optimisticHours, pessimisticHours, selection });
    if (currentIndex === 9) {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    // this simply resets the selection every time a new form is navigated to
    setCurrentOptionSelection([]);
  }, [currentIndex]);

  return (
    <div className="flex flex-col">
      <h3 className="text-white text-3xl text-center xl:text-4xl font-semibold">{title}</h3>
      <div className="mt-8 flex  items-center justify-center px-2">
        <span className="text-white text-lg text-center xl:text-2xl">{description}</span>
      </div>
      <div className="mx-auto xl:mx-0 inline-grid grid-cols-2 mt-8  gap-4 xl:flex xl:flex-row xl:mt-16 xl:justify-between">
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
            className="relative mb-8 mx-4 xl:mx-0 cursor-pointer justify-center items-center text-center max-w-[150px]"
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
          className="text-white font-medium text-md md:text-base xl:text-xl flex items-center justify-center"
        >
          <picture>
            <img
              src="/right-arrow.svg"
              className="origin-center mr-2 h-12 w-12 xl:h-auto xl:w-auto rotate-180 xl:mr-4"
              alt="right arrow"
            />
          </picture>
          BACK
        </button>
        {currentOptionSelection.length > 0 && (
          <button
            onClick={() => handleSubmit()}
            className="text-white font-medium  text-md md:text-base xl:text-xl flex items-center justify-center"
          >
            <picture>
              <img
                src="/right-arrow.svg"
                className="origin-center mr-2 h-12 w-12 xl:h-auto xl:w-auto ml-2 xl:mr-4"
                alt="right arrow"
              />
            </picture>
            PROCEED
          </button>
        )}
      </div>
    </div>
  );
}

export default FormCard;
