import React from 'react';
import FacebookIcon from '../public/facebook.svg';
import LinkedinIcon from '../public/linkedin.svg';

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-1 bg-grey py-20 px-12 lg:px-32">
      <div className="flex w-full">
        <picture className="hidden lg:block">
          <source srcSet="/home/logo.svg" type="image/svg+xml" />
          <img src="/home/logo.svg" alt="Bluebird" className="w-[121px] mx-10" />
        </picture>
        <div className="text-[18px] leading-[21px] ml-4">
          <div className="lg:border-b-2 border-primary pb-6 mb-6 flex flex-col lg:flex lg:flex-row lg:items-end ">
            <AddressOne />
            <div className="text-highlight text-[22px] lg:mx-10 font-bold lg:mb-14 py-6 lg:py-0">
              and
            </div>
            <AddressTwo />
          </div>
          <div>
            <div className="font-semibold uppercase mb-1">Contact us</div>
            <div className="font-normal">info@bluebird.tech</div>
          </div>
        </div>
        <LinksSections />
      </div>
    </div>
  );
};

export default Footer;

const AddressOne = () => {
  return (
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
  );
};

const AddressTwo = () => {
  return (
    <div className="font-normal">
      Cedarwood House
      <br /> Ballywoods Office Park
      <br /> 33 Ballyclare Drive <br />
      Bryanston, Johannesburg
      <br />
      South Africa
      <br /> 2191
    </div>
  );
};

const LinksSections = () => {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Why Bluebird', link: '/why' },
    { name: 'What we offer', link: '/offer' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Quote Calculator', link: '/quote-calculator' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <div className="hidden md:flex flex-col flex-1 min-w-[210px] justify-end">
      <ol className="text-primary font-semibold text-[14px] leading-[20px] text-right uppercase">
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} className="uppercase font-semibold text-end hover:text-secondary">
                {item.name}
              </a>
            </li>
          );
        })}
      </ol>
      <div className="flex flex-row justify-end mt-4">
        <a href="https://www.linkedin.com/company/bluebirddev/">
          <LinkedinIcon className="mr-4" />
        </a>
        <a href="https://www.facebook.com/BluebirdDevelopment">
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
};
