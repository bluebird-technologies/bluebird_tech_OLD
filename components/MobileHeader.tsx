import Link from 'next/link';
import { useState } from 'react';
import { navLeft, navRight } from './headerLinks';
import MenuIcon from './Header/HamburgerIcon';
import { useRouter } from 'next/router';

export function MobileHeader() {
  const [showNavigation, setShowNavigation] = useState(false);
  const { pathname } = useRouter();

  const activeStyle = 'text-white text-[30px] font-bold';
  const inactiveStyle = 'text-white text-[27px] font-normal';

  const handleShowMenu = () => {
    setShowNavigation((prev) => !prev);
    scrollTo(0, 0);
  };

  const navLinks = navLeft.concat(navRight);

  return (
    <>
      {showNavigation && (
        <div className="fixed bg-primary w-full h-[100vh] p-4" style={{ zIndex: 50 }}>
          <div className="flex justify-between h-12 w-full">
            <picture>
              <img className="h-12" src="/header/mobile-logo.svg" alt="logo" />
            </picture>
            <div className="mt-1 mr-1" onClick={() => setShowNavigation((prev) => !prev)}>
              <picture>
                <img className="text-white h-8 " src="/header/exit-cross.svg" alt="cross" />
              </picture>
            </div>
          </div>

          <div className="flex w-full justify-center items-center">
            <div className="flex flex-col text-center justify-center items-center space-y-3 h-[80vh]">
              {navLinks.map((nav) => {
                return (
                  <div key={'nav-' + nav.label} className="">
                    <Link
                      className={pathname == nav.href ? activeStyle : inactiveStyle}
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
          className="fixed w-full flex justify-between p-4 h-[3.5rem] bg-primary"
          style={{ zIndex: 50 }}
        >
          <div
            className="absolute bg-primary h-[1rem] mt-[3.5rem]"
            style={{
              top: 0,
              left: '-11%',
              width: '120%',
              borderBottomLeftRadius: '50%',
              borderBottomRightRadius: '50%',
              zIndex: 40,
            }}
          />

          <div className="h-12">
            <picture>
              <img className="h-12" src="/header/mobile-logo.svg" alt="logo" />
            </picture>
          </div>
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
