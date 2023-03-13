import React, { ReactElement, useState } from 'react';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import Calculator from '../../components/QuoteCalculator';
import { CalculatorContext, CalculatorContextType } from '../../contexts/calculatorContext';
import { useRouter } from 'next/router';
import FormCard from '../../components/Calculator/FormCard';
import { FormConfigs } from '../../components/Calculator/data/FormConfigs';

function QuoteWizard() {
  const forms = FormConfigs;
  const [currentFormIndex, setCurrentFormIndex] = useState<number>(0);

  const [calculatorValue, setCalculatorValue] = useState<CalculatorContextType>({
    platform: '',
    optimisticHours: 0,
    pessimisticHours: 0,
    resources: [],
  });

  return (
    <CalculatorContext.Provider value={calculatorValue}>
      <div className="flex-1 flex flex-col h-full">
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
              formIndex={currentFormIndex}
              title={forms[currentFormIndex].title}
              description={forms[currentFormIndex].description}
              setSelectedOption={(val) => console.log(val)}
              options={forms[currentFormIndex].options}
            />
          </div>

          <div className="w-[470px] mr-32">
            <Calculator />
          </div>
        </div>
      </div>
    </CalculatorContext.Provider>
  );
}

export default QuoteWizard;
