import React, { useContext, useEffect, useState } from 'react';
import FormCard from '../../components/Calculator/FormCard';
import { FormConfigs } from '../../components/Calculator/data/FormConfigs';
import { CalculatorContext } from './context/CalculatorContext';
import FormCardMultiple from './FormCardMultiple';

export function FormSection() {
  const {
    optimisticArray,
    setOptimisticArray,
    pessimisticArray,
    setPessimisticArray,
    setHasDesigner,
    setPlat,
  } = useContext(CalculatorContext);

  const forms = FormConfigs;
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const multiSelectionIndexes = [4, 7, 8, 9];
  const hasBackButtonIndexes = [1, 2, 3, 4, 5, 6];

  const handleSingleSelection = (optimistic: number, pessimistic: number, title: string) => {
    // storing the latest selection in the array, so that it keeps track of each addition and easily
    // remove it on back button
    if (!optimisticArray || !pessimisticArray) return;
    const tempOpt = [...optimisticArray, optimistic];
    const tempPes = [...pessimisticArray, pessimistic];
    setOptimisticArray(tempOpt);
    setPessimisticArray(tempPes);

    if (currentFormIndex === 0) {
      if (title === 'Apple iOS') {
        setPlat('Apple iOS');
      }
      if (title === 'Apple iOS') {
        setPlat('Apple iOS');
      }
      if (title === 'Apple iOS') {
        setPlat('Apple iOS');
      }
      if (title === 'Apple iOS') {
        setPlat('Apple iOS');
      }
    }

    if (currentFormIndex === 2) {
      if (title === 'No') {
        setHasDesigner(false);
      } else {
        setHasDesigner(true);
      }
    }

    setCurrentFormIndex((prev) => prev + 1);
  };

  const handleMultiSelection = (optimistic: number, pessimistic: number) => {
    if (!optimisticArray || !pessimisticArray) return;
    const tempOpt = [...optimisticArray, optimistic];
    const tempPes = [...pessimisticArray, pessimistic];
    setOptimisticArray(tempOpt);
    setPessimisticArray(tempPes);

    setCurrentFormIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    if (!optimisticArray || !pessimisticArray) return;
    const tempOpt = [...optimisticArray];
    const tempPes = [...pessimisticArray];
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

  return (
    <div className="flex pt-[280px] pb-16 bg-secondary w-full justify-between">
      <div className="flex w-full">
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
            currentIndex={currentFormIndex}
            title={forms[currentFormIndex].title}
            description={forms[currentFormIndex].description}
            setSelectedOption={(val) =>
              handleSingleSelection(
                val.option.optimisticHours ?? 0,
                val.option.pessimisticHours ?? 0,
                val.option.title
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
