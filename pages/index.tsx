import Link from 'next/link';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { Lottie } from '../components/Lottie';
import { Tabs } from '../components/Tabs';
import { WhatWeOffer } from '../sections/WhatWeOffer';
import { clientIcons } from '../components/clientIcons';
import ClientIcons from '../public/home/ClientIcons';

export default function Home() {
  return (
    <div className="">
      <div
        className="w-full h-[704px] bg-cover bg-bottom flex flex-col items-center relative"
        style={{
          backgroundImage: 'url(/main.jpg)',
        }}
      >
        <Header />
        <Container wide>
          <h1 className="title-1 mt-[82px]">
            TAILORED SOLUTIONS <br /> THAT SUIT YOUR NEEDS
          </h1>
          <div className="w-[138px] h-[4px] bg-secondary my-[44px]"></div>
          <Button>
            <a href="#offer">See what we offer</a>
          </Button>
          <div className="overflow-hidden">
            <Lottie
              style={{ width: '578px' }}
              src="lottie/30286239-fb21-47f3-ab15-7495d639d72c.json"
              className="absolute left-[680px] bottom-[-320px]"
            />
            <Lottie
              style={{ width: '276px' }}
              src="lottie/355a04a6-668d-4fcc-aae2-d2af1451ba80.json"
              className="absolute left-[400px] bottom-[-190px]"
            />
            <Lottie
              style={{ width: '407px' }}
              src="lottie/6c9228ec-9c25-492d-9758-432393638219.json"
              className="absolute left-0 bottom-[-340px]"
            />
          </div>
        </Container>
      </div>
      <Container>
        <div className="subtitle mt-[91px]">About us</div>
        <h2 className="title-2">WHY BLUEBIRD</h2>
        <p className="mb-[76px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
          <Button className="ml-[38px] mt-1">
            <Link href="/why">read more</Link>
          </Button>
        </p>
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
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum.
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
        <picture className="mx-auto">
          <source srcSet="/home/swiggle.svg" type="image/svg+xml" />
          <img src="/home/swiggle.svg" alt="Swiggle" className="w-[813px] mt-[20px]" />
        </picture>
        <div id="offer">
          <WhatWeOffer />
        </div>
      </Container>
      <div className="bg-[#f1f1f1] pt-[72px]">
        <Container center>
          <h2 className="title-2">
            SOME OF THE PEOPLE WE’VE <span className="text-[#DA7D3B]">WORKED</span> WITH
          </h2>
          <div className="w-[138px] h-[4px] bg-secondary mt-[27px] mb-[34px]"></div>
          <ClientIcons />
        </Container>
      </div>
      <div className="pt-[55px] pb-[100px] bg-primary shadow-[0px 9px 11px #00000029]">
        <Container>
          <div className="subtitle mt-[91px]">Case studies</div>
          <h2 className="title-2 alt">SEE OUR LATEST WORK</h2>
          <p className="alt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          <div className="mt-[85px] flex space-x-[29px]">
            <div
              className="w-[334px] h-[273px] bg-cover bg-bottom relative"
              style={{
                backgroundImage: 'url(/case-studies/revio.png)',
              }}
            >
              <div className="bg-[#3D6895] inline-flex h-[59px] rounded-full items-center absolute bottom-0 left-0 mb-[13px]">
                <div className="bg-white h-full w-[59px] rounded-full"></div>
                <div className="text-[35px] leading-[43px] text-white font-medium px-4">REVIO</div>
              </div>
            </div>
            <div
              className="w-[334px] h-[273px] bg-cover bg-bottom"
              style={{
                backgroundImage: 'url(/case-studies/raubex.png)',
              }}
            ></div>
            <div
              className="w-[334px] h-[273px] bg-cover bg-bottom"
              style={{
                backgroundImage: 'url(/case-studies/aurora.png)',
              }}
            ></div>
          </div>
        </Container>
      </div>

      <div
        className="w-full bg-cover bg-bottom flex flex-col items-center relative pt-[60px] pb-[77px] bg-[#F1F1F1]"
        style={{
          backgroundImage: 'url(/secondary-overlay.png)',
        }}
      >
        <Container center>
          <h2 className="title-2 alt">HAVE A PROJECT IN MIND?</h2>
          <div className="-my-8">
            <Lottie src="lottie/8455f50a-6938-486b-b2bf-4f187cc737bf.json" />
          </div>
          <Button>Get in touch</Button>
        </Container>
      </div>
      <div className="bg-[#F1F1F1] pb-[54px]">
        <Footer />
      </div>
    </div>
  );
}
