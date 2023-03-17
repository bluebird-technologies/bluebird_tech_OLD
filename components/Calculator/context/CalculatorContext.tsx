import React, { createContext } from 'react';

type platformSizeOption = 'small' | 'medium' | 'large';
type uxOption = 'mvp' | 'stock' | 'beautiful';

export interface CalculatorContextProps {
  optimisticArray: number[] | undefined;
  setOptimisticArray: (val: number[]) => void;
  pessimisticArray: number[] | undefined;
  setPessimisticArray: (val: number[]) => void;

  plat: string;
  setPlat: (val: any) => void;
  platSize: platformSizeOption;
  setPlatSize: (val: platformSizeOption) => void;

  hasDesigner: boolean;
  setHasDesigner: (val: boolean) => void;

  ux: uxOption;
  setUx: (val: uxOption) => void;
}

// typescript problem with context. Online solution suggested using
// <CalculatorContextProps | undefined>
// but then its impossible to call the values from the context
export const CalculatorContext = createContext<CalculatorContextProps | any>(undefined);
