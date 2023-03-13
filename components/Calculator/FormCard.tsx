import React from 'react';

export interface FormCardProps {
  formIndex: number;
  title: string;
  description: string;
  setSelectedOption: ({
    formIndex,
    optionIndex,
  }: {
    formIndex: number;
    optionIndex: number;
  }) => void;
  backButton?: React.ReactNode;
  fwdButton?: React.ReactNode;
  options: {
    optionIndex: number;
    title: string;
    icon: React.ReactNode;
    optimisticHours?: number;
    pessmisticHours?: number;
  }[];
}

function FormCard({
  formIndex,
  title,
  description,
  options,
  setSelectedOption,
  backButton,
  fwdButton,
}: FormCardProps) {
  // todo pass this value down from the data, to catch the one screen where its different
  const alignOptionsLeft = false;
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
            onClick={() =>
              setSelectedOption({
                formIndex: formIndex,
                optionIndex: option.optionIndex,
              })
            }
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
    </div>
  );
}

export default FormCard;
