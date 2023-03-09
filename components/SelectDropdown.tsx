import React, { useState } from 'react';

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
      className={`bg-white ${
        !isOpened ? 'rounded-[20px]' : 'rounded-t-[20px]'
      }  items-center w-[518px]  my-2  `}
    >
      <div
        onClick={() => setIsOpened((prev) => !prev)}
        className={'flex flex-1 py-4  px-2 justify-between items-center'}
      >
        <span className="text-lg font-medium">{selectedOption ? selectedOption : placeholder}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={isOpened ? 'chevron-up.svg' : 'chevron-down.svg'} alt="chevron down " />
      </div>
      {isOpened && (
        <div className="">
          {options.map((item, key) => (
            <div
              onClick={() => handleSelect(item)}
              className="pt-2 pb-4 border border-b border-t-0 flex hover:bg-[#CBCBCB] "
              key={key}
            >
              <span className="font-semibold text-lg px-2">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectDropdown;
