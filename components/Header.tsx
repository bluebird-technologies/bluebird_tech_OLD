import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Container } from './Container';
import { navLeft, navRight } from './headerLinks';
import { useRouter } from 'next/router';

function NavItem({ label, href }: { label: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const { pathname } = useRouter();

  const activeStyle =
    'text-white p-2 font-bold text-[14px] leading-[17px] uppercase whitespace-nowrap';
  const inactiveStyle =
    'text-white p-2 hover:font-bold transition text-[14px] leading-[17px] font-medium uppercase whitespace-nowrap';

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
      className={pathname == href ? activeStyle : inactiveStyle}
    >
      {label}
    </a>
  );
}

export function Header() {
  return (
    <header className="mt-[40px] w-full">
      <div className="hidden md:flex lg:hidden w-full my-1 justify-center">
        <div className="relative w-[7.5rem] h-20">
          <div className="absolute top-0 left-0 z-10">
            <Link href="/">
              <picture>
                <source srcSet="/header/logo.svg" type="image/svg+xml" />
                <img
                  src="/header/logo.svg"
                  alt="Bluebird"
                  className="w-[7.5rem] hover:cursor-pointer"
                />
              </picture>
            </Link>
          </div>
        </div>
      </div>
      <Container wide center row>
        <nav className="flex flex-1 justify-around mt-3">
          {navLeft.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link href="/">
            <picture>
              <source srcSet="/header/logo.svg" type="image/svg+xml" />
              <img
                src="/header/logo.svg"
                alt="Bluebird"
                className="w-[7.5rem] mx-10 hover:cursor-pointer"
              />
            </picture>
          </Link>
        </div>
        <nav className="flex flex-1 justify-around mt-3">
          {navRight.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </nav>
      </Container>
    </header>
  );
}
