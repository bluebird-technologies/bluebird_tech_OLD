import React from 'react';
import { clientIcons } from '../../components/clientIcons';

export default function ClientIcons() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 grid-flow-col lg:grid-cols-4 gap-3">
        {clientIcons.slice(0, 4).map((fileName, index) => (
          <div key={index} className="flex items-center justify-center mb-20 rounded-lg p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/client-icons/${fileName}`}
              alt={fileName}
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 grid-flow-col lg:grid-cols-4 gap-3">
        {clientIcons.slice(4, 7).map((fileName, index) => (
          <div key={index} className="flex items-center justify-center mb-20 rounded-lg p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/client-icons/${fileName}`}
              alt={fileName}
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 mb-6 sm:grid-cols-2 md:grid-cols-3 grid-flow-col lg:grid-cols-4 gap-3">
        {clientIcons.slice(7, 11).map((fileName, index) => (
          <div key={index} className="flex items-center justify-center mb-20  rounded-lg p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/client-icons/${fileName}`}
              alt={fileName}
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 mb-6 sm:grid-cols-2 md:grid-cols-3 grid-flow-col lg:grid-cols-4 gap-3">
        {clientIcons.slice(11, 15).map((fileName, index) => (
          <div key={index} className="flex items-center justify-center mb-20  rounded-lg p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/client-icons/${fileName}`}
              alt={fileName}
              className="max-w-full max-h-full hover:opacity-75"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 mb-6 sm:grid-cols-2 md:grid-cols-3 grid-flow-col lg:grid-cols-3 gap-3">
        {clientIcons.slice(15, 18).map((fileName, index) => (
          <div key={index} className="flex items-center justify-center mb-20  rounded-lg p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/client-icons/${fileName}`}
              alt={fileName}
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 mb-6 sm:grid-cols-2 md:grid-cols-3 grid-flow-col lg:grid-cols-4 gap-3">
        {clientIcons.slice(18, 22).map((fileName, index) => (
          <div key={index} className="flex items-center justify-center mb-20  rounded-lg p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/client-icons/${fileName}`}
              alt={fileName}
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
