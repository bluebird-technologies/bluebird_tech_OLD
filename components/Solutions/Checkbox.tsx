import React from 'react';
import { Checkmark } from '../Calculator/icons/Checkmark';

export interface CheckboxProps {
  title: string;
  checked: boolean;
  onPressHandler: () => void;
}

export const Checkbox = ({ title, checked, onPressHandler }: CheckboxProps) => {
  return (
    <div className="flex flex-1 mt-4 items-center justify-between mb-2">
      <div
        onClick={() => onPressHandler()}
        className="flex flex-1 flex-row justify-between items-center"
      >
        <h1>{title}</h1>
        {checked && (
          <div className="text-highlight h-[30px]">
            <Checkmark />
          </div>
        )}
      </div>
    </div>
  );
};
