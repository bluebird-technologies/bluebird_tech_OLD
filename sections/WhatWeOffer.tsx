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

export function WhatWeOffer() {
  return (
    <div className="mt-[78px] mb-[91px] flex w-full flex-1 flex-col items-center justify-center lg:-mx-[16px] lg:flex-row  lg:flex-wrap lg:gap-y-[32px] ">
      <div className="mb-4 flex items-center  lg:mb-0 lg:w-1/4 lg:px-[20px]">
        <h2 className="title-2 secondary text-center">WHAT WE OFFER</h2>
      </div>
      {items.map((i, index) => (
        <div
          key={index}
          className="mt-4 w-[300px] items-center justify-center lg:mx-0 lg:mt-0 lg:w-1/4"
        >
          <div className="flex flex-row items-center justify-start rounded-[25px] px-[20px] pt-[22px] pb-[18px] shadow-[2px_4px_16px_#00000029] transition-all hover:-mt-2 lg:mx-[16px] lg:flex-col lg:items-start">
            <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full p-3  shadow-[2px_4px_16px_#00000029]   ">
              <picture>
                <source srcSet={`/what-we-offer/${i.icon}.svg`} type="image/svg+xml" />
                <img
                  src={`/what-we-offer/${i.icon}.svg`}
                  alt="Bluebird"
                  className="h-[30px] w-[30px] lg:h-full lg:w-full"
                />
              </picture>
            </div>
            <div className="ml-2 font-extrabold uppercase leading-[25px] text-primary lg:ml-0 lg:mt-[14px] lg:text-[20px]">
              {i.label.split(' ').map((t, i) => (
                <div key={i}>{t}</div>
              ))}
            </div>
            <div className="mt-[13px] hidden text-[17px] leading-[20px] text-highlight lg:block">
              MORE INFO
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
