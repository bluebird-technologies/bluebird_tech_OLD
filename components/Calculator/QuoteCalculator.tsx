import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Button } from '../Button';
import animation from '../../public/lottie/724c861b-ff93-4c29-8e91-ab091ab26774.json';
import { CalculatorContextType, CalculatorContext } from '../../contexts/calculatorContext';
import { Checkmark } from './icons/Checkmark';

function QuoteCalculator() {
  const { platform, optimisticHours, pessimisticHours, resources } =
    useContext<CalculatorContextType>(CalculatorContext);

  return (
    <div className="bg-white h-[700px] py-4 px-2 w-full">
      <div className="h-[400px] overflow-y-auto overflow-x-hidden ">
        <div className="flex flex-1 flex-row border justify-between pb-1  border-t-0 border-x-0 border-b-lightGrey">
          <label className="text-lightGrey italic">Platform</label>
          <input
            type="text"
            placeholder="platform"
            className="outline-none placeholder-transparent text-right w-2/3  text-primary font-bold underline"
            value={platform}
            onChange={() => null}
          />
        </div>
        <div className=" pb-1 w-full mt-4 flex flex-row justify-between ">
          <div className="flex flex-1 flex-row border justify-between pb-1  border-t-0 border-x-0 border-b-lightGrey">
            <label className="text-lightGrey italic">Title</label>
            <input
              type="text"
              placeholder="title"
              className="outline-none text-right w-3/5 placeholder-transparent text-primary underline"
            />
          </div>
          <div className="flex flex-1 flex-row  border justify-between pb-1  border-t-0 border-x-0 ml-2 border-b-lightGrey">
            <label className="text-lightGrey italic">Time</label>
            <input
              type="text"
              placeholder="time"
              className="outline-none placeholder-transparent text-right w-3/5 text-primary underline"
            />
          </div>
        </div>
        <h2 className="text-lightGrey text-base font-medium mt-4 border-b w-12 ">Total:</h2>
        <div>
          <div className="flex flex-row justify-between mt-4">
            <p className="text-primary text-base">Optimistic</p>
            <p className="text-primary text-base">{optimisticHours + ' hours'}</p>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <p className="text-primary text-base">Pessimistic</p>
            <p className="text-primary text-base">{pessimisticHours + ' hours'}</p>
          </div>
          <div className="flex flex-1 justify-center mt-8 items-center">
            <Button>Calculate</Button>
          </div>
          <Lottie animationData={animation} loop={true} />
        </div>
        <div className="mt-4">
          <h1 className="text-primary font-semibold text-center">Your Team:</h1>
          {resources.map((item, key) => (
            <div key={key} className="flex flex-1 mt-4 items-center justify-between mb-2">
              <div className="flex flex-1 flex-row justify-between items-center">
                <h1>{item}</h1>
                <div className="text-highlight h-[30px]">
                  <Checkmark />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuoteCalculator;
