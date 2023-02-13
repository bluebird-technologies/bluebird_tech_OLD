import React from 'react';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';

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
        {checked && <Icon path={mdiCheck} size={1} color={'#E97724'} />}
      </div>
    </div>
  );
};
