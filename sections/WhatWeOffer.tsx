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
    <div className="flex flex-wrap -mx-[16px] gap-y-[32px] mt-[78px] mb-[91px]">
      <div className="w-1/4 px-[20px] flex items-center">
        <h2 className="title-2 secondary">WHAT WE OFFER</h2>
      </div>
      {items.map((i) => (
        <div
          key={i.label}
          className="w-1/4"
          style={
            {
              // boxShadow: '2px 4px 16px #00000029',
            }
          }
        >
          <div className="mx-[16px] shadow-[2px_4px_16px_#00000029] pt-[22px] pb-[18px] px-[20px] rounded-[25px] hover:-mt-2 transition-all">
            <div className="w-[54px] h-[54px] rounded-full shadow-[2px_4px_16px_#00000029] flex items-center justify-center p-3">
              <picture>
                <source srcSet={`/what-we-offer/${i.icon}.svg`} type="image/svg+xml" />
                <img src={`/what-we-offer/${i.icon}.svg`} alt="Bluebird" className="h-full" />
              </picture>
            </div>
            <div className="text-primary text-[20px] leading-[25px] font-extrabold uppercase mt-[14px]">
              {i.label.split(' ').map((t, i) => (
                <div key={i}>{t}</div>
              ))}
            </div>
            <div className="mt-[13px] text-highlight text-[17px] leading-[20px]">MORE INFO</div>
          </div>
        </div>
      ))}
    </div>
  );
}
