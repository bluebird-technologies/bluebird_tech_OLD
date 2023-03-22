import React, { useContext, useEffect, useState } from 'react';
import FormCard from '../../components/Calculator/FormCard';
import { FormConfigs } from '../../components/Calculator/data/FormConfigs';
import { CalculatorContext } from './context/CalculatorContext';
import FormCardMultiple from './FormCardMultiple';
import {
  getDesigner,
  getLoginOptions,
  getPlatform,
  getPlatformSize,
  getUxLevel,
} from './data/Utility';

import { TFormOption } from './FormCard';

export function FormSection() {
  const {
    optimisticArray,
    setOptimisticArray,
    pessimisticArray,
    setPessimisticArray,
    hasDesigner,
    setHasDesigner,
    setPlatform,
    setPlatformSize,
    setUxLevel,
    setLoginOptions,
    setPersonalProfiles,
    setConnected,
    setPayments,
    setAdmin,
    setDatesAndLocation,
  } = useContext(CalculatorContext);

  const forms = FormConfigs;
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const multiSelectionIndexes = [4, 7, 8, 9];
  const hasBackButtonIndexes = [1, 2, 3, 4, 5, 6];

  const handleSingleSelection = (optimistic: number, pessimistic: number, option: TFormOption) => {
    // storing the latest selection in the array, so that it keeps track of each addition and easily
    // remove it on back button
    if (!optimisticArray || !pessimisticArray) return;
    const tempOpt = [...optimisticArray, optimistic];
    const tempPes = [...pessimisticArray, pessimistic];
    setOptimisticArray(tempOpt);
    setPessimisticArray(tempPes);

    // need to access setters from here, so cannot move them to the util function
    if (currentFormIndex === 0) {
      const res = getPlatform(option.title as 'Apple iOS' | 'Android' | 'Web' | 'Multi-Platform');
      setPlatform({
        title: res.title,
        roles: res.roles,
      });
    }
    if (currentFormIndex === 1) {
      const res = getPlatformSize(option.title as 'Small' | 'Medium' | 'Large');
      setPlatformSize({
        title: res.title,
        roles: res.roles,
      });
    }
    if (currentFormIndex === 2) {
      const res = getDesigner(option.title as 'Yes' | 'No');
      setHasDesigner({
        title: res.title,
        roles: res.roles,
      });
    }
    if (currentFormIndex === 3) {
      const res = getUxLevel(option.title as 'MVP' | 'Stock' | 'Beautiful', hasDesigner);
      setUxLevel({
        title: res.title,
        roles: res.roles,
      });
    }
    // if (currentFormIndex === 5) {
    //   const res = getPlatformSize(option.title as 'Yes' | 'No' | 'Not sure');
    //   setUxLevel({
    //     title: res.title,
    //     roles: res.roles,
    //   });
    // }
    // if (currentFormIndex === 6) {
    //   const res = getPlatformSize(option.title as 'Yes' | 'No' | 'Not sure');
    //   setUxLevel({
    //     title: res.title,
    //     roles: res.roles,
    //   });
    // }

    setCurrentFormIndex((prev) => prev + 1);
  };

  const handleMultiSelection = (optimistic: number, pessimistic: number, selection: string[]) => {
    if (!optimisticArray || !pessimisticArray) return;
    const tempOpt = [...optimisticArray, optimistic];
    const tempPes = [...pessimisticArray, pessimistic];
    setOptimisticArray(tempOpt);
    setPessimisticArray(tempPes);

    if (currentFormIndex === 4) {
      const res = getLoginOptions({ selection });
      setLoginOptions(res);
    }

    if (currentFormIndex === 7) {
      const res = getLoginOptions({ selection });
      setLoginOptions(res);
    }

    if (currentFormIndex === 8) {
      const res = getLoginOptions({ selection });
      setLoginOptions(res);
    }

    if (currentFormIndex === 9) {
      const res = getLoginOptions({ selection });
      setLoginOptions(res);
    }

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
            goBack={() => console.log('TODO add back for multi')}
            submitSelection={({ optimisticHours, pessimisticHours, selection }) =>
              handleMultiSelection(optimisticHours, pessimisticHours, selection)
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
                val.option
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
