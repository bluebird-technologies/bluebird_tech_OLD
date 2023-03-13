import React from 'react';
import twenty2Seven from '../client-icons/22seven';
import bankTech from '../client-icons/bankTech';
import ambercircle from '../client-icons/ambercircle';
import asklulo from '../client-icons/asklulo';
import breez from '../client-icons/breez';
import bsc from '../client-icons/bsc';
import bvnk from '../client-icons/bvnk';
import coinDirect from '../client-icons/coinDirect';
import craft from '../client-icons/craft';
import doctorly from '../client-icons/doctorly';
import duepay from '../client-icons/duepay';
import greensun from '../client-icons/greensun';
import layUp from '../client-icons/layUp';
import overlap from '../client-icons/overlap';
import pepsi from '../client-icons/pepsi';
import polygonProp from '../client-icons/polygonProp';
import pump_abraison from '../client-icons/pump_abraison';
import raubex from '../client-icons/raubex';
import revix from '../client-icons/revix';
import theDelta from '../client-icons/theDelta';
import thorchain from '../client-icons/thorchain';
import tweak from '../client-icons/tweak';

export default function ClientIcons() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row items-center my-8  justify-between">
        <div>{twenty2Seven}</div>
        <div>{bankTech}</div>
        <div>{revix}</div>
        <div>{layUp}</div>
      </div>
      <div className="flex flex-row items-center my-8 px-8 justify-between">
        <div>{duepay}</div>
        <div>{doctorly}</div>
        <div>{thorchain}</div>
      </div>
      <div className="flex flex-row items-center my-8 justify-between ">
        <div>{theDelta}</div>
        <div>{raubex}</div>
        <div>{pump_abraison}</div>
        <div>{coinDirect}</div>
      </div>
      <div className="flex flex-row items-center my-8 justify-between ">
        <div>{bvnk}</div>
        <div>{craft}</div>
        <div>{pepsi}</div>
        <div>{breez}</div>
      </div>
      <div className="flex flex-row items-center my-8 px-8 justify-between ">
        <div>{greensun}</div>
        <div>{bsc}</div>
        <div>{polygonProp}</div>
      </div>
      <div className="flex flex-row items-center my-8 justify-between ">
        <div>{overlap}</div>
        <div>{ambercircle}</div>
        <div>{asklulo}</div>
        <div>{tweak }</div>
      </div>
    </div>
  );
}
