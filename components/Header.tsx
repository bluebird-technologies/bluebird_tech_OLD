import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Container } from './Container';
import { navLeft, navRight } from './headerLinks';

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
      className="whitespace-nowrap p-2 text-[12px] font-medium uppercase leading-[17px] text-white transition hover:font-bold lg:text-[14px]"
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
        <Link href="/">
          <picture>
            <source srcSet="/header/logo.svg" type="image/svg+xml" />
            <img
              src="/header/logo.svg"
              alt="Bluebird"
              className="w-[121px] mx-10 hover:cursor-pointer"
            />
          </picture>
        </Link>
        <nav className="flex flex-1 justify-around mt-3">
          {navRight.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </nav>
      </Container>
    </header>
  );
}
