import React, { useState } from 'react';

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
  // setSelectedOption: ({ option }: { option: TFormOption }) => void;
  backButton?: boolean;
  goBack?: () => void;
  fwdButton?: boolean;
  options: TFormOption[];
}

function FormCard({
  title,
  description,
  options,
  // setSelectedOption,
  backButton,
  goBack,
  fwdButton,
}: FormCardProps) {
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
      {backButton && goBack && (
        <div>
          <button type="button" onClick={() => goBack()}>
            BACK
          </button>
        </div>
      )}
    </div>
  );
}

export default FormCard;
