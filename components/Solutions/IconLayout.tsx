import React from 'react';
import IconRow from './IconRow';

interface IconLayoutProps {
  icons: any[];
  amtIconsRowOne: number;
  rowTwoCenter: boolean;
}

function IconLayout({ icons, amtIconsRowOne, rowTwoCenter }: IconLayoutProps) {
  const rowOneIcons = icons.slice(0, amtIconsRowOne);
  const rowTwoIcons = icons.slice(amtIconsRowOne);

  return (
    <div className="flex flex-col space-y-8">
      <IconRow icons={rowOneIcons} />
      <IconRow icons={rowTwoIcons} center={rowTwoCenter} />
    </div>
  );
}

export default IconLayout;
