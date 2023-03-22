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
  optimisticHours?: number;
  pessimisticHours?: number;
  roles: RolesEnum[] | [];
}

export interface CalculatorContextProps {
  optimisticArray: number[] | undefined;
  setOptimisticArray: (val: number[]) => void;
  pessimisticArray: number[] | undefined;
  setPessimisticArray: (val: number[]) => void;

  platform: OptionWithRole;
  setPlatform: (val: OptionWithRole) => void;
  platformSize: OptionWithRole;
  setPlatformSize: (val: OptionWithRole) => void;
  uxLevel: OptionWithRole;
  setUxLevel: (val: OptionWithRole) => void;
  hasDesigner: OptionWithRole;
  setHasDesigner: (val: OptionWithRole) => void;

  loginOptions: OptionWithRole[];
  setLoginOptions: (val: OptionWithRole[]) => void;

  personalProfiles: OptionWithRole;
  setPersonalProfiles: (val: OptionWithRole) => void;
  connected: OptionWithRole;
  setConnected: (val: OptionWithRole) => void;

  payments: OptionWithRole[];
  setPayments: (val: OptionWithRole[]) => void;
  admin: OptionWithRole[];
  setAdmin: (val: OptionWithRole[]) => void;
  datesAndLocation: OptionWithRole[];
  setDatesAndLocation: (val: OptionWithRole[]) => void;
}

// typescript problem with context. Online solution suggested using
// <CalculatorContextProps | undefined>
// but then its impossible to call the values from the context
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CalculatorContext = createContext<CalculatorContextProps | any>(undefined);
