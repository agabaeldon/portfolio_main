import React from "react";
import About from "../components/about/About.jsx";
import { FiAward, FiBriefcase, FiBook, FiCode, FiTrendingUp } from "react-icons/fi";
import person2Img from "../assets/person2.jpeg";

const AboutPage = () => {
  const experience = [
    {
      year: "2023 - Present",
      role: "Full Stack Software Engineer",
      company: "Freelance & Contract",
      description: "Building scalable web and mobile applications for clients across various industries. Specializing in React, Node.js, and cloud infrastructure.",
      achievements: ["Delivered 30+ production applications", "Led technical architecture for 5+ major projects", "Mentored junior developers"]
    },
    {
      year: "2021 - 2023",
      role: "Junior Developer",
      company: "Tech Startups",
      description: "Developed frontend and backend features, collaborated with cross-functional teams, and contributed to product development.",
      achievements: ["Improved application performance by 40%", "Implemented CI/CD pipelines", "Reduced bug reports by 30%"]
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Software Engineering",
      institution: "University",
      year: "2022 - 2026",
      description: "Focused on software engineering, algorithms, and database systems."
    },
    {
      degree: "Certifications",
      institution: "Various Platforms",
      year: "Ongoing",
      description: "AWS Certified, React Advanced Patterns, Node.js Best Practices, Docker & Kubernetes"
    }
  ];

  const achievements = [
    { icon: <FiAward />, title: "30+ Projects", description: "Successfully delivered production applications" },
    { icon: <FiTrendingUp />, title: "5+ Years", description: "Professional development experience" },
    { icon: <FiCode />, title: "Full Stack", description: "Expertise across entire tech stack" },
    { icon: <FiBriefcase />, title: "Client Success", description: "100% client satisfaction rate" }
  ];

  return (
    <div className="dark:text-white">
      {/* Visual banner */}
      <section className="relative h-64 md:h-80 w-full overflow-hidden">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzUg3wwrFtMTqp3rN9sN5t_iu9IKpBHBIag&s" alt="About banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">About Me</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Software Engineer crafting reliable, scalable products with clean UX and robust engineering practices. 
              Passionate about turning complex problems into elegant solutions.
            </p>
          </div>
        </div>
      </section>

      <About />

      {/* Profile and highlights */}
      <section className="container md:w-[80%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <img src={person2Img} alt="Profile" className="w-full h-80 object-cover rounded-xl shadow-lg border border-gray-100 dark:border-gray-800" />
          </div>
          <div className="md:col-span-2 space-y-6 text-slate-600 dark:text-slate-300">
            <div>
              <h2 className="text-3xl font-bold mb-3">Professional Summary</h2>
              <p className="text-lg leading-relaxed mb-4">
                I'm a full-stack software engineer with over 5 years of experience building scalable web and mobile applications. 
                My expertise spans from frontend development with React and TypeScript to backend architecture with Node.js and cloud infrastructure.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in creating user-centric applications that are not only visually appealing but also performant, 
                secure, and maintainable. My approach combines modern development practices with a focus on code quality, 
                testing, and continuous improvement.
              </p>
            </div>
            
            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow hover:shadow-lg transition">
                  <div className="text-2xl text-primary mb-2">{achievement.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <FiBriefcase className="text-3xl text-primary" />
            <h2 className="text-3xl font-bold">Professional Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-primary/30 dark:border-primary/20">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow hover:shadow-lg transition">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">{exp.year}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <FiBook className="text-3xl text-primary" />
            <h2 className="text-3xl font-bold">Education & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-primary font-medium mb-2">{edu.institution}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{edu.year}</p>
                <p className="text-slate-600 dark:text-slate-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Strengths */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Core Strengths</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
              <h3 className="font-bold text-lg mb-2 text-primary">Frontend Development</h3>
              <p className="text-slate-600 dark:text-slate-300">React, TypeScript, Tailwind CSS, Next.js, Vue.js, Accessibility (WCAG), Responsive Design</p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
              <h3 className="font-bold text-lg mb-2 text-primary">Backend Development</h3>
              <p className="text-slate-600 dark:text-slate-300">Node.js, Express, REST/GraphQL APIs, Database Design, Authentication & Authorization, Microservices</p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
              <h3 className="font-bold text-lg mb-2 text-primary">DevOps & Infrastructure</h3>
              <p className="text-slate-600 dark:text-slate-300">CI/CD Pipelines, Docker, Kubernetes, AWS, Azure, Cloud Architecture, Monitoring & Logging</p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
              <h3 className="font-bold text-lg mb-2 text-primary">Quality & Best Practices</h3>
              <p className="text-slate-600 dark:text-slate-300">Testing (Unit, Integration, E2E), Code Reviews, Performance Optimization, Security Best Practices, Agile/Scrum</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutPage;


