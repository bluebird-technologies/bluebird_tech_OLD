import React from 'react';

const ImageGallery = () => {
  return (
    <div className="mx-4 flex flex-col flex-1 items-center  justify-center">
      <h1 className="text-white text-center text-4xl z-0 mt-12  font-extrabold">CULTURE</h1>

      <div className="relative mb-8">
        <picture>
          <source srcSet="/why/handshake.png" />
          <img className="" src="/why/handshake.png" alt="handshake" />
        </picture>
        <div className="-mt-6  sm:-mt-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-highlight text-center  font-bold">
            DIVERSITY
          </h1>
        </div>
      </div>
      <div className="mb-3 relative">
        <picture>
          <source srcSet="/why/music.png" />
          <img className="" src="/why/music.png" alt="music" />
        </picture>
        <div className="-mt-8 sm:-mt-[75px]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center  text-highlight font-bold">
            DIGITAL NOMADS
          </h1>
        </div>
      </div>
      <div className="relative mb-3">
        <picture>
          <source srcSet="/why/meeting.png" />
          <img
            className="p-0 m-0 group-hover:scale-110 origin-bottom transition duration-300"
            src="/why/meeting.png"
            alt="meeting"
          />
        </picture>
        <div className="-mt-6 sm:-mt-[50px]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center  text-highlight font-bold">
            WORD 3
          </h1>
        </div>
      </div>
      <div className="flex justify-center z-0 mb-4 items-center h-full">
        <h1 className="text-white text-center text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </h1>
      </div>
    </div>
  );
};

export default ImageGallery;
