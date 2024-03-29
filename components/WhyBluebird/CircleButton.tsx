import React, { MouseEventHandler } from 'react';

interface CircleButtonProps {
  icon: React.ReactNode;
  text: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}

export function CircleButton({ icon, text, disabled, onClick }: CircleButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className="h-[70px]">
      <div className="flex justify-start space-x-3 text-white group h-full">
        <div className="w-[50px] sm:w-[70px] xl:w-[100px] 2xl:w-[90px]">{icon}</div>
        <div className="flex flex-col h-full justify-center items-center text-lg sm:text-2xl lg:text-4xl font-bold uppercase group-hover:scale-110">
          {text}
        </div>
      </div>
    </button>
  );
}
