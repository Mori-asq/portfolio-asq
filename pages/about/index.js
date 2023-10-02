import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import CountUp from "react-countup";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaBootstrap,
  FaGitAlt,
  FaSass,
  FaSearchengin
  
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiCsharp,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiMysql, 
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiLinux,
  SiWindows
  
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End",
        icons: [
          <FaHtml5 className="text-orange-500" key={"html"}/>,
          <FaCss3 className="text-[#007bff]" key={"css"}/>,
          <FaSass className="text-pink-500" key={"sass"}/>,
          <FaBootstrap className="text-purple-500" key={"bootstrap"}/>,
          <SiTailwindcss className="text-[#00aaff]" key={"tailwind"}/>,
          <FaJs className="text-yellow-300" key={"js"}/>,
          <SiTypescript className="text-[#007bff]" key={"ts"}/>,
          <FaReact className="text-[#00aaff]" key={"react"}/>,
          <SiNextdotjs className="text-white bg-black rounded-[50%]" key={"nextjs"}/>,
          <FaGitAlt className="text-orange-400" key={"git"}/>,
        ],
      },
      {
        title: "Back-End",
        icons: [<SiCsharp className="text-purple-700 bg-white rounded-full" key={"csharp"}/>, <SiDotnet className="text-purple-600" key={"dotnet"}/>, <SiMicrosoftsqlserver key={"sql"}/>, <SiMysql key={"mysql"}/>, <SiMongodb className="text-green-700" key={"mongodb"}/>, <SiNodedotjs className="text-green-400" key={"nodejs"}/>, <SiExpress key={"expressjs"}/>],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma className="text-pink-500" key={"figma"} />, <SiAdobexd className="text-pink-500" key={"xd"}/>, <SiAdobephotoshop className="text-[#00aaff]" key={"ps"}/>],
      },
      {
        title: "Operating System",
        icons: [<SiLinux  key={"linux"}/>, <SiWindows key={"windows"} />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Front-End Developer - Digitoon Company",
        stage: "2023 - now",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Responsive Web Design - FreeCodeCamp",
        stage: "2023",
      },
      {
        title: "JavaScript Algorithms and Data Structures - FreeCodeCamp",
        stage: "2023",
      },
      {
        title: "React Js - Sematec Institute, Iran",
        stage: "2023",
      },
      {
        title: "Web Design - Sematec Institute, Iran",
        stage: "2022",
      },
      {
        title: "MCTS: SQL Server 2019(Implementation) - Sematec Institute, Iran",
        stage: "2021",
      },
      {
        title: "Programming C# - Sematec Institute, Iran",
        stage: "2021",
      },
      {
        title: "Microsoft .Net Fundamentals - Sematec Institute, Iran",
        stage: "2021",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            2 Years age, I began learning Web Design. Since then, I&lsquo;ve done many
            projects for myself as hobby, Which you&lsquo;ll see in this website.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
