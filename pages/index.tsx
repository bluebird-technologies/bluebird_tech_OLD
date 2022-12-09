import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Lottie } from '../components/Lottie';

export default function Home() {
  return (
    //bg-[#1E2B3B]
    <div className="">
      <div
        className="w-full h-[704px] bg-cover bg-bottom flex flex-col items-center z-[-1] relative"
        style={{
          backgroundImage: 'url(/main.jpg)',
        }}
      >
        <Header />
        <Container wide>
          <h1 className="font-extrabold text-white leading-[64px] text-[52px] mt-[82px]">
            TAILORED SOLUTIONS <br /> THAT SUIT YOUR NEEDS
          </h1>
          <div className="w-[138px] h-[5px] bg-[#3D6895] my-[44px]"></div>
          <Button>See what we offer</Button>
          {/* <div className="absolute right-0 mt-20">
            <lottie-player
              className="absolute"
              ref={ref}
              src="lottie/30286239-fb21-47f3-ab15-7495d639d72c.json"
              background="transparent"
              speed="1"
              style={{ width: '578px' }}
              loop
              autoplay
            ></lottie-player>
          </div> */}
        </Container>
      </div>
      <Lottie
        style={{ width: '578px', height: '578px' }}
        src="lottie/30286239-fb21-47f3-ab15-7495d639d72c.json"
        className="absolute right-0 bottom-0 mb-32"
      />
      <Lottie
        style={{ width: '276px' }}
        src="lottie/355a04a6-668d-4fcc-aae2-d2af1451ba80.json"
        className="absolute left-0 bottom-0 mb-[250px] ml-[400px]"
      />
      <Lottie
        style={{ width: '407px' }}
        src="lottie/6c9228ec-9c25-492d-9758-432393638219.json"
        className="absolute left-0 bottom-0 mb-28"
      />
      <Container>
        <div className="text-[#E97724] text-[16px] leading-[20px] font-bold uppercase mb-[6px] mt-[91px]">
          About us
        </div>
        <h2 className="text-[#1E2B3B] font-extrabold text-[35px] leading-[43px]">WHY BLUEBIRD</h2>
        <p className="mt-[12px] text-black text-[18px] leading-[22px] font-medium flex items-start mb-20">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
          <Button className="ml-[38px] mt-1">read more</Button>
        </p>
      </Container>
    </div>
  );
}
