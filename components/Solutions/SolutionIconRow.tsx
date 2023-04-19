import React, { ReactNode } from 'react';
import IconView from './IconView';
import TextView from './TextView';
import IconWithTextView from './IconWithTextView';
import { IconWithTextType } from '../../pages/offer';

export interface IconRowProps {
  title: string;
  icons: ReactNode[];
  center?: boolean;
  contentType: 'text' | 'icon' | 'iconwithtext';
}

function SolutionIconRow({ title, icons, center, contentType }: IconRowProps) {
  const titlesIcon = [
    'Web Development',
    'App Development',
    'UX/UI Design',
    'API & System Development',
  ];
  const titlesTextIcon = ['Product Management', 'Developer Outsourcing'];
  const titlesTextAndIcon = ['Infrastructure Development'];

  const rowClassTouchOuter = 'flex justify-between space-x-3 2xl:space-x-16 px-3';
  const rowClassFromInner = 'flex justify-center items-center space-x-3 2xl:space-x-0 px-2';

  return (
    <div>
      {/* {icons.map((icon, i) => {
        if (contentType === 'icon') {
          return <IconView key={i} icon={icon} />;
        }
        if (contentType === 'text') {
          return <TextView key={i} icon={icon} />;
        }
      })} */}
    </div>
  );
}

export default SolutionIconRow;
