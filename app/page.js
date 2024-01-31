'use client'
import Image from "next/image";
import AppBgImg from "./bgImage";
import Navbar from "./navbar";
import appStorelogo from "../public/Assets/app_store.svg";
import playStorelogo from "../public/Assets/play_store.svg";
import videoPlaceholder from "../public/Assets/video_placeholder.svg";
import howto from "../public/Assets/howto.svg";
import { Inter } from "next/font/google";
import who from "../public/Assets/who.svg";
import { Martel_Sans } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });
const martel = Martel_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <NextUIProvider>
      <div className="">
        <div className="container1 h-screen">
          {/* <AppBgImg /> */}
          <div className={`pt-10 pl-12 pr-12 ${inter.className}`}>
            <Navbar />
          </div>
          <div className="content px-16">
            <div className="mainheading mt-20 w-1/2">
              <div
                // className={martel.className}
                className={`cust-text-8xl ${martel.className} font-bold`}
              >
                Learn to be Financial free
              </div>
            </div>
            <div className="subheading w-4/5 mt-5">
              <div className={`${inter.className} cust-text-xl`}>
                Step into the world of risk-free crypto trading with our
                community mock trading app. Practice, learn, and connect with
                fellow enthusiasts.
              </div>
            </div>
            <div className="stores flex mt-8">
              <div className="play pr-4">
                <Image src={playStorelogo} width={180} />
              </div>
              <div className="app pl-4">
                <Image src={appStorelogo} width={163} />
              </div>
            </div>
          </div>
        </div>
        <div className="container2 h-screen bg-white text-black flex items-center justify-center">
          <div className="flex justify-center">
            <div className="video-card">
              <Image src={videoPlaceholder} />
            </div>
            <div className="side-content ml-16 flex items-start flex-col">
              <div
                className={`mainheading ${martel.className} font-bold cust-text-6xl`}
              >
                Learn more about Finance
              </div>
              <div className={`subheading ${inter.className} cust-text-xl mt-5`}>
                Step into the world of risk-free crypto trading with our
                community mock trading app. Practice, learn, and connect with
                fellow enthusiasts.
              </div>
              <button className="btn-bg-grn px-3 py-3 rounded-lg mt-8">
                Explore more &#8599;
              </button>
            </div>
          </div>
        </div>
        <div className="container3 text-black flex items-center justify-center py-24">
          <div className="flex justify-center">
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
            <div className="video-card">
              <Image src={howto} width={600} height={600} />
            </div>
          </div>
        </div>
        <div className="container2 h-screen bg-white text-black flex items-center justify-center">
          <div className="flex justify-center">
            <div className="video-card">
              <Image src={who} />
            </div>
            <div className="side-content w-1/3 ml-16 flex justify-center items-start flex-col">
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
              <button className="btn-bg-grn px-3 py-3 rounded-lg mt-8">
                Know more &#8594;
              </button>
            </div>
          </div>
        </div>
        <div className="container3 text-black py-24">
          <div className="flex justify-center">
            <div className="mx-16 flex-col">
              <div
                className={`mainheading ${martel.className} font-bold text-6xl`}
              >
                Our success story
              </div>
              <div className={`subheading ${inter.className} text-xl mt-5`}>
                We have engaged with over 600+ colleges, reaching more than
                18,00,000+ students. We have forged associations with over 30+
                prominent brands. We have successfully organized more than 100+
                competitions, with each competition seeing over 50,000+ trades.
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <div className="flex">
              <div className="college">
                <div className="num text-7xl ">600+</div>
                <div className="name text-center text-2xl font-medium">
                  Colleges
                </div>
              </div>
              <div className="student">
                <div className="num text-7xl">1.8M</div>
                <div className="name text-center text-2xl font-medium">
                  Students
                </div>
              </div>
              <div className="compi">
                <div className="num text-7xl">100+</div>
                <div className="name text-center text-2xl font-medium">
                  Competition
                </div>
              </div>
            </div>
          </div>
          <div className="brand flex flex-col items-center mt-16">
            <div className={`brand-heading ${martel.className} text-2xl`}>
              Associated Brands
            </div>
            <div className="row1 flex mt-8">
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
            </div>
            <div className="row1 flex mt-8">
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
            </div>
            <div className="row1 flex mt-8">
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
              <div className="box mx-3"></div>
            </div>
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
