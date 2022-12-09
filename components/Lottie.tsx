import { CSSProperties, useEffect, useRef } from 'react';

export function Lottie({
  src,
  className,
  style,
}: {
  src: string;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef(null);
  useEffect(() => {
    import('@lottiefiles/lottie-player');
  });

  return (
    <div className={`${className} pointer-events-none`}>
      <lottie-player ref={ref} src={src} speed="1" style={style} loop autoplay></lottie-player>
    </div>
  );
}
