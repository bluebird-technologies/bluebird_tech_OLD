import React, { ReactNode } from 'react';

export default function IconWithTextView({
  icon,
  iconMobile,
  iconText,
}: {
  icon: ReactNode;
  iconMobile: ReactNode;
  iconText: string;
}) {
  function getLineOne(text: string) {
    if (text === 'Transport Systems') {
      return 'Transport';
    }
    if (text === 'Logistic Systems') {
      return 'Logistic';
    }
    if (text === 'Banking Solutions') {
      return 'Banking';
    }
    if (text === 'Holistic IT Solutions') {
      return 'Holistic IT';
    }
    if (text === 'Services Development') {
      return 'Services';
    }
    if (text === 'Database Development') {
      return 'Database';
    }
  }

  function getLineTwo(text: string) {
    if (text === 'Transport Systems') {
      return 'Systems';
    }
    if (text === 'Logistic Systems') {
      return 'Systems';
    }
    if (text === 'Banking Solutions') {
      return 'Solutions';
    }
    if (text === 'Holistic IT Solutions') {
      return 'Solutions';
    }
    if (text === 'Services Development') {
      return 'Development';
    }
    if (text === 'Database Development') {
      return 'Development';
    }
  }

  return (
    <div className="cursor-pointer flex flex-col text-center justify-center items-center h-44 opacity-100 md:opacity-60 hover:opacity-100 md:hover:scale-105 px-4 lg:px-0">
      {/* Desktop view */}
      <div className="hidden lg:flex h-16 flex-1 py-4">{icon}</div>
      <div className="hidden lg:block text-white mt-3 text-xl">{getLineOne(iconText)}</div>
      <div className="hidden lg:block text-white mt-1 text-xl">{getLineTwo(iconText)}</div>
      {/* Mobile View */}
      <div className="lg:hidden flex h-16 flex-1 py-4 px-3">{iconMobile}</div>
      <div className="lg:hidden block text-[#1E2B3B] font-medium mt-3 text-sm">{iconText}</div>
    </div>
  );
}
