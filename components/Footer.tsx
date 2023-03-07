import React from 'react';
import FacebookIcon from '../public/facebook.svg';
import LinkedinIcon from '../public/linkedin.svg';

const Footer = () => {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Why Bluebird', link: '/why-bluebird' },
    { name: 'What we offer', link: '/what-we-offer' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Quote Calculator', link: '/quote-calculator' },
    { name: 'Contact', link: '/contact' },
  ];
  return (
    <div className="w-full h-full flex flex-1 bg-grey py-20 px-32">
      <div className="flex items-center w-full">
        <picture>
          <source srcSet="/home/logo.svg" type="image/svg+xml" />
          <img src="/home/logo.svg" alt="Bluebird" className="w-[121px] mx-10" />
        </picture>
        <div className="text-[18px] leading-[21px] ml-4">
          <div className="border-b-2 border-primary pb-6 mb-6 flex items-end">
            <div>
              <div className="font-semibold uppercase  mb-1">Find us at</div>
              <div className="font-normal">
                Fujairah Creative City Free Zone
                <br /> Creative Tower
                <br /> Fujairah
                <br /> United Arab Emirates
                <br /> PO Box 4422
              </div>
            </div>
            <div className="text-highlight text-[22px] mx-10 font-bold mb-14">and</div>
            <div className="font-normal">
              Cedarwood House
              <br /> Ballywoods Office Park
              <br /> 33 Ballyclare Drive <br />
              Bryanston, Johannesburg
              <br />
              South Africa
              <br /> 2191
            </div>
          </div>
          <div>
            <div className="font-semibold uppercase  mb-1">Contact us</div>
            <div className="font-normal">info@bluebird.tech</div>
          </div>
        </div>
        <div className="flex-1">
          <ol className="text-primary font-semibold text-[14px] leading-[20px] text-right uppercase">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.link}
                    className="uppercase font-semibold text-end hover:text-secondary"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ol>
          <div className="flex flex-row justify-end mt-2">
            <a href="#">
              <LinkedinIcon className="mr-2" />
            </a>
            <a href="#">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
