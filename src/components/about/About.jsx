import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500 space-y-4">
            <p>
              I build clean, reliable software with a focus on user experience,
              performance, and maintainability. From idea to deployment, I turn
              concepts into products people enjoy using.
            </p>
            <p>
              My approach combines thoughtful design with solid engineering—clear
              architecture, tested code, and smooth releases.
            </p>
            <div className="">
              <a
                href="../../assets/Fake Resume.pdf"
                className="primary-btn my-6 mr-6 inline-block"
                download
              >
                Download Resume
              </a>
              <a
                href="tel:+123456789"
                title="Call +123456789 "
                className="outline-btn my-6"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
