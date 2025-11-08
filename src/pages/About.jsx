import React from "react";
import About from "../components/about/About.jsx";

const AboutPage = () => {
  return (
    <div className="dark:text-white">
      {/* Visual banner */}
      <section className="relative h-64 md:h-80 w-full overflow-hidden">
        <img src="https://img.freepik.com/premium-photo/lines-code-characters-representing-software-development-emphasizing-glowing-effect-bi_1091925-29418.jpg?semt=ais_hybrid&w=740&q=80" alt="About banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-3xl md:text-5xl font-bold text-white animate-fade-up">About Me</h1>
            <p className="text-white/80 mt-2 max-w-xl animate-fade-up [animation-delay:120ms]">Software Engineer crafting reliable, scalable products with clean UX and robust engineering practices.</p>
          </div>
        </div>
      </section>

      <About />

      {/* Profile and highlights */}
      <section className="container md:w-[80%] py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop" alt="Profile" className="w-full h-72 object-cover rounded-xl shadow border border-gray-100 dark:border-gray-800" />
        </div>
        <div className="md:col-span-2 space-y-6 text-slate-600 dark:text-slate-300">
          <div>
            <h2 className="text-2xl font-bold mb-2">What I do</h2>
            <p>Full‑stack delivery across frontend, backend, and DevOps. I turn concepts into shipped, maintainable software.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
              <p className="text-sm text-slate-500">Experience</p>
              <p className="text-2xl font-bold">5+ yrs</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
              <p className="text-sm text-slate-500">Projects</p>
              <p className="text-2xl font-bold">30+ shipped</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
              <p className="text-sm text-slate-500">Focus</p>
              <p className="text-2xl font-bold">Quality & DX</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Core strengths</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li className="p-3 rounded bg-secondary dark:bg-gray-900">Frontend: React, TypeScript, Tailwind, a11y</li>
              <li className="p-3 rounded bg-secondary dark:bg-gray-900">Backend: Node, REST/GraphQL, DBs, auth</li>
              <li className="p-3 rounded bg-secondary dark:bg-gray-900">DevOps: CI/CD, Docker, cloud, monitoring</li>
              <li className="p-3 rounded bg-secondary dark:bg-gray-900">Quality: tests, reviews, perf budgets</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;


