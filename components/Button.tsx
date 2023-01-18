export function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`${
        className || ''
      } bg-highlight inline-flex rounded-full text-white font-bold uppercase
      text-[14px] leading-[17px] px-8 py-3  whitespace-nowrap
      hover:bg-gradient-to-t from-[#f6c4a1] to-[#e97724] transition-all hover:duration-1000 ease-in-out
      `}
    >
      {children}
    </button>
  );
}
