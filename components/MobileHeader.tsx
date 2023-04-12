import Link from 'next/link';
import { useState } from 'react';
import { navLeft, navRight } from './headerLinks';
import MenuIcon from './Header/HamburgerIcon';

export function MobileHeader() {
  const [showNavigation, setShowNavigation] = useState(false);

  const handleShowMenu = () => {
    setShowNavigation((prev) => !prev);
    scrollTo(0, 0);
  };

  const navLinks = navLeft.concat(navRight);

  return (
    <>
      {showNavigation && (
        <div className="fixed bg-primary flex w-full h-[100vh] p-4" style={{ zIndex: 50 }}>
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
          <div className="absolute right-0 px-2">
            <button
              type="button"
              className="text-white text-4xl"
              onClick={() => setShowNavigation((prev) => !prev)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {!showNavigation && (
        <div
          className="fixed w-full flex justify-end p-2 h-[60px] bg-primary border-b border-secondary"
          style={{ zIndex: 50 }}
        >
          <div className="text-white">
            <button type="button" className="text-white w-12 h-12" onClick={() => handleShowMenu()}>
              <MenuIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
