import React from 'react';
import { Header } from '../../components/Header';
import VerticalScribbles from './icons/VerticalScribbles';
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
import HeadingWithLine from '../../components/CaseStudies/HeadingWithLine';

function CaseStudiesDetailsView() {
  const router = useRouter();
  const { clientName } = router.query;
  const data = clientDetails.filter((item) => item.clientName === clientName);
  const clientData = data[0];

  return (
    <div className="relative flex flex-1 flex-col">
      <div className="relative w-full bg-cover bg-bottom flex flex-col items-center pb-[90px] z-10">
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
      </div>
      <div
        className="w-full bg-cover bg-bottom z-0 -mt-52 flex flex-col items-center relative justify-center "
        style={{
          backgroundImage: `url(${clientData?.coverImage})`,
          backgroundPosition: 'cover',
          height: '850px',
        }}
      >
        <h1 className="text-highlight font-bold uppercase text-8xl">{clientData?.clientName}</h1>
      </div>
      <div className="w-full bg-cover h-full -mt-[200px] pt-12 px-12 flex flex-col items-center relative z-20">
        <div
          className="bg-secondary h-full -z-10"
          style={{
            position: 'absolute',
            left: '-26%',
            width: '150vw',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
          }}
        />
        <div
          className="bg-secondary -z-10"
          style={{
            position: 'absolute',
            height: '50%',
            top: '60%',
            left: '-26%',
            width: '150vw',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
        <div className="flex flex-col w-full max-w-4xl items-center justify-center space-y-12">
          <h1 className="text-white font-bold text-5xl capitalize mt-16">
            {clientData?.clientName}
          </h1>
          <p className="text-white font-normal text-2xl text-center">{clientData?.problem}</p>
          <p className="text-highlight font-normal text-2xl text-center">{clientData?.solution}</p>
          <>{VerticalScribbles}</>
        </div>

        <div className="flex w-full max-w-7xl justify-center px-4">
          <p className="text-highlight font-normal text-4xl text-center whitespace-nowrap mr-12">
            The Challenge
          </p>
          <SwiggleSvg />
        </div>

        <div className="text-xl max-w-6xl mt-20">
          {clientData?.challenge.map((item, key) => (
            <div className="mb-16" key={key}>
              <h1 className="text-white text-2xl font-normal mb-4">{item.title}</h1>
              <p className="text-white text-xl font-normal text-justify">{item.description}</p>
            </div>
          ))}
          <div className="flex flex-row w-full justify-between">
            {clientData?.services.map((item, key) => (
              <a
                key={key}
                href="#"
                className="text-white border text-center rounded-full py-2 mr-2 px-4"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary flex flex-row -mt-40 h-[1100px] px-20 py-8 items-center justify-center">
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
              alt={clientData?.clientName + 'image'}
              fill
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
      <div className="bg-secondary flex flex-1 flex-col w-full">
        <h1 className="text-white font-bold text-4xl text-center justify-center mt-20">
          OUR APPROACH
        </h1>

        <div className="flex justify-center items-center mt-12">
          <div className="flex flex-col">
            <HeadingWithLine text="What did we need to know?" swiggleOption="1" />

            <div className="flex flex-row w-full justify-center items-center mt-12">
              <div className="flex flex-col max-w-5xl justify-center">
                <ul>
                  {clientData?.infoGathered.map((item, key) => (
                    <li key={key} className="text-white text-3xl leading-[3rem] list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <HeadingWithLine
              text="How did we uncover this info?"
              swiggleOption="1"
              className="mt-12"
            />
          </div>
        </div>

        <div className="flex mt-8 w-full flex-row items-center justify-center px-[200px] pb-[100px]">
          <div className="mr-[100px]">
            {/* TODO use flex wrap or something similar to make this image fold into its own row on less wide resolutions */}
            {clientData?.clientName === 'revio' ? (
              <div className="w-[800px] relative">
                {CircleArrow}
                <div className="absolute">
                  <span className="absolute bottom-[200px] left-[280px] font-bold text-2xl text-center">
                    1-4 WEEKS
                  </span>
                  <span className="absolute text-white font-bold text-2xl -left-[100px] bottom-[290px]">
                    DEVELOPMENT
                  </span>
                  <span className="absolute text-white font-bold text-2xl left-[550px] bottom-[200px]">
                    DESIGN
                  </span>
                  <span className="absolute text-white font-bold text-2xl left-[50px] -bottom-[70px]">
                    ANALYSIS
                  </span>
                  <span className="absolute text-white font-bold text-2xl left-[600px] -bottom-[70px]">
                    DELIVERY
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <Image
                  src={clientData?.solutionsImage}
                  alt={clientData?.clientName + 'image'}
                  height={2500}
                  width={2500}
                />
              </div>
            )}
          </div>
          <div>
            <ul>
              {clientData?.infoGatheringMethod.map((item, key) => (
                <li key={key} className="text-white list-disc mb-4 text-3xl leading-[3rem]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray w-full flex flex-1  flex-col items-center justify-center py-12">
        <HeadingWithLine text="Designing Process" swiggleOption={'2'} />

        <div className="flex w-full justify-center mt-12">
          <div className="max-w-6xl">
            <ul>
              {clientData?.designProcess.map((item, key) => (
                <li key={key} className="text-black list-disc text-2xl mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <HeadingWithLine text="Building Process" swiggleOption={'2'} className="mt-12" />
        <div className="flex w-full justify-center mt-12">
          <div className="max-w-6xl">
            <ul>
              {clientData?.buildingProcess.map((item, key) => (
                <li key={key} className="text-black list-disc text-2xl mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-row h-[620px]">
        <div
          style={{
            backgroundImage: `url(${clientData?.resultsBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="flex flex-1 bg-black"
        >
          <div className="flex items-end justify-end ">
            <div className="flex bg-highlight ml-16 mb-20 flex-wrap h-[109px] px-8 w-[360px] items-center justify-center rounded-full">
              <span className="text-white text-xl">{clientData?.clientResults}</span>
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
        className="flex flex-row bg-primary items-center justify-center py-12 cursor-pointer"
      >
        <ArrowLeftSvg />
        <span className="uppercase text-white font-bold text-3xl ml-8">Back to case studies</span>
      </div>
      <Footer />
    </div>
  );
}

export default CaseStudiesDetailsView;
