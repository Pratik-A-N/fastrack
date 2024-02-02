import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Martel_Sans } from "next/font/google";


const martel = Martel_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "600", "700", "800", "900"],
  });

function Faq() {
  return (
    <div className="container2 h-auto bg-white text-black px-32 pt-20 pb-36">
          <div className={`faq ${martel.className} cust-text-6xl`}>FAQ’s</div>
          <div className="list">
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Is there a cost for learning?"
                title="Is there a cost for learning?"
                className="my-5 acc"
              >
                {/* {defaultContent} */}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Can students are eligible for competition?"
                title="Can students are eligible for competition?"
                className="my-5 acc"
              >
                {/* {defaultContent} */}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="How trading competition can help me?"
                title="How trading competition can help me?"
                className="my-5 acc"
              >
                Engage in a unique learning experience where theory meets
                practice. The competition offers a dynamic platform to apply
                classroom knowledge to real-world trading scenarios.
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Is Fastrack available on App store?"
                title="Is Fastrack available on App store?"
                className="my-5 acc"
              >
                {/* {defaultContent} */}
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Do anyone can create or Host competition"
                title="Do anyone can create or Host competition"
                className="my-5 acc"
              >
                {/* {defaultContent} */}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
  )
}

export default Faq