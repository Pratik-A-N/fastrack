import React from "react";
import appStorelogo from "../public/Assets/app_store.svg";
import playStorelogo from "../public/Assets/play_store.svg";
import Image from "next/image";
import logo from "../public/Assets/black_logo.svg";
import fb from "../public/Assets/fb.svg";
import twitter from "../public/Assets/twitter.svg";
import insta from '../public/Assets/insta.svg'
import linked from "../public/Assets/linkedin.svg";
import { Martel_Sans } from "next/font/google";

const martel = Martel_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

function Footer() {
  return (
    <div className="footer container3 text-black pt-14">
      <div className="cnt1 container3 flex justify-evenly pb-14">
        <div>
          <div className={`followtext ${martel.className} font-bold`}>
            Follow us
          </div>
          <div className="social_media flex pt-3">
            <div className="fb pr-2">
              <Image src={insta} width={25} />
            </div>
            <div className="fb px-2">
              <Image src={fb} width={25} />
            </div>
            <div className="twitter px-2">
              <Image src={twitter} width={25} />
            </div>
            <div className="linkedin pl-2">
              <Image src={linked} width={25} />
            </div>
          </div>
        </div>
        <div className="logos">
          <div>
            <Image src={logo} width={250} height={100} alt="Fastrack Club logo" />
            <div className="flex mt-5 play">
              <div className="play pr-2">
                <Image src={playStorelogo} width={100} />
              </div>
              <div className="app pl-2">
                <Image src={appStorelogo} width={85} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cnt2 bg-black text-white">
        <div className={`bx1 ${martel.className} text-2xl flex justify-center pt-14`}>
          <div className="hm px-6">Home</div>
          <div className="hm px-6">About us</div>
          <div className="hm px-6">Learn</div>
          <div className="hm px-6">FAQ</div>
        </div>
        <div className={`bx2 flex justify-center pt-8`}>
          <div className="hm px-3">Contact us</div>
          <div className="hm px-3">Privacy Policy</div>
          <div className="hm px-3">Terms of Use</div>
        </div>
        <div className="tnc footer-text-grey text-center py-8 text-xs">
            Copyright © 2023 Fastrack Pvt ltd. All rights reserved
        </div>
      </div>

    </div>
  );
}

export default Footer;
