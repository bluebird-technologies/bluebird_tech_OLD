import React from 'react';
import Image from 'next/image';

export default function ClientIcons() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row items-center py-12  justify-between">
        <div>
          <Image height={220} width={220} alt="22seven" src="/client-icons/22seven.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="bankTech" src="/client-icons/bankTech.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="revix" src="/client-icons/revix.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="layUp" src="/client-icons/layup.svg" />
        </div>
      </div>
      <div className="flex flex-row items-center py-12 px-12 justify-between">
        <div>
          <Image height={220} width={220} alt="duepay" src="/client-icons/duepay.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="FameShopping" src="/client-icons/fameShopping.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="ThorChain" src="/client-icons/thorchain.svg" />
        </div>
      </div>
      <div className="flex flex-row items-center py-12 justify-between ">
        <div>
          <Image height={220} width={220} alt="Evuna" src="/client-icons/evuna.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="raubex" src="/client-icons/raubex.svg" />
        </div>
        <div>
          <Image height={220} width={220} src="/client-icons/pump_abrasion.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="Coindirect" src="/client-icons/coinDirect.svg" />
        </div>
      </div>
      <div className="flex flex-row items-center py-12 px-12 justify-between ">
        <div>
          <Image height={220} width={220} alt="bvnk" src="/client-icons/bvnk.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="craft" src="/client-icons/craft.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="Pepsi" src="/client-icons/pepsi.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="breez" src="/client-icons/breez.svg" />
        </div>
      </div>
      <div className="flex flex-row items-center py-12 px-12 justify-between ">
        <div>
          <Image height={220} width={220} alt="Greensun" src="/client-icons/greensun.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="bsc" src="/client-icons/bsc.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="PolygonProp" src="/client-icons/polygonProp.svg" />
        </div>
      </div>
      <div className="flex flex-row items-center py-12 justify-between ">
        <div>
          <Image height={220} width={220} alt="Overlap" src="/client-icons/overlap.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="Ambercircle" src="/client-icons/ambercircle.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="Asklulo" src="/client-icons/asklulo.svg" />
        </div>
        <div>
          <Image height={220} width={220} alt="Tweak" src="/client-icons/tweak.svg" />
        </div>
      </div>
    </div>
  );
}
