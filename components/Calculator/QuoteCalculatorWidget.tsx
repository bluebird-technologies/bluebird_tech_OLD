import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState } from 'react';
import animation from '../../public/lottie/quoteWidgetAnimation.json';
import { Checkmark } from './icons/Checkmark';
import { CalculatorContext, OptionWithRole } from './context/CalculatorContext';
import { calculateTotals, getAllRoles } from './data/Utility';

function QuoteCalculatorWidget() {
  const {
    platform,
    platformSize,
    uxLevel,
    hasDesigner,
    loginOptions,
    personalProfiles,
    connected,
    payments,
    admin,
    datesAndLocation,
  } = useContext(CalculatorContext);

  const [teamMembers, setTeamMembers] = useState<string[]>([]);
  const totals = calculateTotals({
    platform,
    platformSize,
    uxLevel,
    hasDesigner,
    loginOptions,
    personalProfiles,
    connected,
    payments,
    admin,
    datesAndLocation,
  });

  const optimisticTotal = totals.totalOptimistic;
  const pessimisticTotal = totals.totalPessimistic;

  useEffect(() => {
    const loginOptionsRolesAll: string[] = [];
    loginOptions.forEach((opt: OptionWithRole) => {
      if (opt.roles.length > 0) {
        opt.roles.forEach((val) => {
          loginOptionsRolesAll.push(val);
        });
      }
    });
    const paymentsRolesAll: string[] = [];
    payments.forEach((opt: OptionWithRole) => {
      if (opt.roles.length > 0) {
        opt.roles.forEach((val) => {
          paymentsRolesAll.push(val);
        });
      }
    });
    const adminRolesAll: string[] = [];
    admin.forEach((opt: OptionWithRole) => {
      if (opt.roles.length > 0) {
        opt.roles.forEach((val) => {
          adminRolesAll.push(val);
        });
      }
    });
    const datesAndLocationRolesAll: string[] = [];
    datesAndLocation.forEach((opt: OptionWithRole) => {
      if (opt.roles.length > 0) {
        opt.roles.forEach((val) => {
          datesAndLocationRolesAll.push(val);
        });
      }
    });

    const combineAndDisplayRoles = () => {
      const allRolesArr = [].concat(
        platform.roles,
        platformSize.roles,
        uxLevel.roles,
        hasDesigner.roles,
        loginOptionsRolesAll as [],
        personalProfiles.roles,
        connected.roles,
        paymentsRolesAll as [],
        adminRolesAll as [],
        datesAndLocationRolesAll as []
      );
      const roles = getAllRoles(allRolesArr);

      return roles;
    };

    const res = combineAndDisplayRoles();
    if (res) {
      setTeamMembers(res);
    }
  }, [
    platform,
    platformSize,
    uxLevel,
    hasDesigner,
    loginOptions,
    personalProfiles,
    connected,
    payments,
    admin,
    datesAndLocation,
  ]);

  return (
    <div className="bg-white max-h-[650px] min-w-[350px] w-full shadow-md overflow-scroll overflow-x-hidden scrollbar-hide">
      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-lightGrey text-lg italic">Title</div>
        <div className="text-lightGrey text-lg italic">Hours</div>
      </div>

      <div className="border-t border-lightGrey mx-8 mt-4" />

      {platform.title.length > 0 && (
        <SectionHours
          title="Platform"
          value={platform.title}
          hours={platform.optimisticHours ?? 0}
        />
      )}

      {platformSize.title.length > 0 && (
        <SectionHours
          title="Size"
          value={platformSize.title}
          hours={platformSize.optimisticHours ?? 0}
        />
      )}

      {hasDesigner.title.length > 0 && (
        <div className="flex flex-col justify-between mt-4 px-8">
          <div className="flex justify-start">
            <div className="text-lightGrey text-lg italic">Designer</div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-primary text-lg font-bold">{hasDesigner.title}</div>
          </div>
        </div>
      )}

      {uxLevel.title.length > 0 && (
        <SectionHours title="UX" value={uxLevel.title} hours={uxLevel.optimisticHours ?? 0} />
      )}

      {loginOptions.length > 0 && (
        <div className="flex flex-col justify-between mt-4 px-8">
          <div className="flex justify-start">
            <div className="text-lightGrey text-lg italic">Login</div>
          </div>
          {loginOptions.map((option: OptionWithRole) => {
            return (
              <div key={option.title} className="flex justify-between mt-4">
                <div className="text-primary text-lg font-bold">{option.title}</div>
                <div className="text-secondary text-lg font-bold">
                  {option.optimisticHours} hours
                </div>
              </div>
            );
          })}
        </div>
      )}

      {personalProfiles.title.length > 0 && (
        <SectionHours
          title="Profiles"
          value={personalProfiles.title}
          hours={personalProfiles.optimisticHours ?? 0}
        />
      )}

      {connected.title.length > 0 && (
        <SectionHours
          title="Connected"
          value={connected.title}
          hours={connected.optimisticHours ?? 0}
        />
      )}

      {payments.length > 0 && (
        <div className="flex flex-col justify-between mt-4 px-8">
          <div className="flex justify-start">
            <div className="text-lightGrey text-lg italic">Login</div>
          </div>
          {payments.map((option: OptionWithRole) => {
            return (
              <div key={option.title} className="flex justify-between mt-4">
                <div className="text-primary text-lg font-bold">{option.title}</div>
                <div className="text-secondary text-lg font-bold">
                  {option.optimisticHours} hours
                </div>
              </div>
            );
          })}
        </div>
      )}

      {admin.length > 0 && (
        <div className="flex flex-col justify-between mt-4 px-8">
          <div className="flex justify-start">
            <div className="text-lightGrey text-lg italic">Login</div>
          </div>
          {admin.map((option: OptionWithRole) => {
            return (
              <div key={option.title} className="flex justify-between mt-4">
                <div className="text-primary text-lg font-bold">{option.title}</div>
                <div className="text-secondary text-lg font-bold">
                  {option.optimisticHours} hours
                </div>
              </div>
            );
          })}
        </div>
      )}

      {datesAndLocation.length > 0 && (
        <div className="flex flex-col justify-between mt-4 px-8">
          <div className="flex justify-start">
            <div className="text-lightGrey text-lg italic">Login</div>
          </div>
          {datesAndLocation.map((option: OptionWithRole) => {
            return (
              <div key={option.title} className="flex justify-between mt-4">
                <div className="text-primary text-lg font-bold">{option.title}</div>
                <div className="text-secondary text-lg font-bold">
                  {option.optimisticHours} hours
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex flex-row justify-between mt-8 px-8">
        <div className="text-lightGrey text-lg underline">Total:</div>
      </div>

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-primary text-lg font-bold">Optimistic</div>
        <div className="text-secondary text-lg font-bold">{optimisticTotal} hours</div>
      </div>

      <div className="flex flex-row justify-between mt-4 px-8">
        <div className="text-primary text-lg font-bold">Pessimistic</div>
        <div className="text-secondary text-lg font-bold">{pessimisticTotal} hours</div>
      </div>

      <div className="mt-24">
        <Lottie animationData={animation} loop={true} />
      </div>
      {teamMembers.length > 0 && (
        <div className="px-8 py-8">
          <div className="text-primary  xl:text-2xl font-bold justify-center text-center mb-4">
            Your Team:
          </div>

          <div>
            {teamMembers.map((member, i) => {
              return (
                <div key={i} className="flex items-center justify-between">
                  <div className="text-lg font-medium">{member}</div>
                  <div className="h-8 w-8 text-highlight">
                    <Checkmark />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuoteCalculatorWidget;

interface SectionHoursProps {
  title: string;
  value: string;
  hours: number;
}

const SectionHours = ({ title, value, hours }: SectionHoursProps) => {
  return (
    <div className="flex flex-col justify-between mt-2 px-8">
      <div className="flex justify-start">
        <div className="text-lightGrey text-lg italic">{title}</div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-primary text-lg font-bold">{value}</div>
        <div className="text-secondary text-lg font-bold">{hours} hours</div>
      </div>
    </div>
  );
};
