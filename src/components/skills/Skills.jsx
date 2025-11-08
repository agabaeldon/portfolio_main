import React from "react";
import SkillsLevel from "./SkillsLevel";

const Skills = () => {
  return (
    <section id="skills" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[80%] sm:py-16 py-10">
        <div className="grid items-start gap-8 grid-cols-1 lg:grid-cols-2">
          <div className="font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Skills
            </h1>
          </div>
          <div className="text-slate-500">
            <SkillsLevel skillsName="HTML, CSS" percentage="90%" />
            <SkillsLevel skillsName="TypeScript / React" percentage="85%" />
            <SkillsLevel skillsName="Node.js / APIs" percentage="80%" />
            <SkillsLevel skillsName="CI/CD & Docker" percentage="75%" />
            <SkillsLevel skillsName="Tailwind / UI" percentage="85%" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
          {["React","TypeScript","Node","GraphQL","Tailwind","Docker"].map(t => (
            <span key={t} className="text-sm px-3 py-2 rounded bg-secondary dark:bg-gray-900 text-center border border-gray-100 dark:border-gray-800">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
