import React, { useState } from 'react';
import chevronDown from '../public/chevron-down';
import chevronUp from '../public/chevron-up';
interface Props {
  placeholder: string;
  options: string[];
  selectedItem: (option: string) => void;
}

function SelectDropdown({ placeholder, options, selectedItem }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    selectedItem(option);
    setSelectedOption(option);
    setIsOpened((prev) => !prev);
  };

  return (
    <div
      className={
        !isOpened
          ? 'bg-white relative rounded-[20px] items-center lg:w-[518px] my-2 cursor-pointer w-5/6'
          : 'bg-white relative rounded-t-[20px] items-center lg:w-[518px] my-2 cursor-pointer w-5/6'
      }
    >
      <div
        onClick={() => setIsOpened((prev) => !prev)}
        className={'flex flex-1 py-4  px-4 justify-between items-center'}
      >
        <span className="md:text-lg text-base font-medium">
          {selectedOption ? selectedOption : placeholder}
        </span>
        <div>{isOpened ? chevronUp : chevronDown}</div>
      </div>
      {isOpened && (
        <div className="absolute bg-white items-center justify-center w-full rounded-b-[20px]">
          {options.map((item, key) => (
            <div
              onClick={() => handleSelect(item)}
              className="py-[14px] h-full flex-1 flex hover:bg-[#CBCBCB] cursor-pointer"
              key={key}
            >
              <span className="font-semibold text-base md:text-lg px-4">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectDropdown;
