import React from 'react';

const ImageGallery = () => {
  return (
    <div className="mx-4 flex flex-col flex-1 items-center  justify-center">
      <h1 className="text-white text-center text-4xl z-0 mt-12  font-extrabold">CULTURE</h1>

      <div className="relative mb-8">
        <picture>
          <source srcSet="/why/handshake.png" />
          <img className="" src="/why/handshake.png" alt="handshake" />
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-highlight text-center -mt-8  font-bold">
            DIVERSITY
          </h1>
        </picture>
      </div>
      <div className="mb-3 relative">
        <picture>
          <source srcSet="/why/music.png" />
          <img className="" src="/why/music.png" alt="music" />
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-highlight text-center -mt-10  font-bold">
            DIGITAL NOMADS
          </h1>
        </picture>
      </div>
      <div className="relative mb-3">
        <picture>
          <source srcSet="/why/meeting.png" />
          <img
            className="p-0 m-0 group-hover:scale-110 origin-bottom transition duration-300"
            src="/why/meeting.png"
            alt="meeting"
          />
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-highlight text-center -mt-8  font-bold">
            WORD 3
          </h1>
        </picture>
      </div>
      <div className="flex justify-center z-0 mb-20 items-center h-full">
        <h1 className="text-white text-center text-base mt-8 sm:text-lg md:text-xl">
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
