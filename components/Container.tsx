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
    <div className="flex w-full">
      <div
        className={`relative mx-auto ${wide ? 'max-w-[1280px]' : 'max-w-[1080px]'} ${
          center ? 'items-center' : 'items-start'
        } flex w-full px-8 ${row ? 'flex-row' : 'flex-col'}`}
      >
        {children}
      </div>
    </div>
  );
}
