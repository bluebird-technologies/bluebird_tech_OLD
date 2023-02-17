import { createContext } from 'react';

export interface CalculatorContextType {
  platform: string;
  optimisticHours: number;
  pessimisticHours: number;
  resources: string[] | [];
}

export type ResourcesType = 'FE' | 'BE' | 'MD' | 'PM' | 'GD';

export const Resources: Record<ResourcesType, string> = {
  FE: 'Front-end Developer',
  BE: 'Backend Developer',
  MD: 'Mobile Developer',
  PM: 'Product Manager',
  GD: 'Graphic Designer',
};

const initialValue = {
  platform: '',
  optimisticHours: 0,
  pessimisticHours: 0,
  resources: [''],
};

export const CalculatorContext = createContext(initialValue);
