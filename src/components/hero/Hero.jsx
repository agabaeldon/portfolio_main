import React from "react";
import personImg from "../../assets/person2.png";

const Hero = () => {
  return (
    <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2 items-center gap-8 sm:h-[600px] py-16">
        {/* text section */}
        <div className="">
          <div className="space-y-4 grid justify-items-center sm:justify-items-start">
            <p className="uppercase tracking-wide">Hello</p>
            <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
              I'm AGABA ELDON
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-white">
              Software Engineer & Vision Builder
            </p>
            <p className="text-black/75 dark:text-white/70 text-center sm:text-left max-w-xl">
              Every project starts as an idea. I turn ideas into reliable systems with clean design and clear logic.
            </p>

            <a
              href="mailto:agabaeldon@gmail.com"
              className="inline-block primary-btn !my-3"
            >
              Let’s Build Together
            </a>
          </div>
        </div>

        {/* image section */}
        <div>
          <img
            src={personImg}
            className="w-full md:max-w-lg mx-auto backdrop-blur-sm"
            alt="person"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
