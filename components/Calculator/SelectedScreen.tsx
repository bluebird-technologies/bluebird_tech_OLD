import React, { MouseEventHandler, ReactElement } from 'react';

interface ScreenProps {
  screen: {
    title: string;
    description: string;
    buttons: {
      title: string;
      icon: ReactElement;
      onclick: () => void;
    }[];
  };
}

function SelectedScreen({ screen }: ScreenProps) {
  return (
    <div className="">
      <h3 className="text-white text-3xl font-medium ">{screen.title}</h3>
      <div className="w-5/6 mt-8">
        <span className="text-white text-base  ">{screen.description}</span>
      </div>
      <div className="flex flex-row items-center justify-between w-5/6 mt-6">
        {screen.buttons.map((item, key) => (
          <div onClick={item.onclick} className="flex flex-col items-center " key={key}>
            <div className="transition transform hover:scale-110 motion-reduce:transition-none motion-reduce:hover:transform-none">
              {item.icon}
            </div>
            <div className="flex -mt-6 items-center">
              <span className="text-center text-white font-medium">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedScreen;
