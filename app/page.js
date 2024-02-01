'use client'
import Image from "next/image";
import AppBgImg from "./bgImage";
import Navbar from "./navbar";
import appStorelogo from "../public/Assets/app_store.svg";
import playStorelogo from "../public/Assets/play_store.svg";
import videoPlaceholder from "../public/Assets/video_placeholder.svg";
import howto from "../public/Assets/howto.svg";
import { Inter, Playball } from "next/font/google";
import who from "../public/Assets/who.svg";
import { Martel_Sans } from "next/font/google";

import { NextUIProvider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Footer from "./footer";
import cont1 from '../public/Assets/cont1.svg'
import Brand from "./brand";
import Institute from "./institute";

const inter = Inter({ subsets: ["latin"] });
const playball = Playball({subsets: ["latin"],
  weight: "400"
})
const martel = Martel_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <NextUIProvider>
      <div className="">
        <div className="container1">
          {/* <AppBgImg /> */}
          <div className={`pt-10 pl-12 pr-12 ${inter.className}`}>
            <Navbar />
          </div>
          <div className="content px-16">
            <div className="mainheading mt-20 ml-10 w-2/3">
              <div
                // className={martel.className}
                className={`cust-text-8xl ${martel.className} font-bold`}
              >
                Make your kids financially smart
              </div>
            </div>
            <div className="subheading w-4/5 ml-10 mt-5">
              <div className={`${inter.className} cust-text-xl`}>
                Step into the world of risk-free crypto trading with our
                community mock trading app. Practice, learn, and connect with
                fellow enthusiasts.
              </div>
            </div>
            <div className="stores flex mt-8 ml-10">
              <div className="play pr-4">
                <Image src={playStorelogo} width={180} />
              </div>
              <div className="app pl-4">
                <Image src={appStorelogo} width={163} />
              </div>
            </div>
          </div>
        </div>
        <div className="container3 h-auto">
            <div className={`brand-heading ${martel.className} text-center text-2xl py-8`}>
              Associated Brands
            </div>
            <div className="pb-8">
              <Brand/>
            </div>
        </div>
        <div className="container2 h-screen bg-white text-black flex items-center justify-center">
          <div className="flex justify-center mob-cont">
            <div className="video-card">
              <Image src={cont1} />
            </div>
            <div className="side-content flex items-start flex-col">
              <div
                className={`mainheading ${martel.className} font-bold cust-text-4xl mt-5`}
              >
                Learn more about Finance
              </div>
              <div className={`subheading ${inter.className} cust-text-xl mt-5`}>
                Step into the world of risk-free crypto trading with our
                community mock trading app. Practice, learn, and connect with
                fellow enthusiasts.
              </div>
              <div className={`subheading ${inter.className} cust-text-xl mt-5`}>
                Step into the world of risk-free crypto trading with our
                community mock trading app. Practice, learn, and connect with
                fellow enthusiasts.
              </div>
              <button className="btn-bg-grn cust-p rounded-lg mt-8">
                Explore more &#8599;
              </button>
            </div>
          </div>
        </div>
        <div className="container3 text-black flex items-center justify-center py-24 px-10">
          <div className="flex justify-center mob-cont">
            <div className="side-content w-1/3 mr-16 flex justify-center items-start flex-col">
              <div
                className={`mainheading ${martel.className} font-bold cust-text-6xl`}
              >
                How to get started?
              </div>
              <div className={`subheading ${inter.className} cust-text-xl mt-5`}>
                Step into the world of risk-free crypto trading with our
                community mock trading app. Practice, learn, and connect with
                fellow enthusiasts.
              </div>
              <div className="mt-8">
                <form className="bg-white px-3 py-2 rounded-xl flex">
                  <span className="py-2">+91</span>
                  <input
                    type="phone"
                    name="name"
                    placeholder="Enter Mobile No."
                    className="mx-3 cust-w"
                  />
                  <button
                    type="submit"
                    className="btn-bg-grn px-3 py-2 rounded-lg"
                  >
                    Signup
                  </button>
                </form>
              </div>
            </div>
            <div className="video-card ind">
              <div className="flex ">
                <div className={`numb ${playball.className}`}>1</div>
                <div className="content">
                  <div className="cont-head">
                    Signup
                  </div>
                  <div className="cont-body">
                    Download Fastrack app and Create your Profile.
                  </div>
                </div>
              </div>
              <div className="flex mt-4">
                <div className={`numb ${playball.className}`}>2</div>
                <div className="content">
                <div className="cont-head">
                Join Competition
                  </div>
                  <div className="cont-body">
                  Join competition hosted by your institute.
                  </div>
                </div>
              </div>
              <div className="flex mt-4">
                <div className={`numb ${playball.className}`}>3</div>
                <div className="content">
                <div className="cont-head">
                Trade & Build Portfolio
                  </div>
                  <div className="cont-body">
                    Apply Strategies & prove your Trading skills to Build portfolio.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2  bg-white text-black flex items-center justify-center px-10">
          <div className="flex justify-center mob-cont pt-14">
            <div className="video-card flex">
              <Image src={who} />
            </div>
            <div className="side-content ind flex justify-center items-start flex-col">
              <div
                className={`mainheading ${martel.className} font-bold cust-text-6xl`}
              >
                Who we are?
              </div>
              <div className={`subheading ${inter.className} cust-text-xl mt-5`}>
                Step into the world of risk-free crypto trading with our
                community mock trading app. Practice, learn, and connect with
                fellow enthusiasts.
              </div>
              <button className="btn-bg-grn cust-p rounded-lg mt-8">
                Know more &#8594;
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white text-black py-24">
          <div className="flex justify-center">
            <div className="mx-16 flex-col">
              <div
                className={`mainheading ${martel.className} font-bold cust-text-6xl`}
              >
                Our success story
              </div>
              <div className={`subheading ${inter.className} cust-text-xl mt-5`}>
                We have engaged with over 600+ colleges, reaching more than
                18,00,000+ students. We have forged associations with over 30+
                prominent brands. We have successfully organized more than 100+
                competitions, with each competition seeing over 50,000+ trades.
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <div className="flex number">
              <div className="college">
                <div className="num cust-text-8xl ">600+</div>
                <div className="name text-center cust-text-2xl font-medium">
                  Colleges
                </div>
              </div>
              <div className="college">
                <div className="num cust-text-8xl">1.8M</div>
                <div className="name text-center cust-text-2xl font-medium">
                  Students
                </div>
              </div>
              <div className="college">
                <div className="num cust-text-8xl">100+</div>
                <div className="name text-center cust-text-2xl font-medium">
                  Competition
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container3">
            <div className={`brand-heading ${martel.className} text-center text-2xl py-8`}>
              Institute Partners
            </div>
            <div className="pb-8">
              <Institute/>
            </div>
        </div>
        <div className="container2 h-auto bg-white text-black px-32 pt-20 pb-36">
          <div className={`faq ${martel.className} text-5xl`}>FAQ’s</div>
          <div className="list">
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Is there a cost for learning?"
                title="Is there a cost for learning?"
                className="my-5"
              >
                {/* {defaultContent} */}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Can students are eligible for competition?"
                title="Can students are eligible for competition?"
                className="my-5"
              >
                {/* {defaultContent} */}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="How trading competition can help me?"
                title="How trading competition can help me?"
                className="my-5"
              >
                Engage in a unique learning experience where theory meets practice. The competition offers a dynamic platform to apply classroom knowledge to real-world trading scenarios.
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Is Fastrack available on App store?"
                title="Is Fastrack available on App store?"
                className="my-5"
              >
                {/* {defaultContent} */}
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Do anyone can create or Host competition"
                title="Do anyone can create or Host competition"
                className="my-5"
              >
                {/* {defaultContent} */}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </NextUIProvider>
  );
}
