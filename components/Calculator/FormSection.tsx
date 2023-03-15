import React, { useContext, useEffect, useState } from 'react';
import FormCard from '../../components/Calculator/FormCard';
import { FormConfigs } from '../../components/Calculator/data/FormConfigs';
import { CalculatorContext } from './context/CalculatorContext';
import FormCardMultiple from './FormCardMultiple';

export function FormSection() {
  const forms = FormConfigs;

  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const { optimisticArray, setOptimisticArray, pessimisticArray, setPessimisticArray } =
    useContext(CalculatorContext);

  const handleNextForm = (optimistic: number, pessimistic: number) => {
    const tempOpt = optimisticArray;
    const tempPes = pessimisticArray;
    // push the new optimistic and pessimistic values into the array
    // this will make it possible to pop the last index of the array off whenever
    // using the back button
    tempOpt.push(optimistic);
    tempPes.push(pessimistic);
    setOptimisticArray(tempOpt);
    setPessimisticArray(tempPes);
    if (currentFormIndex < 6) {
      setCurrentFormIndex((prev) => prev + 1);
      return;
    }
    // after the if fails, we are on the last form and want to redirect to the quote screen with the values
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

  useEffect(() => {
    const resetFormState = () => {
      setOptimisticArray([]);
      setPessimisticArray([]);
    };
    if (currentFormIndex === 0) {
      resetFormState();
    }
  }, [currentFormIndex, setOptimisticArray, setPessimisticArray]);

  // <div className="w-[470px] mr-32">
  //           <Calculator />
  //         </div>

  return (
    <div className="flex pt-60 pb-16 bg-secondary w-full -mt-40 justify-between">
      <div className="flex grow max-w-[900px] ml-32">
        {/* some specific forms require a multi select instead */}
        {(currentFormIndex === 4 || currentFormIndex === 8) && (
          <FormCardMultiple
            title={forms[currentFormIndex].title}
            description={forms[currentFormIndex].description}
            options={forms[currentFormIndex].options}
            goBack={() => console.log()}
            submitSelection={() => console.log()}
          />
        )}

        {currentFormIndex !== 4 && currentFormIndex !== 8 && (
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
