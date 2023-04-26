import React, { useContext, useEffect, useState } from 'react';
import FormCard from '../../components/Calculator/FormCard';
import { FormConfigs } from '../../components/Calculator/data/FormConfigs';
import { CalculatorContext } from './context/CalculatorContext';
import FormCardMultiple from './FormCardMultiple';
import {
  getAdmin,
  getConnected,
  getDates,
  getDesigner,
  getLoginOptions,
  getPayments,
  getPersonalProfiles,
  getPlatform,
  getPlatformSize,
  getUxLevel,
} from './data/Utility';
import { TFormOption } from './FormCard';

interface Props {
  setShowCalc: (val: boolean) => void;
}

export function FormSection({ setShowCalc }: Props) {
  const {
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
  const hasBackButtonIndexes = [1, 2, 3, 5, 6];

  const handleSingleSelection = (option: TFormOption) => {
    // need to access setters from here, so cannot move them to the util function
    if (currentFormIndex === 0) {
      const res = getPlatform(option.title as 'Apple iOS' | 'Android' | 'Web' | 'Multi-Platform');
      setPlatform({
        title: res.title,
        roles: res.roles,
        optimisticHours: res.optimisticHours,
        pessimisticHours: res.pessimisticHours,
      });
    }
    if (currentFormIndex === 1) {
      const res = getPlatformSize(option.title as 'Small' | 'Medium' | 'Large');
      setPlatformSize({
        title: res.title,
        roles: res.roles,
        optimisticHours: res.optimisticHours,
        pessimisticHours: res.pessimisticHours,
      });
    }
    if (currentFormIndex === 2) {
      const res = getDesigner(option.title as 'Yes' | 'No');
      setHasDesigner({
        title: res.title,
        roles: res.roles,
        optimisticHours: res.optimisticHours,
        pessimisticHours: res.pessimisticHours,
      });
    }
    if (currentFormIndex === 3) {
      const designerBool = hasDesigner.title === 'Yes' ? true : false;
      const res = getUxLevel(option.title as 'MVP' | 'Stock' | 'Beautiful', designerBool);
      setUxLevel({
        title: res.title,
        roles: res.roles,
        optimisticHours: res.optimisticHours,
        pessimisticHours: res.pessimisticHours,
      });
    }
    if (currentFormIndex === 5) {
      const res = getPersonalProfiles(option.title as 'Yes' | 'No' | 'Not sure');
      setPersonalProfiles({
        title: res.title,
        roles: res.roles,
        optimisticHours: res.optimisticHours,
        pessimisticHours: res.pessimisticHours,
      });
    }
    if (currentFormIndex === 6) {
      const res = getConnected(option.title as 'Yes' | 'No' | 'Not sure');
      setConnected({
        title: res.title,
        roles: res.roles,
        optimisticHours: res.optimisticHours,
        pessimisticHours: res.pessimisticHours,
      });
    }

    setCurrentFormIndex((prev) => prev + 1);
  };

  const handleMultiSelection = (selection: string[]) => {
    if (currentFormIndex === 4) {
      console.log(selection);

      const res = getLoginOptions({ selection });
      setLoginOptions(res);
    }

    if (currentFormIndex === 7) {
      const res = getPayments({ selection });
      setPayments(res);
    }

    if (currentFormIndex === 8) {
      const res = getAdmin({ selection });
      setAdmin(res);
    }

    if (currentFormIndex === 9) {
      const res = getDates({ selection });
      setDatesAndLocation(res);
    }

    if (currentFormIndex !== 9) {
      setCurrentFormIndex((prev) => prev + 1);
    } else {
      setShowCalc(true);
    }
  };

  const handleBack = () => {
    if (currentFormIndex === 1) {
      setPlatform({ title: '', roles: [] });
    }
    if (currentFormIndex === 2) {
      setPlatformSize({ title: '', roles: [] });
    }
    if (currentFormIndex === 3) {
      setHasDesigner({ title: '', roles: [] });
    }
    if (currentFormIndex === 4) {
      setUxLevel({ title: '', roles: [] });
    }
    if (currentFormIndex === 5) {
      setLoginOptions([]);
    }
    if (currentFormIndex === 6) {
      setPersonalProfiles({ title: '', roles: [] });
    }
    if (currentFormIndex === 7) {
      setConnected({ title: '', roles: [] });
    }
    if (currentFormIndex === 8) {
      setPayments([]);
    }
    if (currentFormIndex === 9) {
      setAdmin([]);
    }
    // never need to clear the last option, as you cant back after that

    setCurrentFormIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const resetFormState = () => {
      // individual resets
      setDatesAndLocation([]);
      setAdmin([]);
      setPayments([]);
      setLoginOptions([]);
      setHasDesigner({ title: '', roles: [] });
      setPlatform({ title: '', roles: [] });
      setPlatformSize({ title: '', roles: [] });
      setUxLevel({ title: '', roles: [] });
      setPersonalProfiles({ title: '', roles: [] });
      setConnected({ title: '', roles: [] });
    };
    if (currentFormIndex === 0) {
      resetFormState();
    }
  }, [
    currentFormIndex,
    setPlatform,
    setPlatformSize,
    setUxLevel,
    setHasDesigner,
    setLoginOptions,
    setPersonalProfiles,
    setConnected,
    setPayments,
    setAdmin,
    setDatesAndLocation,
  ]);

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
            goBack={() => handleBack()}
            submitSelection={({ selection }) => handleMultiSelection(selection)}
          />
        )}

        {!multiSelectionIndexes.includes(currentFormIndex) && (
          <FormCard
            currentIndex={currentFormIndex}
            title={forms[currentFormIndex].title}
            description={forms[currentFormIndex].description}
            setSelectedOption={(val) => handleSingleSelection(val.option)}
            backButton={hasBackButtonIndexes.includes(currentFormIndex)}
            goBack={() => handleBack()}
            options={forms[currentFormIndex].options}
          />
        )}
      </div>
    </div>
  );
}
