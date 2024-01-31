import React from "react";
import appStorelogo from "../public/Assets/app_store.svg";
import playStorelogo from "../public/Assets/play_store.svg";
import Image from "next/image";
import logo from "../public/Assets/black_logo.svg";
import fb from "../public/Assets/fb.svg";
import twitter from "../public/Assets/twitter.svg";
import linked from "../public/Assets/linkedin.svg";
import { Martel_Sans } from "next/font/google";

const martel = Martel_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

function Footer() {
  return (
    <div className="footer container3 text-black pt-14">
      <div className="cont1 flex justify-evenly">
        <div className="logos">
          <Image src={logo} width={250} height={100} alt="Fastrack Club logo" />
          <div className="flex mt-5">
            <div className="play pr-2">
              <Image src={playStorelogo} width={100} />
            </div>
            <div className="app pl-2">
              <Image src={appStorelogo} width={85} />
            </div>
          </div>
          <div className="social_media flex mt-5">
            <div className="fb pr-2">
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
        <div className={`other_links ${martel.className}`}>
          <div className="other_link_heading text-3xl font-bold">
            Other links
          </div>
          <div className="footer-text-grey font-bold pt-3 pb-2">About</div>
          <div className="footer-text-grey font-bold py-2">Careers</div>
          <div className="footer-text-grey font-bold py-2">FAQ’s</div>
          <div className="footer-text-grey font-bold py-2">Privacy Policy</div>
          <div className="footer-text-grey font-bold py-2">
            Terms of Service
          </div>
        </div>
        <div className={`other_links ${martel.className}`}>
          <div className="other_link_heading text-3xl font-bold">Learn</div>
          <div className="footer-text-grey font-bold pt-3 pb-2">Rupee 101</div>
          <div className="footer-text-grey font-bold py-2">Blogs</div>
          <div className="footer-text-grey font-bold py-2">School Learn</div>
        </div>
        <div className={`other_links ${martel.className}`}>
          <div className="other_link_heading text-3xl font-bold">
            Contact us
          </div>
          <div className="footer-text-grey font-bold pt-3 pb-2">emailid</div>
          <div className="footer-text-grey font-bold py-2">955850314</div>
        </div>
      </div>
      <div className="flex justify-center py-14">
        <div className="tnc footer-text-grey text-sm">
            Copyright © 2023 Fastrack Pvt ltd. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
