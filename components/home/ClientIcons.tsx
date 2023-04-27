import React from 'react';
import Link from 'next/link';

export default function ClientIcons() {
  return (
    <div className="w-full flex flex-col space-y-12 xl:space-y-24 px-4">
      <div className="flex justify-center w-full">
        <div className="flex flex-1 justify-between max-w-[1280px]">
          <IconContainer
            href="https://www.22seven.com"
            src="/client-icons/22seven.svg"
            alt="22seven"
          />
          <IconContainer
            href="https://bank.tech"
            src="/client-icons/bankTech.svg"
            alt="Bank Tech"
          />
          <IconContainer href="https://revix.com" src="/client-icons/revix.svg" alt="revix" />
          <IconContainer href="https://layup.co.za" src="/client-icons/layup.svg" alt="layup" />
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex flex-1 justify-between max-w-[1080px]">
          <IconContainer
            href="https://www.duepay.co.za"
            src="/client-icons/duepay.svg"
            alt="duepay"
          />
          <IconContainer
            href="https://www.doctorly.de/en"
            src="/client-icons/doctorly.svg"
            alt="doctorly"
          />
          <IconContainer
            href="https://thorchain.org"
            src="/client-icons/thorchain.svg"
            alt="thorchain"
          />
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex flex-1 justify-between max-w-[1280px]">
          <IconContainer
            href="https://www.thedelta.io"
            src="/client-icons/theDelta.svg"
            alt="theDelta"
          />
          <IconContainer href="https://raubex.com" src="/client-icons/raubex.svg" alt="raubex" />
          <IconContainer
            href="https://www.pabtglobal.com/"
            src="/client-icons/pump_abrasion.svg"
            alt="Pump and abrasion"
          />
          <IconContainer
            href="https://www.coindirect.com"
            src="/client-icons/coindirect.svg"
            alt="Coindirect"
          />
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex flex-1 justify-between max-w-[1080px]">
          <IconContainer href="https://bvnk.com/" src="/client-icons/bvnk.svg" alt="Bvnk" />
          <IconContainer
            href="https://www.craft.financial"
            src="/client-icons/craft.svg"
            alt="Craft"
          />
          <IconContainer
            href="https://www.pepsi.co.za/"
            src="/client-icons/pepsi.svg"
            alt="Pepsi"
          />
          <IconContainer href="https://breez.insure" src="/client-icons/breez.svg" alt="Breez" />
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex flex-1 justify-between max-w-[1080px]">
          <IconContainer
            href="https://greensun.co.za/"
            src="/client-icons/greensun.svg"
            alt="Greensun"
          />
          <IconContainer
            href="https://bscglobal.com/"
            src="/client-icons/bsc.svg"
            alt="Bsc global"
          />
          <IconContainer
            href="https://www.polygonprop.com/"
            src="/client-icons/polygonprop.svg"
            alt="Polygon prop"
          />
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex flex-1 justify-between max-w-[1280px]">
          <IconContainer
            href="https://www.overlap-app.com"
            src="/client-icons/overlap.svg"
            alt="Overlap"
          />
          <div className="scale-150 -mt-3">
            <IconContainer
              href="https://ambercircle.co.za/"
              src="/client-icons/ambercircle.svg"
              alt="Ambercircle"
            />
          </div>

          <IconContainer
            href="https://www.asklulo.com/"
            src="/client-icons/asklulo.svg"
            alt="Asklulo"
          />
          <IconContainer
            href="https://www.tweakcarbon.com/"
            src="/client-icons/tweak.svg"
            alt="Pump and abrasion"
          />
        </div>
      </div>
    </div>
  );
}

const IconContainer = ({ src, alt, href }: { src: string; alt: string; href: string }) => {
  return (
    <Link className="opacity-50 hover:opacity-100 px-12 xl:px-4 max-w-[18rem]" href={href}>
      <div className="h-16">
        <picture className="w-full h-full">
          <img src={src} alt={alt} className="w-full h-full" />
        </picture>
      </div>
    </Link>
  );
};
