import { MouseEventHandler } from 'react';

export function HoverButton({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  active?: boolean;
}) {
  const backgroundColor = active ? 'white' : 'highlight';
  const textColor = active ? 'highlight' : 'white';

  return (
    <button
      onClick={onClick}
      className={`bg-${backgroundColor} inline-flex rounded-full text-${textColor} font-bold uppercase
      text-3xl leading-[17px] px-8 py-3 whitespace-nowrap max-w-[400px] text-center items-center justify-center
      hover:shadow-xl transition-all hover:duration-150 ease-in-out h-[75px]
      `}
    >
      {children}
    </button>
  );
}
