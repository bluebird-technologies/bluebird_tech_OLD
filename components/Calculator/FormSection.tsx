import React, { useContext, useState } from 'react';
import FormCard from '../../components/Calculator/FormCard';
import { FormConfigs } from '../../components/Calculator/data/FormConfigs';
import { CalculatorContext } from './context/CalculatorContext';

export function FormSection() {
  const forms = FormConfigs;

  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const { optimisticArray, setOptimisticArray, pessimisticArray, setPessimisticArray } =
    useContext(CalculatorContext);

  const handleNextForm = (optimistic: number, pessimistic: number) => {
    console.log(optimistic, pessimistic);
    const tempOpt = optimisticArray;
    const tempPes = pessimisticArray;
    tempOpt.push(optimistic);
    tempPes.push(pessimistic);
    setOptimisticArray(tempOpt);
    setPessimisticArray(tempPes);
    if (currentFormIndex < 1) {
      setCurrentFormIndex((prev) => prev + 1);
    }
  };

  const handleBack = (optimistic: number, pessimistic: number) => {
    console.log(optimistic, pessimistic);
    const tempOpt = optimisticArray;
    const tempPes = pessimisticArray;
    tempOpt.push(optimistic);
    tempPes.push(pessimistic);
    setOptimisticArray(tempOpt);
    setPessimisticArray(tempPes);
    if (currentFormIndex < 1) {
      setCurrentFormIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="flex pt-60 pb-16 bg-secondary w-full -mt-40 justify-between">
      <div className="flex grow max-w-[900px] ml-32">
        {currentFormIndex === 5 ||
          (currentFormIndex === 7 && (
            <FormCard
              title={forms[currentFormIndex].title}
              description={forms[currentFormIndex].description}
              setSelectedOption={(val) =>
                handleNextForm(val.option.optimisticHours ?? 0, val.option.pessimisticHours ?? 0)
              }
              options={forms[currentFormIndex].options}
            />
          ))}
        {currentFormIndex !== 5 && currentFormIndex !== 7 && (
          <FormCard
            title={forms[currentFormIndex].title}
            description={forms[currentFormIndex].description}
            setSelectedOption={(val) =>
              handleNextForm(val.option.optimisticHours ?? 0, val.option.pessimisticHours ?? 0)
            }
            options={forms[currentFormIndex].options}
          />
        )}
      </div>
    </div>
  );
}

{
  /* <div className="flex-1 flex flex-col h-full">
        <div className="relative w-full bg-cover bg-bottom flex flex-col items-center pb-[90px]">
          <div
            className="bg-primary h-full"
            style={{
              position: 'absolute',
              left: '-16%',
              width: '130vw',
              borderBottomLeftRadius: '50%',
              borderBottomRightRadius: '50%',
            }}
          />
          <Header />
        </div>
        <div className="flex pt-60 pb-16 bg-secondary w-full -mt-40 justify-between">
          <div className="flex grow max-w-[900px] ml-32">
            <FormCard
              title={forms[currentFormIndex].title}
              description={forms[currentFormIndex].description}
              setSelectedOption={(val) =>
                handleIterateToNextForm(
                  val.option.optimisticHours ?? 0,
                  val.option.pessimisticHours ?? 0
                )
              }
              options={forms[currentFormIndex].options}
            />
          </div>

          <div className="w-[470px] mr-32">
            <Calculator />
          </div>
        </div>
      </div> */
}
