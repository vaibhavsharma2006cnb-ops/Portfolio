"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const programmingLanguages = [
  "C",
  "C++",
  "Java",
  "JavaScript",
  "Python",
  "Kotlin",
];

const webSkills = [
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "HTML",
  "CSS",
];

const csSkills = [
  "DSA",
  "Algorithms",
  "OOPs",
  "DBMS",
  "Git",
  "GitHub",
];

export default function Home() {

  const [activeSection, setActiveSection] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  // CLICK SOUND
  const playClick = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.25;
    audio.currentTime = 0;
    audio.play();
  };

  const bgColor = darkMode
    ? "bg-black text-white"
    : "bg-[#f5f5f7] text-black";

  const cardColor = darkMode
    ? "bg-white/5 border-white/10"
    : "bg-white/60 border-black/10";

  const textGray = darkMode
    ? "text-gray-400"
    : "text-gray-700";

  return (

    <main className={`relative min-h-screen overflow-hidden transition-all duration-500 ${bgColor}`}>

      {/* GRID */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:80px_80px]
        "
      />

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px]" />

      {/* THEME BUTTON */}
      <div className="absolute top-6 right-6 z-50">

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            playClick();
            setDarkMode(!darkMode);
          }}
          className={`
          px-5 py-3 rounded-2xl
          backdrop-blur-2xl border
          transition duration-300
          ${cardColor}
          `}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </motion.button>

      </div>

      {/* MAIN */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-20">

          {/* LOGO */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
            text-3xl font-bold mb-10
            bg-gradient-to-r from-purple-400 to-pink-500
            bg-clip-text text-transparent
            "
          >
            Vaibhav.
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-purple-400 tracking-[5px] uppercase mb-6"
          >
            Software Engineer • Full Stack Developer
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="
            text-7xl md:text-8xl
            font-extrabold leading-tight
            "
          >

            Hi, I'm

            <br />

            <span className="
            bg-gradient-to-r from-purple-400 to-pink-500
            bg-clip-text text-transparent
            ">
              Vaibhav
            </span>

          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`
            mt-8 text-xl leading-10 max-w-2xl
            ${textGray}
            `}
          >

            Passionate about software engineering,
            problem solving, full stack development,
            and building AI-powered applications.

          </motion.p>

          {/* NAVIGATION */}
          <div className="flex flex-wrap gap-4 mt-12">

            {[
              "home",
              "about",
              "skills",
              "projects",
              "resume",
              "contact",
            ].map((item) => (

              <motion.button
                key={item}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  playClick();
                  setActiveSection(item === "home" ? "" : item);
                }}
                className={`
                px-6 py-3 rounded-2xl
                backdrop-blur-2xl
                border transition duration-300 capitalize

                ${
                  (item === "home" && activeSection === "") ||
                  activeSection === item
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 border-transparent shadow-lg shadow-purple-500/30 text-white"
                    : `${cardColor} hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/10`
                }
                `}
              >
                {item}
              </motion.button>

            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">

          <AnimatePresence mode="wait">

            {/* HOME */}
            {activeSection === "" && (

              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full max-w-xl h-[650px]"
              >

                {/* CARD 1 */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                  }}
                  className={`
                  absolute top-10 left-0
                  w-[320px]
                  rounded-[35px]
                  backdrop-blur-2xl
                  border p-8
                  shadow-2xl
                  ${cardColor}
                  `}
                >

                  <p className={`${textGray} mb-4`}>
                    Current Focus
                  </p>

                  <h2 className="text-4xl font-bold leading-tight">
                    Full Stack
                    <br />
                    Development
                  </h2>

                </motion.div>

                {/* CARD 2 */}
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                  }}
                  className={`
                  absolute top-72 right-0
                  w-[280px]
                  rounded-[35px]
                  backdrop-blur-2xl
                  border p-8
                  shadow-2xl
                  ${cardColor}
                  `}
                >

                  <h3 className="text-2xl font-bold mb-4">
                    Tech Stack
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {["React", "Next.js", "Python", "DSA"].map((tech) => (

                      <div
                        key={tech}
                        className={`
                        px-4 py-2 rounded-full
                        border text-sm
                        ${cardColor}
                        `}
                      >
                        {tech}
                      </div>

                    ))}

                  </div>

                </motion.div>

                {/* CARD 3 */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="
                  absolute bottom-0 left-20
                  w-[240px]
                  rounded-[35px]
                  bg-gradient-to-r from-purple-500/20 to-pink-500/20
                  backdrop-blur-2xl
                  border border-white/10
                  p-8 shadow-2xl
                  "
                >

                  <p className={`${textGray} mb-3`}>
                    Learning
                  </p>

                  <h3 className="text-3xl font-bold">
                    DSA &
                    <br />
                    AI Systems
                  </h3>

                </motion.div>

              </motion.div>

            )}

            {/* ABOUT */}
            {activeSection === "about" && (
              <SectionCard title="About Me" cardColor={cardColor}>

                <p className={`${textGray} text-lg leading-9`}>

                  I'm a Software Engineering enthusiast passionate about
                  full stack development, DSA, problem solving,
                  and building AI-powered applications.

                  <br /><br />

                  Alongside development, I continuously improve my
                  programming and engineering skills through
                  Data Structures & Algorithms and real-world projects.

                </p>

              </SectionCard>
            )}

            {/* SKILLS */}
            {activeSection === "skills" && (
              <SectionCard title="Technical Skills" cardColor={cardColor}>

                <SkillGroup
                  title="Languages"
                  skills={programmingLanguages}
                  cardColor={cardColor}
                />

                <SkillGroup
                  title="Web Development"
                  skills={webSkills}
                  cardColor={cardColor}
                />

                <SkillGroup
                  title="CS Fundamentals"
                  skills={csSkills}
                  cardColor={cardColor}
                />

              </SectionCard>
            )}

            {/* PROJECTS */}
            {activeSection === "projects" && (
              <SectionCard title="Featured Project" cardColor={cardColor}>

                <h3 className="text-3xl font-bold mb-5">
                  AI Resume Interview App
                </h3>

                <p className={`${textGray} text-lg leading-9`}>

                  AI-powered application for resume analysis,
                  job description matching, and mock interview preparation.

                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {["Python", "HTML", "CSS", "AI"].map((tech) => (

                    <div
                      key={tech}
                      className={`
                      px-4 py-2 rounded-full
                      border
                      ${cardColor}
                      `}
                    >
                      {tech}
                    </div>

                  ))}

                </div>

                <a
                  href="https://github.com/vaibhavsharma2006cnb-ops/ai_resume_interview_app"
                  target="_blank"
                  className="
                  inline-block mt-8
                  px-6 py-4 rounded-2xl
                  bg-gradient-to-r from-purple-500 to-pink-500
                  hover:opacity-90 transition
                  "
                >
                  View GitHub
                </a>

              </SectionCard>
            )}

            {/* RESUME */}
            {activeSection === "resume" && (

              <SectionCard title="My Resume" cardColor={cardColor}>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`
                  rounded-[35px]
                  border p-10
                  backdrop-blur-2xl
                  shadow-2xl
                  ${cardColor}
                  `}
                >

                  <div className="flex flex-col items-center text-center">

                    {/* ICON */}
                    <div className="
                    w-28 h-28 rounded-full
                    bg-gradient-to-r from-purple-500 to-pink-500
                    flex items-center justify-center
                    text-5xl mb-8 shadow-2xl
                    ">
                      📄
                    </div>

                    {/* TITLE */}
                    <h3 className="text-4xl font-bold mb-5">
                      Vaibhav Sharma Resume
                    </h3>

                    {/* DESCRIPTION */}
                    <p className={`${textGray} text-lg leading-9 max-w-2xl`}>

                      View or download my latest professional resume
                      including technical skills, projects,
                      certifications, and software engineering experience.

                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap justify-center gap-6 mt-10">

                      {/* VIEW */}
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        onClick={playClick}
                        className="
                        px-10 py-4 rounded-2xl
                        bg-gradient-to-r from-purple-500 to-pink-500
                        hover:scale-105
                        transition duration-300
                        shadow-xl shadow-purple-500/30
                        "
                      >
                        View Resume
                      </a>

                      {/* DOWNLOAD */}
                      <a
                        href="/resume.pdf"
                        download="Vaibhav_Sharma_Resume.pdf"
                        onClick={playClick}
                        className={`
                        px-10 py-4 rounded-2xl
                        border transition duration-300
                        hover:scale-105
                        hover:border-purple-400/40
                        ${cardColor}
                        `}
                      >
                        Download Resume
                      </a>

                    </div>

                  </div>

                </motion.div>

              </SectionCard>

            )}

            {/* CONTACT */}
            {activeSection === "contact" && (
              <SectionCard title="Contact Me" cardColor={cardColor}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {[
                    {
                      title: "LinkedIn",
                      link: "https://www.linkedin.com/in/vaibhavsharma2006",
                    },
                    {
                      title: "Instagram",
                      link: "https://www.instagram.com/vaibhav______sharma______",
                    },
                    {
                      title: "GitHub",
                      link: "https://github.com/vaibhavsharma2006cnb-ops/ai_resume_interview_app",
                    },
                    {
                      title: "LeetCode",
                      link: "https://leetcode.com/u/iW7RRsgMHD/",
                    },
                  ].map((item) => (

                    <a
                      key={item.title}
                      href={item.link}
                      target="_blank"
                      className={`
                      rounded-[30px]
                      border p-6
                      transition hover:scale-[1.02]
                      hover:shadow-xl hover:shadow-purple-500/10
                      ${cardColor}
                      `}
                    >

                      <h3 className="text-2xl font-bold mb-2">
                        {item.title}
                      </h3>

                      <p className={textGray}>
                        Open Profile
                      </p>

                    </a>

                  ))}

                </div>

                <div className="flex justify-center mt-10">

                  <a
                    href="mailto:vaibhavsharma2006.cnb@gmail.com"
                    className="
                    px-8 py-4 rounded-2xl
                    bg-gradient-to-r from-purple-500 to-pink-500
                    hover:opacity-90 transition
                    "
                  >
                    Email Me
                  </a>

                </div>

              </SectionCard>
            )}

          </AnimatePresence>

        </div>

      </div>

    </main>

  );
}

/* SECTION CARD */
function SectionCard({
  title,
  children,
  cardColor,
}: any) {

  return (

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      className={`
      w-full max-w-3xl
      rounded-[40px]
      backdrop-blur-2xl
      border p-10 shadow-2xl
      ${cardColor}
      `}
    >

      <h2 className="text-5xl font-bold mb-10">

        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {title}
        </span>

      </h2>

      {children}

    </motion.div>

  );
}

/* SKILL GROUP */
function SkillGroup({
  title,
  skills,
  cardColor,
}: any) {

  return (

    <div className="mb-10">

      <h3 className="text-2xl font-bold mb-5">
        {title}
      </h3>

      <div className="flex flex-wrap gap-4">

        {skills.map((skill: string) => (

          <div
            key={skill}
            className={`
            px-5 py-3 rounded-full
            border transition
            hover:scale-105
            ${cardColor}
            `}
          >
            {skill}
          </div>

        ))}

      </div>

    </div>

  );
}