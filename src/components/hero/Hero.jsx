import React from "react";
import { Link } from "react-router-dom";
import { 
  FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, 
  FaEnvelope, FaDownload, FaArrowRight, FaCode,
  FaMobileAlt, FaServer, FaCloud
} from "react-icons/fa";
import personImg from "../../assets/person.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center gap-12 min-h-[85vh] py-8 lg:py-12">
        {/* Left Content Section */}
        <div className="space-y-6 lg:space-y-8 z-10 animate-fade-up pt-8 lg:pt-0">
          {/* Main Heading */}
          <div className="space-y-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="block text-gray-900 dark:text-white">Hello, I'm</span>
              <span className="block text-primary dark:text-primary/90 font-extrabold">
                AGABA ELDON
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 pt-1">
              <span>Software Engineer</span>
              <span className="text-primary">•</span>
              <span>Full Stack Developer</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300 leading-snug max-w-sm">
            Transforming ideas into powerful digital solutions. I specialize in building 
            <span className="font-semibold text-primary"> scalable web applications</span>, 
            <span className="font-semibold text-primary"> mobile apps</span>, and 
            <span className="font-semibold text-primary"> robust backend systems</span> that 
            drive business growth and deliver exceptional user experiences.
          </p>

          {/* --- moved image here so on small screens it appears right after the paragraph;
                 on large screens it is placed in the right column via grid placement --- */}
          <div className="relative z-10 mt-6 lg:mt-0 lg:col-start-2 lg:row-start-1 lg:flex lg:justify-end lg:hidden -mt-0 lg:-mt-16"> {/* show on small, hide on lg */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>

              {/* transparent image (no white card) */}
              <img
                src={personImg}
                className="w-full h-auto object-cover rounded-xl bg-transparent"
                alt="AGABA ELDON - Software Engineer"
              />
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="flex flex-wrap gap-6 py-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                <FaCode className="text-primary text-xl" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">50+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                <FaMobileAlt className="text-primary text-xl" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">5+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years Exp</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                <FaCloud className="text-primary text-xl" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">100%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get In Touch
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="../../assets/Fake Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-primary hover:text-primary dark:hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Follow me:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
           
              <a
                href="https://wa.me/256765026870"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
              <a
                href="mailto:agabaeldon@gmail.com"
                className="p-2.5 bg-white dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Email"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:flex relative z-10 lg:justify-end -mt-8 lg:-mt-16"> {/* hide on small, show on lg */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            
            {/* transparent image (no white card) */}
            <img
              src={personImg}
              className="w-full h-auto object-cover rounded-xl bg-transparent"
              alt="AGABA ELDON - Software Engineer"
            />

            {/* Floating Badge (kept) */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                  <FaServer className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Full Stack</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
