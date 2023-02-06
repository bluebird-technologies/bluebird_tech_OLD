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

function CaseStudiesDetailsView() {
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
          backgroundImage: 'url(/case-studies/revioBackground-2.png)',
          backgroundPosition: 'cover',
          height: '750px',
        }}
      >
        <h1 className="text-highlight font-bold text-8xl">REVIO</h1>
      </div>
      <div
        className="w-full bg-cover h-full bg-bottom z-10 -mt-40 pt-12 px-12 flex flex-col items-center relative  "
        style={{
          backgroundImage: 'url(/double-curve-primary-overlay.svg)',
          backgroundPosition: 'cover',
          height: '1200px',
        }}
      >
        <h1 className="text-white font-bold text-4xl">REVIO</h1>
        <p className="text-white font-normal mt-4 text-2xl text-center">
          We joined Revio shortly after their inception to add debit order collections as one of the
          tools on their system. Integrating with local banking systems offered some very
          interesting and unique challenges
        </p>
        <p className="text-highlight font-normal my-4 text-2xl text-center">
          Here is how we created a system that abstracts the bank’s payment and collection flows
          into a more modern and simple to use API.
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
          <div className=" mt-12">
            <h1 className="text-white text-2xl font-normal">Concept Behind the Product</h1>
            <p className="text-white text-xl mt-2 font-normal text-justify">
              Direct debits (or debit orders) are generally a foreign concept for most international
              clients, but for medium to large companies in South Africa this is the most effective
              tool for collecting insurance premiums, rent, car payments, etc. on a large scale.
            </p>
          </div>
          <div className=" mt-12">
            <h1 className="text-white text-2xl font-normal">Gap in the Market </h1>
            <p className="text-white text-xl mt-2 font-normal text-justify">
              Give smaller businesses the opportunity to affordably play within the debit order
              collection space. Handle large amounts of collections for larger businesses. Abstract
              banking processes for clients. Transparency and early warning on negative collection
              results.
            </p>
          </div>
          <div className=" mt-12">
            <h1 className="text-white text-2xl font-normal">The Problem </h1>
            <p className="text-white text-xl mt-2 font-normal text-justify">
              Easier way for clients to utilise the full suite of collection tools provided by the
              banks. Mandate management (Create, Amendments and Authentication). Automatic recon and
              settlement from intermediary accounts.
            </p>
          </div>
          <div className="flex flex-row w-full mt-8  justify-between">
            <a href="#" className="text-white border rounded-full py-2 px-4">
              System Architecture
            </a>
            <a href="#" className="text-white border rounded-full py-2 px-4">
              Database Design
            </a>
            <a href="#" className="text-white border rounded-full py-2 px-4">
              Infrastructure Design
            </a>
            <a href="#" className="text-white border rounded-full py-2 px-4">
              Back-end Development
            </a>
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
          <span className="text-white text-2xl mt-12 font-bold"> 3 PEOPLE </span>
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
              src="/../public/case-studies/clay.png"
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
                <li className="text-white text-3xl leading-[3rem] list-disc">
                  What were the banks’ limitations? Which technologies do they use?
                </li>
                <li className="text-white text-3xl leading-[3rem] list-disc">
                  What was our average amount of projected collections? Per day? Per month?
                </li>
                <li className="text-white text-3xl leading-[3rem] list-disc">
                  Are we able to find a better way to handle the banks’ file-based systems?
                </li>
                <li className="text-white text-3xl leading-[3rem] list-disc">
                  How can we be better than the competitions’ systems?
                </li>
                <li className="text-white text-3xl leading-[3rem] list-disc">
                  How do we simplify some of the concepts?
                </li>
                <li className="text-white text-3xl leading-[3rem] list-disc">
                  How do we secure the whole process?
                </li>
                <li className="text-white text-3xl leading-[3rem] list-disc">
                  How do we test the system?
                </li>
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
              <li className="text-white list-disc text-3xl leading-[3rem]">
                Going through bank integration specification documents
              </li>
              <li className="text-white list-disc text-3xl leading-[3rem]">
                Speaking to stakeholders
              </li>
              <li className="text-white list-disc text-3xl leading-[3rem]">
                Researching the tech available on cloud platforms such as AWS
              </li>
              <li className="text-white list-disc text-3xl leading-[3rem]">
                Looking at best practices for enterprise systems
              </li>
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
            <li className="text-black list-disc text-lg mb-2">
              Talking to stakeholders to ask about possible pitfalls and known hiccups.
            </li>
            <li className="text-black list-disc text-lg mb-2">
              Created multiple iterations of entity relationship diagrams (ERD) to flesh out
              possible database structures.
            </li>
            <li className="text-black list-disc text-lg mb-2">
              Drafted many flow diagrams to determine the lifecycle of a collection or mandate.
            </li>
            <li className="text-black list-disc text-lg mb-2">
              Discussed which technologies to use to solve problems created by older banking
              technologies.
            </li>
            <li className="text-black list-disc text-lg mb-2">
              Discuss ways to test system without actually connecting to the bank
            </li>
          </ul>
        </div>
        <div>
          <div className="flex flex-row  my-8">
            <p className="text-highlight mr-4 text-2xl">Building Process</p>
            <BlueSwiggle width="800" />
          </div>
          <ul>
            <li className="text-black list-disc text-lg mb-2">
              Talking to stakeholders to ask about possible pitfalls and known hiccups.
            </li>
            <li className="text-black list-disc text-lg mb-2">
              Created multiple iterations of entity relationship diagrams (ERD) to flesh out
              possible database structures.
            </li>
            <li className="text-black list-disc text-lg mb-2">
              Drafted many flow diagrams to determine the lifecycle of a collection or mandate.
            </li>
            <li className="text-black list-disc text-lg mb-2">
              Discussed which technologies to use to solve problems created by older banking
              technologies.
            </li>
            <li className="text-black list-disc text-lg mb-2">
              Discuss ways to test system without actually connecting to the bank
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-1  flex-row h-[520px]">
        <div
          style={{
            backgroundImage: 'url(/case-studies/revioLandingPage.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="flex flex-1  "
        >
          <div className="flex items-end justify-end ">
            <div className="flex bg-highlight ml-16 mb-20 flex-wrap h-[109px] px-8 w-[338px] items-center justify-center rounded-full">
              <span className="text-white text-2xl">50 Contracted Clients at Present</span>
            </div>
          </div>
        </div>
        <div className="bg-secondary flex  w-2/5 flex-col  flex-wrap px-10 items-center justify-center">
          <h1 className="text-white text-4xl mb-4 uppercase font-bold">Results</h1>
          <ul className=" w-2/3 ">
            <li className="text-white list-disc text-xl mb-2">
              Mandate management made easy. Intuitive creation, authentication and amendment calls.
            </li>
            <li className="text-white list-disc text-lg mb-2">
              Able to create collections from existing mandates to save time.
            </li>
            <li className="text-white list-disc text-lg mb-2">
              Able to handle the processing of collections end-to-end.
            </li>
            <li className="text-white list-disc text-lg mb-2">
              Comprehensive testing and monitoring
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row bg-primary items-center justify-center py-12">
        <ArrowLeftSvg />
        <span className="uppercase text-white font-bold text-3xl ml-8">Back to case studies</span>
      </div>
      <Footer />
    </div>
  );
}

export default CaseStudiesDetailsView;
