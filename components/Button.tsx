import { MouseEventHandler } from 'react';

export function Button({
  children,
  className,
  onClick,
  active,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
  active?: boolean;
}) {
  const backgroundColor = active ? 'white' : 'highlight';
  const textColor = active ? 'highlight' : 'white';

  return (
    <button
      onClick={onClick}
      className={`${
        className || ''
      } bg-${backgroundColor} inline-flex rounded-full text-${textColor} font-bold uppercase
      text-[14px] leading-[17px] px-8 py-3  whitespace-nowrap
      hover:bg-gradient-to-t from-[#f6c4a1] to-[#e97724] transition-all hover:duration-1000 ease-in-out
      `}
    >
      {children}
    </button>
  );
}
