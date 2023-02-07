import React from 'react';
import { Header } from '../../components/Header';
import ArrowSvg from 'public/case-studies/arrow.svg';
import SwiggleSvg from 'public/case-studies/swiggle.svg';
import QuoteSvg from 'public/case-studies/quote.svg';
import CircleArrow from './icons/circle-arrow';
import BlueSwiggle from 'public/case-studies/blue-swiggle.svg';
import ArrowLeftSvg from 'public/arrow-left.svg';
import Image from 'next/image';
import Footer from '../../components/Footer';
import lottieAnimation from '../../public/lottie/355a04a6-668d-4fcc-aae2-d2af1451ba80.json';
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import { clientDetails } from '../../public/case-studies/client-details';

function CaseStudiesDetailsView() {
  const router = useRouter();
  const { clientName } = router.query;
  const data = clientDetails.filter((item) => item.clientName === clientName);
  const clientData = data[0];

  return (
    <div className="relative">
      <div
        className="w-full z-10 bg-cover bg-bottom   items-center relative pt-[60px] pb-[77px] "
        style={{
          backgroundImage: 'url(/primary-overlay.png)',
          objectFit: 'contain',
        }}
      >
        <Header />
      </div>
      <div
        className="w-full bg-cover bg-bottom z-0 -mt-40 flex flex-col items-center relative justify-center "
        style={{
          backgroundImage: `url(${clientData?.coverImage})`,
          backgroundPosition: 'cover',
          height: '750px',
        }}
      >
        <h1 className="text-highlight font-bold uppercase text-8xl">{clientData?.clientName}</h1>
      </div>
      <div
        className="w-full bg-cover h-full bg-bottom z-10 -mt-40 pt-12 px-12 flex flex-col items-center relative  "
        style={{
          backgroundImage: 'url(/double-curve-primary-overlay.svg)',
          backgroundPosition: 'cover',
          height: '1200px',
        }}
      >
        <h1 className="text-white font-bold text-4xl capitalize">{clientData?.clientName}</h1>
        <p className="text-white font-normal mt-4 text-2xl text-center">{clientData?.problem}</p>
        <p className="text-highlight font-normal my-4 text-2xl text-center">
          {clientData?.solution}
        </p>
        <ArrowSvg />
        <div className="flex w-full mt-8 items-center flex-row justify-center">
          <p className="text-highlight  font-normal text-2xl text-center">The Challenge</p>
          <SwiggleSvg
            style={{
              marginLeft: '200px',
            }}
          />
        </div>
        <div className="px-36">
          {clientData?.challenge.map((item, key) => (
            <div className=" mt-12" key={key}>
              <h1 className="text-white text-2xl font-normal">{item.title}</h1>
              <p className="text-white text-xl mt-2 font-normal text-justify">{item.description}</p>
            </div>
          ))}
          <div className="flex flex-row w-full mt-8  justify-between">
            {clientData?.services.map((item, key) => (
              <a key={key} href="#" className="text-white border rounded-full py-2 px-4">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-primary flex flex-row -mt-40 px-20 py-8 items-center justify-center">
        <div className="flex flex-col  ml-60 ">
          <QuoteSvg />
          <p className="w-[250px] -mt-20 text-white text-2xl">QUOTE/FEEDBACK FROM KEY PERSON</p>
          <p className="text-highlight italic mt-8 ml-4">- Name & Job Title</p>
          <SwiggleSvg
            style={{
              marginTop: 30,
            }}
            width="1000"
          />
          <span className="text-highlight text-2xl mt-12">Involved Team</span>
          <span className="text-white text-2xl mt-12 font-bold">{clientData?.teamSize} PEOPLE</span>
        </div>

        <div
          style={{
            position: 'relative',
          }}
        >
          <div
            className="h-40 -ml-[600px] w-80 mt-40"
            style={{
              position: 'relative',
              zIndex: 5,
              height: '700px',
              width: '1000px',
            }}
          >
            <Image
              src={clientData?.quoteSectionImage}
              alt="revio image"
              width={1000}
              height={1000}
            />
          </div>
          <div
            style={{
              width: '100px',
              position: 'absolute',
              height: '100px',
              zIndex: 1,
              marginTop: '0px',
              top: '180px',
              left: '-40px',
            }}
          >
            <Lottie animationData={lottieAnimation} loop={true} className="  w-[500px] h-[500px]" />
          </div>
        </div>
      </div>
      <div className="bg-secondary flex flex-1 flex-col py-12 w-full">
        <h1 className="text-white font-bold text-2xl text-center justify-center">OUR APPROACH</h1>

        <div className="flex justify-center items-center">
          <div className="flex flex-col w-3/5">
            <div className="flex justify-start mt-[50px]">
              <h2 className="text-highlight text-4xl pr-6">What did we need to know?</h2>
              <SwiggleSvg width="600" className="" />
            </div>
            <div className="flex flex-col mt-[50px]">
              <ul>
                {clientData?.infoGathered.map((item, key) => (
                  <li key={key} className="text-white text-3xl leading-[3rem] list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-start mt-[80px]">
              <h2 className="text-highlight text-4xl pr-6">How did we uncover this info?</h2>
              <SwiggleSvg width="600" className="" />
            </div>
          </div>
        </div>

        <div className="flex mt-8 w-full px-[200px]">
          <div className="mr-[100px]">
            <div className="w-[800px]">{CircleArrow}</div>
          </div>
          <div>
            <ul>
              {clientData?.infoGatheringMethod.map((item, key) => (
                <li key={key} className="text-white list-disc text-3xl leading-[3rem]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray flex flex-1  flex-col items-center justify-center py-12">
        <div>
          <div className="flex flex-row my-8">
            <p className="text-highlight mr-4 text-2xl">Designing Process</p>
            <BlueSwiggle width="800" />
          </div>
          <ul>
            {clientData?.designProcess.map((item, key) => (
              <li key={key} className="text-black list-disc text-lg mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex flex-row  my-8">
            <p className="text-highlight mr-4 text-2xl">Building Process</p>
            <BlueSwiggle width="800" />
          </div>
          <ul>
            {clientData?.buildingProcess.map((item, key) => (
              <li key={key} className="text-black list-disc text-lg mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-1  flex-row h-[520px]">
        <div
          style={{
            backgroundImage: `url(${clientData?.resultsBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="flex flex-1  "
        >
          <div className="flex items-end justify-end ">
            <div className="flex bg-highlight ml-16 mb-20 flex-wrap h-[109px] px-8 w-[338px] items-center justify-center rounded-full">
              <span className="text-white text-2xl">{clientData?.clientResults}</span>
            </div>
          </div>
        </div>
        <div className="bg-secondary flex  w-2/5 flex-col  flex-wrap px-10 items-center justify-center">
          <h1 className="text-white text-4xl mb-4 uppercase font-bold">Results</h1>
          <ul className=" w-2/3 ">
            {clientData?.results.map((item, key) => (
              <li key={key} className="text-white list-disc text-xl mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        onClick={() => router.push('/case-studies')}
        className="flex flex-row bg-primary items-center justify-center py-12"
      >
        <ArrowLeftSvg />
        <span className="uppercase text-white font-bold text-3xl ml-8">Back to case studies</span>
      </div>
      <Footer />
    </div>
  );
}

export default CaseStudiesDetailsView;
