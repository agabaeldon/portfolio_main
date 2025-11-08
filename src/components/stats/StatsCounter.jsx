import React, { useState, useEffect, useRef } from "react";
import { FaProjectDiagram, FaUsers, FaCode, FaAward, FaClock, FaRocket } from "react-icons/fa";

const StatsCounter = () => {
  const stats = [
    {
      icon: <FaProjectDiagram className="text-4xl" />,
      value: 50,
      suffix: "+",
      label: "Projects Delivered",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      value: 30,
      suffix: "+",
      label: "Happy Clients",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: <FaCode className="text-4xl" />,
      value: 50,
      suffix: "+",
      label: "Technologies",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: <FaClock className="text-4xl" />,
      value: 5,
      suffix: "+",
      label: "Years Experience",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      icon: <FaAward className="text-4xl" />,
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      icon: <FaRocket className="text-4xl" />,
      value: 100,
      suffix: "+",
      label: "Features Delivered",
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
    },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timers = stats.map((stat, index) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      const increment = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(
          Math.floor(increment * currentStep),
          stat.value
        );

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = currentValue;
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = stat.value;
            return newCounters;
          });
        }
      }, stepDuration);

      return timer;
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-gradient-to-br from-primary/5 via-secondary/30 to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
            By The Numbers
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Delivering excellence through proven results and measurable success
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center`}
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
                  {isVisible ? counters[index] : 0}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;

