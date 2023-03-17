import React, { createContext } from 'react';

export const enum RolesEnum {
  FE = 'Front end developer',
  BE = 'Back end developer',
  MD = 'Mobile developer',
  D = 'Designer',
  PM = 'Product Manager',
}

type uxOption = 'mvp' | 'stock' | 'beautiful';

export interface OptionWithRole {
  title: string;
  roles: RolesEnum[] | [];
}

export interface CalculatorContextProps {
  optimisticArray: number[] | undefined;
  setOptimisticArray: (val: number[]) => void;
  pessimisticArray: number[] | undefined;
  setPessimisticArray: (val: number[]) => void;

  platform: OptionWithRole;
  setPlatform: (val: OptionWithRole) => void;
  platformSize: string;
  setPlatformSize: (val: string) => void;

  hasDesigner: string;
  setHasDesigner: (val: string) => void;

  ux: uxOption;
  setUx: (val: uxOption) => void;
}

// typescript problem with context. Online solution suggested using
// <CalculatorContextProps | undefined>
// but then its impossible to call the values from the context
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CalculatorContext = createContext<CalculatorContextProps | any>(undefined);
