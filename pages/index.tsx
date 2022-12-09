import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Lottie } from '../components/Lottie';
import { Tabs } from '../components/Tabs';

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
          <div className="w-[138px] h-[5px] bg-primary my-[44px]"></div>
          <Button>See what we offer</Button>
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
          <Button className="ml-[38px] mt-1">read more</Button>
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
      </Container>
    </div>
  );
}
