import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { Button } from './Button';
import animation from '../public/lottie/724c861b-ff93-4c29-8e91-ab091ab26774.json';
import { Checkbox } from './Solutions/Checkbox';

interface Props {
  platformType: string;
}

function Calculator({ platformType }: Props) {
  const checkBoxItems = [
    {
      title: 'Front End Developer',
      checked: false,
    },
    {
      title: 'Backend Developer',
      checked: false,
    },
    {
      title: 'Mobile Developer',
      checked: false,
    },
    {
      title: 'Product Manager',
      checked: false,
    },
    {
      title: 'Graphic Designer',
      checked: false,
    },
  ];

  const [items, setItems] = useState(checkBoxItems);
  const updateChecked = (index: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => {
        if (i === index) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };

  return (
    <div className="bg-white h-[450px]  py-4 px-2 w-[350px]">
      <div className="h-[400px] overflow-y-auto overflow-x-hidden ">
        <div className="flex flex-1 flex-row border justify-between pb-1  border-t-0 border-x-0 border-b-gray">
          <label className="text-gray italic">Platform</label>
          <input
            type="text"
            placeholder="platform"
            className="outline-none placeholder-transparent text-right w-2/3  text-primary font-bold underline"
            value={platformType}
          />
        </div>
        <div className=" pb-1 w-full mt-4 flex flex-row justify-between ">
          <div className="flex flex-1 flex-row border justify-between pb-1  border-t-0 border-x-0 border-b-gray">
            <label className="text-gray italic">Title</label>
            <input
              type="text"
              placeholder="title"
              className="outline-none text-right w-3/5 placeholder-transparent text-primary underline"
            />
          </div>
          <div className="flex flex-1 flex-row  border justify-between pb-1  border-t-0 border-x-0 ml-2 border-b-gray">
            <label className="text-gray italic">Time</label>
            <input
              type="text"
              placeholder="time"
              className="outline-none placeholder-transparent text-right w-3/5 text-primary underline"
            />
          </div>
        </div>
        <h2 className="text-gray text-base font-medium mt-4 border-b w-12 ">Total:</h2>
        <div>
          <div className="flex flex-row justify-between mt-4">
            <p className="text-primary text-base">Optimistic</p>
            <p className="text-primary text-base">0 hours</p>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <p className="text-primary text-base">Pessimistic</p>
            <p className="text-primary text-base">0 hours</p>
          </div>
          <div className="flex flex-1 justify-center mt-8 items-center">
            <Button>Calculate</Button>
          </div>
          <Lottie animationData={animation} style={{}} loop={true} />
        </div>
        <div className="mt-4">
          <h1 className="text-primary font-semibold text-center">Your Team:</h1>
          {items.map((item, key) => (
            <Checkbox
              title={item.title}
              checked={item.checked}
              key={key}
              onPressHandler={() => updateChecked(key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
