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
        <div className="fixed  bg-primary flex w-full h-[100vh] p-4" style={{ zIndex: 50 }}>
          <div className="flex w-full flex-col">
            <div className="flex  w-full    items-center justify-between flex-row">
              <picture>
                <img className="h-32  w-32" src="/header/mobile-logo.svg" alt="logo" />
              </picture>
              <div className=" right-0 px-2">
                <button
                  type="button"
                  className="text-white text-4xl"
                  onClick={() => setShowNavigation((prev) => !prev)}
                >
                  X
                </button>
              </div>
            </div>
            <div className="flex flex-1 w-full items-center justify-center flex-col ">
              {navLinks.map((nav) => {
                return (
                  <div key={'nav-' + nav.label} className="py-1 mb-8">
                    <Link
                      className="text-white text-3xl font-semibold hover:font-bold"
                      href={nav.href}
                    >
                      {nav.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {!showNavigation && (
        <div
          className=" w-full flex  p-2 h-[80px] items-center  justify-between bg-inherit border-b border-secondary"
          style={{ zIndex: 50 }}
        >
          <picture>
            <img className="h-32 w-32" src="/header/mobile-logo.svg" alt="logo" />
          </picture>
          <div className="text-white">
            <button
              title="menu"
              type="button"
              className="text-white w-12 h-12"
              onClick={() => handleShowMenu()}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
