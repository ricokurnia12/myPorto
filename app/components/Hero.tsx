"use client";
import { motion } from "framer-motion";
import React from "react";
import { ComputersCanvas } from "./canvas";
import { technologies } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#d8ca32] " />
          <div className="w-1 sm:h-80 h-40 bg-primary" />
        </div>
        <div className="lg:mt-8">
          <h1 className="heroHeadText text-slate-800   bordered-text-white ">
            Hi, I&apos;m{" "}
            <span className="text-orange-600 ">Rico</span>
          </h1>
          <p className="heroSubTex  text-orange-600 font-bold text-2xl">
            Im a Full Stack Web Developer&nbsp;
            {/* <br className="sm:block hidden" />& UI/UX Designer */}
          </p>
        </div>

      </div>

      {/* <ComputersCanvas /> */}
      <div className="absolute top-64 lg:top-80 flex-col  w-full flex justify-center items-center">
        <div className="text-base font-semibold bg-orange-600 mb-4  py-1 px-4 rounded-2xl">Tech</div>
        <div className="flex flex-wrap gap-2 justify-center max-w-2xl px-2 lg:px-0">        {technologies.map((el, idx) => {
          return (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              className={`border border-orange-600 bg-orange-600 items-center bg-opacity-90 rounded-lg flex flex-wrap gap-1 p-1 px-2`}
            >
              <div className="w-10 lg:w-12 lg:h-12 h-10 rounded-full bg-white border flex justify-center items-center">
                <img src={el.icon} alt={el.name} className="w-4 h-4 lg:w-6 lg:h-6" />
              </div>
              <p className=" font-semibold"> {el.name}</p>
            </motion.div>
          )
        })}
        </div>


      </div>
    </section>
  );
};

export default Hero;
