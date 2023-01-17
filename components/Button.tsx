export function Button({
  children,
  className,
  backgroundColor,
  textColor,
}: {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
}) {
  const background = backgroundColor ?? 'highlight';
  const text = textColor ?? 'white';
  return (
    <button
      className={`${
        className || ''
      } bg-${background} inline-flex rounded-full text-${text} font-bold uppercase
      text-[14px] leading-[17px] px-8 py-3  whitespace-nowrap
      hover:bg-gradient-to-t from-[#f6c4a1] to-[#e97724] transition-all hover:duration-1000 ease-in-out
      `}
    >
      {children}
    </button>
  );
}
