import React, { ReactNode } from 'react';
import SolutionIconRow from './SolutionIconRow';

interface IconLayoutProps {
  content: {
    contentType: 'text' | 'icon';
    icons: ReactNode[] | 'string'[];
  };
  amtIconsRowOne: number;
  rowTwoCenter: boolean;
}

function IconLayout({ content, amtIconsRowOne, rowTwoCenter }: IconLayoutProps) {
  const icons = content.icons;
  const contentType = content.contentType;
  const rowOneIcons = icons.slice(0, amtIconsRowOne);
  const rowTwoIcons = icons.slice(amtIconsRowOne);

  return (
    <div className="flex flex-col space-y-12">
      <SolutionIconRow icons={rowOneIcons} contentType={contentType} />
      <SolutionIconRow icons={rowTwoIcons} contentType={contentType} center={rowTwoCenter} />
    </div>
  );
}

export default IconLayout;
