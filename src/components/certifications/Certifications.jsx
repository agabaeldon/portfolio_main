import React from "react";
import { FaCertificate, FaAward, FaGraduationCap, FaCode, FaBriefcase, FaTrophy, FaCheckCircle } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiJavascript, SiPython, SiMongodb, SiPostgresql, SiMysql, SiTailwindcss } from "react-icons/si";

const Certifications = () => {
  // Education Section
  const education = {
    icon: <FaGraduationCap className="text-5xl" />,
    title: "Bachelor of Software Engineering",
    issuer: "Mbarara University of Science and Technology",
    year: "2022 - 2026",
    description: "Comprehensive education in software development, algorithms, data structures, system design, and software architecture. Graduated with practical skills in full-stack development and modern programming paradigms.",
    color: "text-blue-600",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
  };

  // Work Experience
  const workExperience = {
    icon: <FaBriefcase className="text-5xl" />,
    title: "Software Developer",
    issuer: "EYIT (Empower Youth In Technology)",
    year: "2023 - Present",
    description: "Developing and maintaining enterprise-level applications including EYIT Media App (AI-powered marketing platform), KashFlo (financial management system), and PEPAS (education assessment platform). Working with React, Node.js, and cloud technologies.",
    color: "text-primary",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  };

  // Professional Certifications
  const certifications = [
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      year: "2022",
      description: "Responsive Web Design, JavaScript Algorithms, Front End Development, and APIs",
      color: "text-green-600",
      type: "certificate",
    },
    {
      icon: <SiReact className="text-3xl" />,
      title: "Advanced React & Redux",
      issuer: "Udemy",
      year: "2023",
      description: "Hooks, Context API, Redux Toolkit, Performance Optimization, and Testing",
      color: "text-cyan-500",
      type: "certificate",
    },
    {
      icon: <SiNodedotjs className="text-3xl" />,
      title: "Node.js Backend Development",
      issuer: "Coursera",
      year: "2022",
      description: "RESTful APIs, Express.js, Authentication, Database Integration",
      color: "text-green-700",
      type: "certificate",
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "JavaScript: The Complete Guide",
      issuer: "Udemy",
      year: "2021",
      description: "ES6+, Async Programming, OOP, Functional Programming",
      color: "text-yellow-600",
      type: "certificate",
    },
    {
      icon: <SiMongodb className="text-3xl" />,
      title: "MongoDB Database Administration",
      issuer: "MongoDB University",
      year: "2023",
      description: "Database Design, Aggregation, Indexing, Performance Tuning",
      color: "text-green-600",
      type: "certificate",
    },
    {
      icon: <FaTrophy className="text-3xl" />,
      title: "React Native Mobile Development",
      issuer: "Udemy",
      year: "2023",
      description: "Cross-platform iOS & Android Development, Navigation, Native APIs",
      color: "text-blue-500",
      type: "certificate",
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Git & GitHub Mastery",
      issuer: "Udemy",
      year: "2021",
      description: "Version Control, Branching, Merging, Collaboration Workflows",
      color: "text-orange-600",
      type: "certificate",
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "RESTful API Design",
      issuer: "LinkedIn Learning",
      year: "2022",
      description: "API Architecture, Best Practices, Documentation, Security",
      color: "text-purple-600",
      type: "certificate",
    },
    {
      icon: <SiPython className="text-3xl" />,
      title: "Python Programming",
      issuer: "Coursera",
      year: "2022",
      description: "Data Structures, Algorithms, Web Development with Django",
      color: "text-blue-700",
      type: "certificate",
    },
  ];

  // Technical Skills
  const skills = [
    { name: "React.js", icon: <SiReact />, level: "Expert" },
    { name: "Node.js", icon: <SiNodedotjs />, level: "Expert" },
    { name: "JavaScript", icon: <SiJavascript />, level: "Expert" },
    { name: "MongoDB", icon: <SiMongodb />, level: "Expert" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: "Advanced" },
    { name: "MySQL", icon: <SiMysql />, level: "Advanced" },
    { name: "Python", icon: <SiPython />, level: "Intermediate" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Expert" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/30 via-white to-secondary/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Education & Certifications
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Committed to continuous learning and professional development. 
            Here's a showcase of my academic background, professional certifications, and technical expertise.
          </p>
        </div>

        {/* Education & Work Experience - Featured Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Education */}
          <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src={education.image}
                alt={education.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className={`absolute top-4 left-4 ${education.color} bg-white dark:bg-gray-900 p-4 rounded-full shadow-xl`}>
                {education.icon}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <FaCheckCircle className="text-primary" />
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {education.year}
                </span>
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-800 dark:text-white">
                {education.title}
              </h3>
              <p className="text-base font-medium text-primary dark:text-primary/90 mb-3">
                {education.issuer}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {education.description}
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src={workExperience.image}
                alt={workExperience.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className={`absolute top-4 left-4 ${workExperience.color} bg-white dark:bg-gray-900 p-4 rounded-full shadow-xl`}>
                {workExperience.icon}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <FaCheckCircle className="text-primary" />
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {workExperience.year}
                </span>
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-800 dark:text-white">
                {workExperience.title}
              </h3>
              <p className="text-base font-medium text-primary dark:text-primary/90 mb-3">
                {workExperience.issuer}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {workExperience.description}
              </p>
            </div>
          </div>
        </div>

        {/* Professional Certifications Grid */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center dark:text-white">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className={`${cert.color} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-3 rounded-lg`}>
                    {cert.icon}
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-2 text-slate-800 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center dark:text-white">
            Core Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-4xl text-primary mb-2 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-xs text-slate-800 dark:text-white mb-1">
                  {skill.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

