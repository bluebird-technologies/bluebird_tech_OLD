import React, { useContext, useState } from 'react';
import { Header } from '../../components/Header';
// import Calculator from '../../components/Calculator/QuoteCalculator';
// import { CalculatorContext } from '../../contexts/calculatorContext';
import FormCard from '../../components/Calculator/FormCard';
import { FormConfigs } from '../../components/Calculator/data/FormConfigs';
import { CalculatorContext } from '../../components/Calculator/context/CalculatorContext';
import { useRouter } from 'next/router';

function QuoteWizard() {
  const router = useRouter();
  const forms = FormConfigs;
  const [currentFormIndex, setCurrentFormIndex] = useState<number>(0);

  const { optimisticHourTracker } = useContext(CalculatorContext);

  const handleIterateToNextForm = (optimistic: number, pessimistic: number) => {
    // todo maintain 2 arrays of hours in the context
    console.log(optimistic, pessimistic);
    setCurrentFormIndex((prev) => prev + 1);
  };

  return (
    <CalculatorContext.Provider value={{ optimisticHourTracker }}>
      <div className="flex flex-col">
        <div className="py-3">{optimisticHourTracker}</div>
        <button
          className="w-[200px] h-12 font-bold text-xl text-dark transition delay-100 bg-white hover:-translate-y-1 hover:scale-95  hover:border-[2px] hover:border-black duration-300 rounded-full "
          type="button"
          onClick={() => setOptimisticHourTracker('changed')}
        >
          click me
        </button>
        <button
          onClick={() => router.push('/calculator')}
          type="button"
          className="w-[200px] h-12 font-bold text-xl text-dark transition delay-100 bg-white hover:-translate-y-1 hover:scale-95  hover:border-[2px] hover:border-black duration-300 rounded-full "
        >
          navigate
        </button>
      </div>
      {/* <div className="flex-1 flex flex-col h-full">
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
      </div> */}
    </CalculatorContext.Provider>
  );
}

export default QuoteWizard;
