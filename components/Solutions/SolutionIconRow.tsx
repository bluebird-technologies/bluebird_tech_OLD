import React, { ReactNode } from 'react';
import IconView from './IconView';
import TextView from './TextView';

interface IconRowProps {
  icons: ReactNode[];
  center?: boolean;
  contentType: 'text' | 'icon';
}

function SolutionIconRow({ icons, center, contentType }: IconRowProps) {
  const rowClassTouchOuter = 'flex justify-between space-x-3 2xl:space-x-16 px-3';
  const rowClassFromInner = 'flex justify-center items-center space-x-3 2xl:space-x-0 px-2';

  return (
    <div className={center ? rowClassFromInner : rowClassTouchOuter}>
      {icons.map((icon, i) => {
        if (contentType === 'icon') {
          return <IconView key={i} icon={icon} />;
        }
        if (contentType === 'text') {
          return <TextView key={i} icon={icon} />;
        }
      })}
    </div>
  );
}

export default SolutionIconRow;
