import Image from "next/image";
import React from "react";
import grow from '../public/Assets/brands/grow.svg'
import bob from '../public/Assets/brands/bob.svg'
import bse from '../public/Assets/brands/bse.svg'
import coin_switch from '../public/Assets/brands/coin_switch.svg'
import fyers from '../public/Assets/brands/fyers.svg'
import stockt from '../public/Assets/brands/stocktwits.svg'
import wazir from '../public/Assets/brands/wazix.svg'
import hdfc from '../public/Assets/brands/hdfc.svg'

function Brand() {
  return (
    <div>
        <div className="slider">
        <div className="slide-track">
                <div className="slide "><Image src={grow} /></div>
                <div className="slide "><Image src={bob}/></div>
                <div className="slide "><Image src={coin_switch}/></div>
                <div className="slide "><Image src={wazir}/></div>
                <div className="slide "><Image src={fyers} /></div>
                <div className="slide "><Image src={stockt}/></div>
                <div className="slide "><Image src={bse}/></div>
                <div className="slide "><Image src={hdfc} /></div>
            
            
                <div className="slide "><Image src={grow} /></div>
                <div className="slide "><Image src={bob}/></div>
                <div className="slide "><Image src={coin_switch}/></div>
                <div className="slide "><Image src={wazir}/></div>
                <div className="slide "><Image src={fyers} /></div>
                <div className="slide "><Image src={stockt}/></div>
                <div className="slide "><Image src={bse}/></div>
                <div className="slide "><Image src={hdfc}/></div>
            </div>
        </div>
    </div>
    
  );
}

export default Brand;
