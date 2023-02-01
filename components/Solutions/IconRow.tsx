import React from 'react';
import IconView from './IconView';

interface IconRowProps {
  icons: any[];
  center?: boolean;
}

function IconRow({ icons, center }: IconRowProps) {
  const rowClassTouchOuter = 'flex justify-between space-x-16';
  const rowClassFromInner = 'flex justify-center items-center';

  return (
    <div className={center ? rowClassFromInner : rowClassTouchOuter}>
      {icons.map((icon, i) => {
        return <IconView key={i} icon={icon} />;
      })}
    </div>
  );
}

export default IconRow;
