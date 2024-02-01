import Image from "next/image";
import React from "react";
import ecell from '../public/Assets/institutes/ecell.svg'
import iitg from '../public/Assets/institutes/iitg.svg'
import iith from '../public/Assets/institutes/iith.svg'
import iima from '../public/Assets/institutes/iima.svg'
import iimb from '../public/Assets/institutes/iimb.svg'
import iimc from '../public/Assets/institutes/iimc.svg'
import nitd from '../public/Assets/institutes/nitd.svg'
import mnit from '../public/Assets/institutes/mnit.svg'
import abes from '../public/Assets/institutes/abes.svg'

function Institute() {
  return (
    <div>
        <div className="slider">
        <div className="slide-track">
                <div className="slide "><Image src={ecell} /></div>
                <div className="slide "><Image src={iitg}/></div>
                <div className="slide "><Image src={iith}/></div>
                <div className="slide "><Image src={iima}/></div>
                <div className="slide "><Image src={iimb} /></div>
                <div className="slide "><Image src={iimc}/></div>
                <div className="slide "><Image src={nitd}/></div>
                <div className="slide "><Image src={mnit} /></div>
                <div className="slide "><Image src={abes}/></div>
            
                <div className="slide "><Image src={ecell} /></div>
                <div className="slide "><Image src={iitg}/></div>
                <div className="slide "><Image src={iith}/></div>
                <div className="slide "><Image src={iima}/></div>
                <div className="slide "><Image src={iimb} /></div>
                <div className="slide "><Image src={iimc}/></div>
                <div className="slide "><Image src={nitd}/></div>
                <div className="slide "><Image src={mnit}/></div>
                <div className="slide "><Image src={abes}/></div>
            </div>
        </div>
    </div>
    
  );
}

export default Institute;
