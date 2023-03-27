import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Container } from './Container';
import { navLeft, navRight } from './headerLinks';

interface MobileHeaderProps {
  toggleShow: () => void;
}

export function MobileHeader() {
  const [showNavigation, setShowNavigation] = useState(false);

  const navLinks = navLeft.concat(navRight);

  return (
    <>
      {showNavigation && (
        <div className="bg-primary flex w-full h-[100vh] p-4">
          <div className="flex flex-col w-[40vw]">
            {navLinks.map((nav) => {
              return (
                <div key={'nav-' + nav.label} className="py-1">
                  <Link className="text-white font-semibold hover:font-bold" href={nav.href}>
                    {nav.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {!showNavigation && (
        <div className="w-full flex justify-end p-2">
          <button
            type="button"
            className="text-white"
            onClick={() => setShowNavigation((prev) => !prev)}
          >
            Expand menu
          </button>
        </div>
      )}
    </>
  );
}
