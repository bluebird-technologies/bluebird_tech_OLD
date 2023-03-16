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

  const multiSelectionIndexes = [4, 7, 8, 9];
  const hasBackButtonIndexes = [1, 2, 3, 4, 5, 6];

  const handleSingleSelection = (optimistic: number, pessimistic: number) => {
    const tempOpt = optimisticArray;
    const tempPes = pessimisticArray;
    // push the new optimistic and pessimistic values into the array
    // this will make it possible to pop the last index of the array off whenever
    // using the back button
    tempOpt.push(optimistic);
    tempPes.push(pessimistic);
    setOptimisticArray(tempOpt);
    setPessimisticArray(tempPes);

    setCurrentFormIndex((prev) => prev + 1);
    // todo this catch is likely unnecessary once the final submission is done through the multi form
    // if (currentFormIndex < 6) {
    //   setCurrentFormIndex((prev) => prev + 1);
    //   return;
    // }
    // after the if fails, we are on the last form and want to redirect to the quote screen with the values
  };

  const handleMultiSelection = (optimistic: number, pessimistic: number) => {
    const tempOpt = optimisticArray;
    const tempPes = pessimisticArray;
    tempOpt.push(optimistic);
    tempPes.push(pessimistic);

    setOptimisticArray(tempOpt);
    setPessimisticArray(tempPes);

    setCurrentFormIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    const tempOpt = optimisticArray;
    const tempPes = pessimisticArray;
    tempOpt.pop();
    tempPes.pop();
    setOptimisticArray(tempOpt);
    setPessimisticArray(tempPes);

    setCurrentFormIndex((prev) => prev - 1);
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
        {multiSelectionIndexes.includes(currentFormIndex) && (
          <FormCardMultiple
            currentIndex={currentFormIndex}
            title={forms[currentFormIndex].title}
            description={forms[currentFormIndex].description}
            options={forms[currentFormIndex].options}
            goBack={() => console.log()}
            submitSelection={({ optimisticHours, pessimisticHours }) =>
              handleMultiSelection(optimisticHours, pessimisticHours)
            }
          />
        )}

        {!multiSelectionIndexes.includes(currentFormIndex) && (
          <FormCard
            title={forms[currentFormIndex].title}
            description={forms[currentFormIndex].description}
            setSelectedOption={(val) =>
              handleSingleSelection(
                val.option.optimisticHours ?? 0,
                val.option.pessimisticHours ?? 0
              )
            }
            backButton={hasBackButtonIndexes.includes(currentFormIndex)}
            goBack={() => handleBack()}
            options={forms[currentFormIndex].options}
          />
        )}
      </div>
    </div>
  );
}
