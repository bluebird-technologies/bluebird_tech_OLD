import React from 'react';
import ClientCard, { ClientCardProps } from './ClientCard';
import ClientCardMobile from './ClientCardMobile';

interface ClientCardContainerProps {
  clients: ClientCardProps[];
}

export default function ClientCardContainer({ clients }: ClientCardContainerProps) {
  return (
    <div className="flex flex-1 relative -mt-8 md:-mt-40 w-full overflow-hidden">
      <div className="relative flex flex-col justify-center items-center space-y-8 w-full pb-[50px]">
        {clients.map((item) => (
          <div className="md:w-2/3 z-10" key={item.clientName}>
            <div className="md:block hidden">
              <ClientCard
                clientName={item.clientName}
                responsibilities={item.responsibilities}
                backgroundImageSrc={item.backgroundImageSrc}
                backgroundImageSrcMobile={item.backgroundImageSrcMobile}
              />
            </div>
            <div className="block md:hidden">
              <ClientCardMobile
                clientName={item.clientName}
                responsibilities={item.responsibilities}
                backgroundImageSrc={item.backgroundImageSrc}
                backgroundImageSrcMobile={item.backgroundImageSrcMobile}
              />
            </div>
          </div>
        ))}
        <div
          className="bg-primary h-[150px] bottom-0"
          style={{
            position: 'absolute',
            left: '-75%',
            width: '250vw',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
          }}
        />
      </div>
    </div>
  );
}
