"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="xs:w-[250px] w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-px rounded-[20px] shadow-lg shadow-yellow-600"
        >
          <div className="bg-orange-600 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <Image
              src={icon}
              width={64}
              height={64}
              alt={title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText font-semibold">Introduction</p>
        <h2 className="styles.sectionHeadText text-secondary">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
      >
        As a skilled full-stack web developer, I possess the expertise to seamlessly bridge the gap between front-end design and back-end functionality, ensuring that your website not only looks stunning but also performs flawlessly. With a deep understanding of JavaScript, HTML, CSS, and popular frameworks like React and Tailwind, I am equipped to translate your vision into a captivating and user-friendly web experience.
      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");
