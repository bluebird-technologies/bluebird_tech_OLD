import { Container } from '../components/Container';
import { Header } from '../components/Header';

const items = [
  {
    icon: 'web',
    label: 'Web Development',
  },
  {
    icon: 'app',
    label: 'App Development',
  },
  {
    icon: 'infra',
    label: 'Infrastructure Development',
  },
  {
    icon: 'pm',
    label: 'Product Management',
  },
  {
    icon: 'ux',
    label: 'UX/UI Design',
  },
  {
    icon: 'outsource',
    label: 'Developer Outsourcing',
  },
  {
    icon: 'api',
    label: 'Web Development',
  },
];

export default function Offer() {
  return (
    <div>
      <div
        className="w-full bg-cover bg-bottom flex flex-col items-center relative pt-[60px] pb-[77px] bg-secondary"
        style={{
          backgroundImage: 'url(/primary-overlay.png)',
        }}
      >
        <Header />
        <Container center>
          <h1 className="title-1 mt-[82px]">
            <span className="font-bold italic">What we</span> offer
          </h1>
          <h4 className="text-highlight italic text-[27px] leading-[34px] mt-[7px]">
            A solution for any part of your business
          </h4>
          <div className="flex">
            {items.map((i) => (
              <div key={i.label}>
                <picture>
                  <source srcSet={`/what-we-offer/${i.icon}.svg`} type="image/svg+xml" />
                  <img
                    src={`/what-we-offer/${i.icon}.svg`}
                    alt="Bluebird"
                    className="w-[80px] text-highlight"
                  />
                </picture>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
