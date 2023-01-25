import React from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import Swiggle from '../public/contact/wave-line.svg';
import Lottie from 'lottie-react';
import Card from '../public/contact/cardAnimation.json';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className=" flex-1 flex flex-col bg-secondary h-full">
      <div
        style={{
          backgroundImage: `url(/primary-overlay.png)`,
          backgroundRepeat: 'no-repeat',
        }}
        className=" w-full bg-cover bg-bottom flex flex-col items-center relative pt-[60px] pb-[90px] bg-secondary "
      >
        <Header />
        <div className="flex z-1 relative flex-col mt-20 items-center">
          <h3 className="text-[27px] font-mediumitalic italic text-highlight">Get in Touch</h3>
          <div className="flex flex-row ">
            <h1 className="uppercase text-white font-extrabold text-[52px]">CONTACT</h1>
            <h1 className="uppercase text-white ml-3 font-extrabold italic text-[52px]">US</h1>
          </div>
          <Swiggle />
        </div>
      </div>
      <div className="flex flex-row px-20  justify-center items-center">
        <form className="flex flex-1 my-8  flex-col items-center justify-center">
          <input
            className=" my-4 px-3 font-normal rounded-[20px] h-12 w-[518px]"
            type={'text'}
            placeholder={'Your name'}
          />
          <input
            className=" my-4 px-3 font-normal rounded-[20px] h-12 w-[518px]"
            type={'text'}
            placeholder={'Your company (optional)'}
          />
          <div className="flex h-12 my-4  bg-white items-center w-[518px] rounded-[20px]">
            <select
              title="options"
              placeholder="Reason for contacting us (select)"
              className=" mx-3 font-medium h-10 opacity-1 w-[518px] border-0 focus:outline-none   "
              id="contact-select"
              style={{
                appearance: 'none',
                borderRadius: 20,
              }}
            >
              <option disabled selected value="">
                Reason for contacting us (select)
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <input
            className=" my-4 px-3  rounded-[20px] h-12 w-[518px]"
            type={'email'}
            placeholder={'Your email'}
          />
          <textarea
            rows={10}
            cols={50}
            className="w-[518px] my-4 px-3 py-4 rounded-[22px] min-h-10"
            placeholder="Your message"
          />
          <Button>Send</Button>
        </form>
        <Lottie
          animationData={Card}
          loop={true}
          style={{
            height: 500,
            width: 500,
          }}
          width={30}
          height={30}
        />
        ;
      </div>
      <div
        style={{
          backgroundImage: `url(/light-overlay.png)`,
          backgroundRepeat: 'no-repeat',
        }}
        className=" w-full bg-cover bg-bottom flex flex-col items-center relative pt-[60px] pb-[90px] bg-white "
      >
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
