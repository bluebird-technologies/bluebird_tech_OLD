export function Container({
  children,
  wide,
  center,
  row,
}: {
  children: React.ReactNode;
  wide?: boolean;
  center?: boolean;
  row?: boolean;
}) {
  return (
    <div className="w-full flex relative">
      <div
        className={`mx-auto ${wide ? 'max-w-[1280px]' : 'max-w-[1080px]'} ${
          center ? 'items-center' : 'items-start'
        } px-8 w-full flex ${row ? 'flex-row' : 'flex-col'}`}
      >
        {children}
      </div>
    </div>
  );
}
