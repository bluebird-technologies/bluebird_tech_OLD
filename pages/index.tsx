import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { Lottie } from '../components/Lottie';
import { Tabs } from '../components/Tabs';
import { WhatWeOffer } from '../sections/WhatWeOffer';
import ClientIcons from '../public/home/ClientIcons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SolutionCarousel from '../components/Carousel/SolutionCarousel';
import { solutionsSlide, clientIconsSlide, latestWorkSlide } from '../components/slideObjects';
import ClientIconsCarousel from '../components/Carousel/ClientIconsCarousel';
import LatestWorkCarousel from '../components/Carousel/LatestWorkCarousel';

export default function Home() {
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    function updateScreenWidth() {
      setScreenWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener('resize', updateScreenWidth);

    // Call updateScreenWidth initially to get the initial value
    updateScreenWidth();

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="relative flex h-[704px] w-full flex-col items-center bg-cover bg-bottom"
        style={{
          backgroundImage: 'url(/main.jpg)',
        }}
      >
        <Header />
        <Container wide>
          <div className="flex w-full flex-1  flex-col items-center justify-center 2xl:items-start 2xl:justify-start">
            <h1 className="mt-[82px] text-center text-[40px] font-extrabold uppercase leading-[64px] text-white 2xl:text-left 2xl:text-[52px]">
              TAILORED SOLUTIONS <br /> THAT SUIT YOUR NEEDS
            </h1>
            <div className="my-[44px] h-[4px] w-[138px] bg-secondary"></div>
            <Button className="">
              <a href="#offer">See what we offer</a>
            </Button>
            <div className=" overflow-hidden">
              <Lottie
                style={{ width: '598px' }}
                src="lottie/30286239-fb21-47f3-ab15-7495d639d72c.json"
                className="hidden 2xl:absolute 2xl:left-[500px] 2xl:bottom-[-200px] 2xl:inline"
              />
              <Lottie
                style={{ width: '276px' }}
                src="lottie/355a04a6-668d-4fcc-aae2-d2af1451ba80.json"
                className="absolute top-[50px] -left-[130px] 2xl:top-[250px] 2xl:left-[400px]  "
              />
              <Lottie
                style={{ width: '407px' }}
                src="lottie/6c9228ec-9c25-492d-9758-432393638219.json"
                className="hidden 2xl:absolute 2xl:left-0 2xl:bottom-[-340px] 2xl:inline"
              />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="mt-12 flex flex-col  items-center 2xl:mt-[91px] 2xl:items-start">
          <div className="subtitle text-center 2xl:text-left">About us</div>
          <h2 className="title-2 text-center 2xl:text-left">WHY BLUEBIRD</h2>
          <div className="mb-12 flex flex-col items-center 2xl:mb-[76px] 2xl:flex-row">
            <p className="mt-4 text-center text-base 2xl:text-left 2xl:text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <Button className="ml-[38px] mt-4 2xl:mt-0">
              <Link href="/why">read more</Link>
            </Button>
          </div>
        </div>
        {screenWidth < 1024 ? (
          <div className="flex w-full justify-center">
            <SolutionCarousel item={solutionsSlide} />
          </div>
        ) : (
          <Tabs
            tabs={[
              {
                label: 'Boutique',
                content: (
                  <>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </>
                ),
              },
              {
                label: 'Lean',
                content: (
                  <>
                    {' '}
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                  </>
                ),
              },
              {
                label: 'Personal',
                content: (
                  <>
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </>
                ),
              },
            ]}
          />
        )}
        <picture className="mx-auto">
          <source srcSet="/home/swiggle.svg" type="image/svg+xml" />
          <img src="/home/swiggle.svg" alt="Swiggle" className="mt-[20px] w-[813px]" />
        </picture>
        <div className="flex w-full flex-1 items-center justify-center" id="offer">
          <WhatWeOffer />
        </div>
      </Container>
      <div className="flex w-full flex-1 bg-[#f1f1f1] pt-[72px]">
        <Container
          center={screenWidth < 1024 ? true : false}
          wide={screenWidth >= 1024 ? true : false}
        >
          <div className="flex w-full flex-1 flex-col items-center justify-center">
            <h2 className="title-2 text-center">
              SOME OF THE PEOPLE WE’VE <span className="text-center text-[#DA7D3B]">WORKED</span>{' '}
              WITH
            </h2>
            <div className="mt-[27px] mb-[34px] h-[4px] w-[138px] bg-secondary"></div>
          </div>
          {screenWidth < 1024 ? <ClientIconsCarousel item={clientIconsSlide} /> : <ClientIcons />}
        </Container>
      </div>
      <div className="shadow-[0px 9px 11px #00000029] flex flex-col items-center bg-primary pt-[55px] pb-[80px]">
        <Container
          center={screenWidth < 1024 ? true : false}
          wide={screenWidth >= 1024 ? true : false}
        >
          <div className="subtitle mt-[30px] flex w-full flex-col items-center text-2xl lg:items-start">
            <span className="text-2xl">Case studies</span>
          </div>
          <div className="flex w-full flex-col items-center  lg:items-start">
            <h2 className="title-2 alt text-center">
              <span className="text-center text-xl lg:text-5xl">SEE OUR LATEST WORK</span>
            </h2>
          </div>
          <div className="flex w-full flex-col items-center  lg:items-start">
            {' '}
            <p className="alt hidden text-center text-xl lg:block">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p>
          </div>
          {screenWidth < 1024 ? (
            <LatestWorkCarousel />
          ) : (
            <div className="mt-[80px] flex space-x-[29px]">
              {latestWorkSlide.map((item, key) => (
                <div
                  key={key}
                  className="flex h-[273px] w-[360px] flex-1 cursor-pointer items-end bg-cover bg-bottom"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                  }}
                  onClick={() => router.push(`${item.link}`)}
                >
                  <div className="mb-[13px] flex h-[59px] items-center rounded-full bg-secondary">
                    <div className="relative h-full w-[59px] rounded-full bg-white">
                      <Image src={item.icon} alt="revio icon" fill />
                    </div>
                    <span className="px-4 text-[35px] font-medium leading-[43px] text-white">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
      <div className="relative flex w-full flex-col items-center bg-cover bg-bottom pb-24 2xl:pb-32">
        <div
          className="absolute left-[-98%] h-full w-[280vw]   bg-secondary  2xl:left-[-16%] 2xl:w-[130vw]"
          style={{
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
        <Container center>
          <h2 className="lg:title-2 alt mt-8 text-center text-[30px] font-extrabold text-white  2xl:mt-24">
            HAVE A PROJECT IN MIND?
          </h2>
          <div className="-my-8">
            <Lottie src="lottie/8455f50a-6938-486b-b2bf-4f187cc737bf.json" />
          </div>
          <Button>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </Container>
      </div>

      <div className="-mt-32 h-[150px] bg-[#F1F1F1]" />

      <div className="bg-[#F1F1F1] pb-[54px]">
        <Footer />
      </div>
    </div>
  );
}
