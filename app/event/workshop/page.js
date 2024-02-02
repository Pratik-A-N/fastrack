"use client";
import Image from "next/image";

import Navbar from "../../navbar";

import { Inter, Playball } from "next/font/google";

import { Martel_Sans } from "next/font/google";
import workshop from "../../../public/Assets/workshop.svg";
import workshop2 from "../../../public/Assets/host2.svg";
import host3 from "../../../public/Assets/host3.svg";


import { NextUIProvider } from "@nextui-org/react";
import Footer from "../../footer";


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
               Educate your students about Finanance
              </div>
            </div>
            <div className="video-card">
              <Image src={workshop} />
            </div>
          </div>
        </div>
        <div className="container3 text-black py-24 px-10">
          <div className="flex justify-evenly mob-cont">
            <div className="video-card flex items-center">
              <Image src={workshop2} />
            </div>
            <div className="video-card ind">
              <div
                className={`mainheading ${martel.className} font-bold cust-text-4xl mt-5`}
              >
                What we provide?
              </div>
              <div className="side-content-host2">
                <div className="workshop">
                Step into the world of risk-free crypto trading with our community mock trading app. Practice, learn, and connect with fellow enthusiasts. 
                </div>
                <div className="workshop">
                Step into the world of risk-free crypto trading with our community mock trading app. Practice, learn, and connect with fellow enthusiasts. 
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
                Enroll for Workshop
              </div>
              <div className="side-content-host2">
                <div className="cont-body">
                Please furnish your school details in the form below to validate your enrollment, and our team will contact you promptly.
                </div>
                <div className="outer-form mt-5">
                    <form action="">
                        <div>
                            <input type="text" name="" id="insti" placeholder="School name*" className="cust-inp"  required />
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
