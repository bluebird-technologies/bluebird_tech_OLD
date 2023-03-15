import React, { useState } from 'react';
import RightArrow from '../../public/right-arrow.svg';

interface TFormOption {
  optionIndex: number;
  title: string;
  icon: React.ReactNode;
  optimisticHours?: number;
  pessimisticHours?: number;
}

export interface FormCardProps {
  title: string;
  description: string;
  goBack: () => void;
  options: TFormOption[];
  submitSelection: () => void;
}

function FormCard({ title, description, options, goBack, submitSelection }: FormCardProps) {
  // todo pass this value down from the data, to catch the one screen where its different
  const alignOptionsLeft = false;

  const [currentOptionSelection, setCurrentOptionSelection] = useState<number[]>([]);

  const handleClick = (key: number) => {
    const tempOptions = currentOptionSelection;
    if (tempOptions.includes(key)) {
      const index = tempOptions.indexOf(key);
      if (index !== -1) {
        tempOptions.splice(index, 1);
      }
      return;
    }

    tempOptions.push(key);
    setCurrentOptionSelection(tempOptions);
  };

  const handleSubmit = () => {
    // currentOptionSelection.map((option) => {
    // })
    console.log('options: ', options);
    console.log('selections: ', currentOptionSelection);
    submitSelection();
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-white text-4xl font-semibold">{title}</h3>
      <div className="mt-8">
        <span className="text-white text-2xl">{description}</span>
      </div>
      <div
        className={
          alignOptionsLeft
            ? 'flex flex-row mt-16 justify-start space-x-4'
            : 'flex flex-row mt-16 justify-between'
        }
      >
        {options.map((option) => (
          <div
            onClick={() => handleClick(option.optionIndex)}
            key={option.optionIndex}
            className="cursor-pointer justify-center items-center text-center"
          >
            <div className="h-[120px] transition transform hover:scale-125 duration-300">
              {option.icon}
            </div>
            <div className="text-center text-white font-medium text-xl">{option.title}</div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-between">
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
