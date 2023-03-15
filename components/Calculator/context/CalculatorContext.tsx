import React, { createContext } from 'react';

export interface CalculatorContextProps {
  optimisticArray: number[] | undefined;
  setOptimisticArray: (val: number[]) => void;
  pessimisticArray: number[] | undefined;
  setPessimisticArray: (val: number[]) => void;
  hasDesigner: boolean;
  setHasDesigner: (val: boolean) => void;
}

// typescript is really bad with context. Online solution suggested using
// <CalculatorContextProps | undefined>
// but then its impossible to call the values from the context
export const CalculatorContext = createContext<CalculatorContextProps | any>(undefined);
