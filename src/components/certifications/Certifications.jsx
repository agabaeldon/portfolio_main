import React from "react";
import { FaCertificate, FaAward, FaGraduationCap } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "React Advanced Patterns",
      issuer: "Meta (Facebook)",
      year: "2023",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      year: "2022",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Node.js Backend Development",
      issuer: "Udemy",
      year: "2022",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/30 via-white to-secondary/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
            Certifications & Achievements
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`${cert.bgColor} p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center`}
            >
              <div className={`${cert.color} mb-4 flex justify-center`}>
                {cert.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                {cert.issuer}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

