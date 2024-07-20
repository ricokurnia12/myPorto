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
        As a talented Front-End Web Developer and UI/UX Designer, I have honed
        my skills in working with a variety of JavaScript libraries, including
        React.js, Next.js and Three.js. Through my experience, I have developed
        a deep understanding of how these libraries can be leveraged to create
        dynamic and engaging user interfaces. In addition, I am a quick learner
        and have worked on numerous projects using popular CSS frameworks such
        as Tailwind and Bootstrap. I am confident in my ability to create sleek
        and responsive designs that meet the specific needs of any project. With
        a keen eye for detail and a passion for delivering high-quality work, I
        am dedicated to creating beautiful and user-friendly experiences that
        delight users.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
