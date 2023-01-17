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
          width: '100%',
          height: '430px',
          position: 'relative',
          backgroundImage: `url(/contact/darkBackground.svg)`,
          backgroundRepeat: 'no-repeat',
        }}
        className=" flex-1 pb-10 items-center "
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
      <div className="flex flex-row justify-center items-center">
        <form className="flex flex-1 my-8 flex-col items-center justify-center">
          <input
            className=" my-4 px-3 rounded-lg h-12 w-[518px]"
            type={'text'}
            placeholder={'Your name'}
          />
          <input
            className=" my-4 px-3 rounded-lg h-12 w-[518px]"
            type={'text'}
            placeholder={'Your company (optional)'}
          />
          <select
            title="options"
            placeholder="Reason for contacting us (select)"
            className="h-12 w-[518px] my-4 rounded-lg"
            id="contact-select"
          >
            <option disabled selected value="">
              Reason for contacting us (select)
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <input
            className=" my-4 px-3 rounded-lg h-12 w-[518px]"
            type={'email'}
            placeholder={'Your email'}
          />
          <textarea
            rows={10}
            cols={50}
            className="w-[518px] my-4 px-3 rounded-lg min-h-10"
            placeholder="Your message"
          />
          <Button>Send</Button>
        </form>
        <Lottie animationData={Card} loop={true} style={{ height: 300, width: 350 }} />;
      </div>
      <div
        style={{
          width: '100%',
          height: '430px',
          position: 'relative',
          backgroundImage: `url(/contact/lightBackground.svg)`,
          backgroundRepeat: 'no-repeat',
        }}
        className="flex-1 px-[96px] pt-20 "
      >
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
