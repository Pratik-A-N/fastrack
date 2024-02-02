"use client";
import Image from "next/image";

import Navbar from "../../navbar";

import { Inter, Playball } from "next/font/google";
import who from "../../../public/Assets/who.svg";
import { Martel_Sans } from "next/font/google";
import host from "../../../public/Assets/host.svg";
import host2 from "../../../public/Assets/host2.svg";
import host3 from "../../../public/Assets/host3.svg";


import { NextUIProvider } from "@nextui-org/react";
import Footer from "../../footer";

import Institute from "../../institute";
import Faq from "../../faq";

const inter = Inter({ subsets: ["latin"] });
const playball = Playball({ subsets: ["latin"], weight: "400" });
const martel = Martel_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <NextUIProvider>
      <div className="">
        <div className={`pt-10 pl-12 pr-12 ${inter.className} bg-white`}>
          <Navbar />
        </div>
        <div className="container2 h-screen bg-white text-black ">
          <div className="flex items-center justify-evenly mob-cont host">
            <div className="side-content-host flex items-start flex-col ">
              <div
                className={`mainheading ${martel.className} font-bold cust-text-4xl mt-5`}
              >
                Host an Competition
              </div>
              <button className="btn-bg-grn cust-p rounded-lg mt-8">
                Get Started
              </button>
            </div>
            <div className="video-card">
              <Image src={host} />
            </div>
          </div>
        </div>
        <div className="container3 text-black py-24 px-10">
          <div className="flex justify-evenly mob-cont">
            <div className="video-card flex items-center">
              <Image src={host2} />
            </div>
            <div className="video-card ind">
              <div
                className={`mainheading ${martel.className} font-bold cust-text-4xl mt-5`}
              >
                Why to Host competition?
              </div>
              <div className="side-content-host2">
                <div className="flex">
                    <div className={`numb ${playball.className}`}>1</div>
                    <div className="content">
                    <div className="cont-head">Educational Excitement</div>
                    <div className="cont-body">
                    Engage in a unique learning experience applying theory to trading scenarios.
                    </div>
                    </div>
                </div>
                <div className="flex mt-4">
                    <div className={`numb ${playball.className}`}>2</div>
                    <div className="content">
                    <div className="cont-head">Networking Opportunities</div>
                    <div className="cont-body">
                    Connect, share, and broaden horizons with finance enthusiasts from various competitions.
                    </div>
                    </div>
                </div>
                <div className="flex mt-4">
                    <div className={`numb ${playball.className}`}>3</div>
                    <div className="content">
                    <div className="cont-head">Prepare for Trading thrill</div>
                    <div className="cont-body">
                    Compete, win prizes, and gain recognition for trading expertise. Spotlight your prowess.
                    </div>
                    </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        
        <div className="container2 bg-white text-black py-24 px-10">
          <div className="flex justify-evenly mob-cont">
            <div className="video-card ind">
              <div
                className={`mainheading ${martel.className} font-bold cust-text-4xl mt-5`}
              >
                Reach out to us for hosting.
              </div>
              <div className="side-content-host2">
                <div className="cont-body">
                Kindly submit the required details in the form below to initiate the hosting process, and our team will promptly get in touch with you.
                </div>
                <div className="outer-form mt-5">
                    <form action="">
                        <div>
                            <input type="text" name="" id="insti" placeholder="Institution name*" className="cust-inp"  required />
                        </div>
                        <div>
                            <input type="email" name="" id="email" placeholder="Enter email here*" className="cust-inp" required />
                        </div>
                        <div>
                            <input type="number" name="" id="phone" placeholder="Phone number*" className="cust-inp" required />
                        </div>
                        <div>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Any message for us?" className="cust-textarea"></textarea>
                        </div>
                        <button className="btn-bg-grn cust-p rounded-lg mt-8">
                            Submit
                        </button>
                    </form>
                </div>

              </div>

            </div>
            <div className="video-card flex items-center">
              <Image src={host3} />
            </div>
          </div>
        </div>

        <div>
          <Faq />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </NextUIProvider>
  );
}
