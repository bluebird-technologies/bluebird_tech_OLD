import React from 'react';
import BluebirdSvg from '../public/contact/bluebird.svg';

const Footer = () => {
  return (
    <footer className="flex flex-row flex-1 items-center justify-around">
      <div className="flex flex-1  my-4 items-center  flex-row ">
        <BluebirdSvg className="w-[150px]  h-[150px]" />
        <div className="ml-10">
          <div className="flex flex-1 my-4 items-center  flex-row ">
            <div className="w-[250px]">
              <h1 className="text-primary font-bold">FIND US AT</h1>
              <h3 className="text-primary">
                Fujairah Creative City Free Zone Creative Tower Fujairah, United Arab Emirates PO
                Box 4422
              </h3>
            </div>
            <div className="mx-5">
              <h3 className="text-highlight font-bold text-lg">and</h3>
            </div>
            <div className="w-[270px]">
              <h3 className="text-primary">
                Cedarwood House Ballywoods Office Park 33 Ballyclare Drive Bryanston Johannesburg
                South Africa 2191
              </h3>
            </div>
          </div>
          <div className="flex flex-1 border-t-2 border-primary items-start">
            <div className="mt-4">
              <h1 className="text-primary font-bold">CONTACT US AT</h1>
              <h3 className="text-primary">info@bluebird.dev</h3>
            </div>
            <div className="mt-4  border-2" />
          </div>
        </div>
      </div>
      <div>
        <ul className="flex flex-col flex-1  items-end">
          <li>
            <a className="uppercase font-medium text-end">Home</a>
          </li>
          <li>
            <a className="uppercase font-medium text-end">Why Bluebird</a>
          </li>
          <li>
            <a className="uppercase font-medium text-end">What we offer</a>
          </li>
          <li>
            <a className="uppercase font-medium text-end">Case Studies</a>
          </li>
          <li>
            <a className="uppercase font-medium text-end">Quote Calculator</a>
          </li>
          <li>
            <a className="uppercase font-medium text-end">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
