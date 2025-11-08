import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";
import { BiServer } from "react-icons/bi";
import { SiGithubactions } from "react-icons/si";

const Services = [
  {
    name: "Web Applications",
    description:
      "High‑performance, responsive web apps with React, TypeScript, Tailwind, and modern tooling.",
    image: "https://picsum.photos/seed/web/800/500",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
    {
    name: "Mobile Apps",
    description:
      "Cross‑platform mobile development with React Native. Fast, stable, and App Store ready.",
    image: "https://picsum.photos/seed/mobile/800/500",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Backend & APIs",
    description:
      "Secure REST/GraphQL APIs, databases, auth, and integrations built for scale and reliability.",
    image: "https://picsum.photos/seed/backend/800/500",
    icon: <BiServer className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "UI/UX Design",
    description:
      "User‑centered design, wireframes, and design systems that increase engagement and clarity.",
    image: "https://picsum.photos/seed/ux/800/500",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-rose-500/70",
  },
  {
    name: "DevOps & CI/CD",
    description:
      "Automated testing, builds, and deployments. Docker, GitHub Actions, and cloud environments.",
    image: "https://picsum.photos/seed/devops/800/500",
    icon: <SiGithubactions className="text-4xl" />,
    bgColor: "bg-cyan-500/70",
  },
  {
    name: "Security & Performance",
    description:
      "Audits, hardening, and performance tuning to keep apps fast, safe, and compliant.",
    image: "https://picsum.photos/seed/security/800/500",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <article key={name} className="group rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow hover:shadow-lg transition">
            <div className={`relative h-40 ${bgColor} bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}></div>
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-3 text-primary">{icon}<h2 className="text-xl font-semibold text-inherit">{name}</h2></div>
              <p className="text-slate-600 dark:text-slate-300">{description}</p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 list-disc pl-5 space-y-1">
                <li>Planning, architecture, delivery</li>
                <li>Testing & performance budgets</li>
                <li>Secure deployment & monitoring</li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
