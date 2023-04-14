import React from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import Swiggle from '../public/contact/wave-line.svg';
import Lottie from 'lottie-react';
import Card from '../public/contact/cardAnimation.json';
import Footer from '../components/Footer';
import SelectDropdown from '../components/SelectDropdown';
import { MobileHeader } from '../components/MobileHeader';

const Contact = () => {
  const dropdownOptions = [
    'In need of development work',
    'Apply for a job',
    'Outstaffing',
    'Formal Quote',
    'General Enquiry',
  ];
  return (
    <div className="bg-secondary flex-1 flex flex-col h-full overflow-hidden">
      <div className="relative w-full bg-cover bg-bottom flex flex-col items-center pb-[90px]">
        <div
          className="absolute bg-primary h-full w-[285vw] -z-1 left-[-98%]  2xl:left-[-16%] 2xl:w-[130vw]"
          style={{
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
        <div className="hidden lg:block">
          <Header />
        </div>
        <div className="block h-full w-full lg:hidden">
          <MobileHeader />
        </div>

        <div className="flex z-1 relative flex-col mt-20 items-center">
          <h3 className="text-[27px] font-mediumitalic italic text-highlight">Get in Touch</h3>
          <span className="uppercase my-4 text-white text-4xl font-extrabold 2xl:text-[52px]">
            CONTACT <span className="italic">US</span>
          </span>
          <Swiggle />
        </div>
      </div>
      <div className="flex  flex-row lg:px-20 justify-center  lg:mx-8 items-center pb-32">
        <form className="flex w-full flex-1 my-8  flex-col items-center justify-center">
          <input
            className="w-5/6 py-4 my-3 px-4 text-base md:text-lg rounded-[20px]  lg:w-[518px]"
            type={'text'}
            placeholder={'Your name'}
          />
          <input
            className=" py-4 my-3 px-4 font-normal rounded-[20px] w-5/6 text-base md:text-lg  lg:w-[518px]"
            type={'text'}
            placeholder={'Your company (optional)'}
          />
          <div className="w-full  item-center flex justify-center">
            <SelectDropdown
              placeholder="Reason for contacting us(select)"
              options={dropdownOptions}
              selectedItem={(option) => console.log(option)}
            />
          </div>
          <input
            className=" my-3 px-4 rounded-[20px] text-base md:text-lg py-4 w-5/6 lg:w-[518px]"
            type={'email'}
            placeholder={'Your email'}
          />
          <textarea
            rows={5}
            cols={50}
            className="w-5/6 lg:w-[518px] my-3 px-4 py-4 text-base md:text-lg rounded-[22px] min-h-10 resize-none"
            placeholder="Your message"
          />
          <Button className="w-40 flex flex-1 items-center justify-center text-lg mt-8">
            Send
          </Button>
        </form>
        <div className="hidden lg:block">
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
      </div>
      <div className="relative w-full flex flex-col items-center justify-center pt-[140px] pb-[90px] -mt-42">
        <div
          className="absolute left-[-98%] h-full w-[280vw] bg-[#F1F1F1]  lg:left-[-20%] lg:w-[140vw]   xl:left-[-16%] xl:w-[130vw]"
          style={{
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
