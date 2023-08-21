import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobephotoshop,
  SiAdobexd,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import CountUp from "react-countup";
//  data
const aboutData = [
  {
    title: "O nás ",
    info: [
      {
        title: "Web Development",
        
      },
      {
        title: "Co umíme ? ",
       
      },
    ],
  },
  {
    title: "Historie",
    info: [
      {
        title: "aaaaaaa",
        stage: "2011 - 2012",
      },
      {
        title: ";",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "Zkušenosti",
    info: [
      {
        title: "a",
        stage: "2012 - 2023",
      },
      {
        title: "b",
        stage: "2010 - 2012",
      },
      {
        title: "",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "Partneři",
    info: [
      {
        title: "Bevy City",
        stage: "2011",
      },
      {
        title: "Mobilní toalety",
        stage: "2009",
      },
      {
        title: "Optimindx",
        stage: "2006",
      },
      {
        title: "Questify",
        stage: "2006",
      },
    ],
  },
];
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primaty/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right, 0.2")}
        initial="hidden"
        animate="show"
        exit="exit"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            Vstupte s námi do světa{" "}
            <span className="text-accent"> neomezených</span> možností{" "}
            <span className="text-accent">.</span>
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Vítejte v digitálním ateliéru, kde se vaše vize stávají realitou.
            Jsme zde, abychom vaše myšlenky převedli do virtuálního prostoru,
            kde se mohou rozvinout a zazářit.
          </p>
          <div>
            <div className="hidden md:flex md:max-w-xl xl:ax-w-none mx-auto xl:mx-0 mb-8">
              <div className="flex flex-1 xl:gap-x-6">
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                    <CountUp start={0} end={10} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Rok zkušeností
                  </div>
                </div>
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                    <CountUp start={0} end={30} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Spokojených klientů
                  </div>
                </div>

                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                    <CountUp start={0} end={8} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Počet partnerů
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:translation-all after:duration-300"
                  } cursor-pointer capitalize xl:textl-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after::-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="  py-2 xl:py-6 flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  <div> {item.title}</div>
                  <div className="hidden md:flex"></div>
                  <div> </div>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
