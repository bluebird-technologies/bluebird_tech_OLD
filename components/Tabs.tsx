import { ReactNode, useState } from 'react';

export function Tabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  return (
    <div>
      <div className="flex w-full mb-[33px] h-[51px]">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`${
              activeTab === tab.label
                ? 'text-white bg-primary cursor-default'
                : 'bg-[#f1f1f1] text-primary hover:h-[51px] cursor-pointer'
            } ${i < tabs.length - 1 ? 'rounded-br-[32px]' : ''} ${
              i > 0 ? 'rounded-bl-[32px]' : ''
            } border-t-[4px] pb-1 border-primary flex-1 text-[22px] leading-[27px]  h-[44px] flex items-center justify-center font-bold uppercase transition-all`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* TODO.  since this is fixed - make sure it looks good */}
      <p className="h-[160px]">{tabs.find((t) => t.label === activeTab)?.content}</p>
    </div>
  );
}
