import React from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import Swiggle from '../public/contact/wave-line.svg';
import Lottie from 'lottie-react';
import Card from '../public/contact/cardAnimation.json';
import Footer from '../components/Footer';
import SelectDropdown from '../components/SelectDropdown';

const Contact = () => {
  const dropdownOptions = [
    'In need of development work',
    'Apply for a job',
    'Outstaffing',
    'Formal Quote',
    'General Enquiry',
  ];
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="relative w-full bg-cover bg-bottom flex flex-col items-center pb-[90px]">
        <div
          className="bg-primary h-full"
          style={{
            position: 'absolute',
            left: '-16%',
            width: '130vw',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
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
      <div className="flex flex-row px-20 justify-center items-center bg-secondary py-32 -mt-32">
        <form className="flex flex-1 my-8 flex-col items-center justify-center">
          <input
            className="py-4 my-3 px-3 text-lg rounded-[20px]  w-[518px]"
            type={'text'}
            placeholder={'Your name'}
          />
          <input
            className=" py-4 my-3 px-3 font-normal rounded-[20px] text-lg  w-[518px]"
            type={'text'}
            placeholder={'Your company (optional)'}
          />
          <SelectDropdown
            placeholder="Reason for contacting us(select)"
            options={dropdownOptions}
            selectedItem={(option) => console.log(option)}
          />
          <input
            className=" my-3 px-3 rounded-[20px] text-lg py-4 w-[518px]"
            type={'email'}
            placeholder={'Your email'}
          />
          <textarea
            rows={5}
            cols={50}
            className="w-[518px] my-3 px-3 py-4 text-lg rounded-[22px] min-h-10"
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
      </div>
      <div className="relative w-full flex flex-col items-center justify-center pt-[140px] pb-[90px] -mt-32">
        <div
          className="bg-[#F1F1F1] h-full"
          style={{
            position: 'absolute',
            left: '-16%',
            width: '130vw',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
          }}
        />
        <div className="z-10 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
