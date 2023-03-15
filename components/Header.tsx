import { useEffect, useRef, useState } from 'react';
import { Container } from './Container';

const navLeft = [
  { label: 'Home', href: '/' },
  { label: 'Why Bluebird', href: '/why' },
  { label: 'What we offer', href: '/offer' },
];

const navRight = [
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Quote calculator', href: '/calculator' },
  { label: 'Contact us', href: '/contact' },
];

function NavItem({ label, href }: { label: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);

  // ensure element do not jump when hovering/bold
  useEffect(() => {
    if (ref.current?.offsetWidth) {
      setWidth(Math.ceil(ref.current?.offsetWidth));
    }
  }, [label]);

  return (
    <a
      ref={ref}
      href={href}
      style={{ maxWidth: width }}
      className="text-white p-2 hover:font-bold transition text-[14px] leading-[17px] font-medium uppercase whitespace-nowrap"
    >
      {label}
    </a>
  );
}

export function Header() {
  return (
    <header className="mt-[40px] w-full">
      <Container wide center row>
        <nav className="flex flex-1 justify-around mt-3">
          {navLeft.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </nav>
        <picture>
          <source srcSet="/header/logo.svg" type="image/svg+xml" />
          <img src="/header/logo.svg" alt="Bluebird" className="w-[121px] mx-10" />
        </picture>
        <nav className="flex flex-1 justify-around mt-3">
          {navRight.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </nav>
      </Container>
    </header>
  );
}
