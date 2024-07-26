"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof experiences)[0];
};


// const ExperienceCard = ({ experience }: any) => {
//   return (
//     <div className="bg-orange-600 rounded-lg p-4 mb-8 w-full shadow-md flex">
//       {/* <div
//         className="flex-shrink-0 w-16 h-16 rounded-full flex justify-center items-center mr-4"
//         style={{ background: experience.iconBg }}
//       >
//         <Image src={experience.icon} width={48} height={48} alt={experience.company_name} />
//       </div> */}
//       <div className="flex flex-col">
//         <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
//         <p className="text-lg text-gray-600">{experience.company_name}</p>
//         <p className="text-sm text-gray-400">{experience.date}</p>
//         <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
//           {experience.points.map((point, index) => (
//             <li key={index}>{point}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

const Experience = () => {
  console.log({ experiences });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="styles.sectionSubText text-center text-secondary">
          What I have done so far
        </p>
        <h2 className="sectionHeadText text-center text-secondary">
          Work Experience.
        </h2>
      </motion.div>


      <div className="mt-20 flex flex-col">
        <div className="timeline">
          <ul>

            <li>
              <div className="right_content">

                <div className="bg-orange-600 rounded-lg p-2 mb-8 w-full shadow-md">
                  {/* <div
        className="flex-shrink-0 w-16 h-16 rounded-full flex justify-center items-center mr-4"
        style={{ background: experience.iconBg }}
      >
        <Image src={experience.icon} width={48} height={48} alt={experience.company_name} />
      </div> */}
                  <div className="flex flex-col w-full items-start">
                    <h3 className="text-xl font-bold text-white">Finance & Digital Marketing</h3>
                    <p className="text-lg text-">Sehat 365</p>
                    <p className="text-sm ">February 2022 - September 2022</p>
                    <div className="mt-2 flex flex-col list-disc  text-white items-start ">
                      {/* {experience.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))} */}                     <p className="text-start">  Collecting Accounts Receivable Data services</p>
                      <p className="text-start">Creating and Analyzing Social Media Content</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left_content">
                <h3>February 2022 </h3>
              </div>
            </li>
            <li>
              <div className="right_content">

                <div className="bg-orange-600 rounded-lg p-2 mb-8 w-full shadow-md">
                  {/* <div
        className="flex-shrink-0 w-16 h-16 rounded-full flex justify-center items-center mr-4"
        style={{ background: experience.iconBg }}
      >
        <Image src={experience.icon} width={48} height={48} alt={experience.company_name} />
      </div> */}
                  <div className="flex flex-col w-full items-start">
                    <h3 className="text-xl font-bold text-white">Fullstack Web Developer</h3>
                    <p className="text-lg text-">Ganesha Operation (Pusat)</p>
                    <p className="text-sm ">Oktober 2022 - Present</p>
                    <div className="mt-2 flex flex-col list-disc  text-white items-start ">
                      {/* {experience.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))} */}
                      <p className="text-start">Develop and maintain web applications and web services</p>
                      <p className="text-start">Monitor and optimize web application performance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left_content">
                <h3 className="text-orange-600">Oktober 2022 </h3>
              </div>
            </li>


            <div style={{ clear: "both" }} />
          </ul>
        </div>

        {/* {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))} */}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
