import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { items } from '../sections/WhatWeOfferBig';

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
          <h4 className="italic text-[27px] leading-[34px] mt-[7px] text-highlight">
            A solution for any part of your business
          </h4>
          <div className="flex w-full mt-[92px]">
            {items.map((i) => (
              <div
                key={i.label}
                className="flex-1 flex flex-col items-center text-highlight hover:text-secondary group transition-all"
              >
                <div className="w-16 h-16">
                  {/* <picture>
                    <source srcSet={`/what-we-offer-big/${i.icon}.svg`} type="image/svg+xml" />
                    <img
                      src={`/what-we-offer/${i.icon}.svg`}
                      alt="Bluebird"
                      className="max-w-[120px] w-full h-full max-h-[120px] text-highlight"
                    />
                  </picture> */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.182 28.967">
                    <g id="OBJECTS" transform="translate(-109.985 -132.848)">
                      <path
                        id="Path_2968"
                        data-name="Path 2968"
                        d="M166.667,154.611a7.823,7.823,0,0,0-2.992-6.108,9.171,9.171,0,0,0-5.494-2.111,6.156,6.156,0,0,0-.818.054,7.412,7.412,0,0,0-8.963-4.071,8.547,8.547,0,0,0-7.612-4.679,8.248,8.248,0,0,0-3.478.748,9.523,9.523,0,0,0-8.479-5.1,9.647,9.647,0,0,0-9.609,8.941,8.58,8.58,0,0,0-6.547,8.3.939.939,0,0,0,.043.281,3.11,3.11,0,1,0,1.787.008.937.937,0,0,0,.046-.289A6.688,6.688,0,0,1,120.268,144a.938.938,0,0,0,.806-.929v-.087a7.767,7.767,0,0,1,7.758-7.758A7.659,7.659,0,0,1,136,140.087a.938.938,0,0,0,1.368.452,6.368,6.368,0,0,1,3.417-.967,6.652,6.652,0,0,1,6.229,4.321.938.938,0,0,0,1.272.528,5.533,5.533,0,0,1,7.583,3.383.938.938,0,0,0,1.153.623,4.2,4.2,0,0,1,1.155-.16c2.372,0,6.609,2.12,6.609,6.353A5.327,5.327,0,0,1,163.406,158a5.594,5.594,0,0,1-4.138,1.436h-34.52a4.492,4.492,0,0,1-1.754-.445,3,3,0,0,1-1.655-2.965,3.284,3.284,0,0,1,3.41-3.41H144.7a3.112,3.112,0,1,0,0-1.876H124.749a5.286,5.286,0,1,0,0,10.572h34.52a7.382,7.382,0,0,0,5.472-1.992A7.156,7.156,0,0,0,166.667,154.611Zm-53.07.481a1.236,1.236,0,1,1,1.236-1.236A1.237,1.237,0,0,1,113.6,155.092Zm34.067-4.647a1.236,1.236,0,1,1-1.236,1.236A1.237,1.237,0,0,1,147.664,150.445Z"
                        stroke-width="1"
                        className="fill-current w-full h-full stroke-primary"
                      />
                    </g>
                  </svg> */}
                  {i.icon}
                </div>
                <div className="text-white text-[13px] leading-[15px] font-extrabold uppercase text-center my-4">
                  {i.label.split(' ').map((t, i) => (
                    <div key={i}>{t}</div>
                  ))}
                </div>
                <div className="w-[26px] h-[26px] rounded-full bg-white border-[6px] border-[#EAEAEA] group-hover:bg-highlight group-hover:border-[#FFFFFF27] group-hover:h-[30px] group-hover:w-[30px] group-hover:my-[-2px]" />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
