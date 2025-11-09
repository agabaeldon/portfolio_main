import React from "react";
import Services from "../components/services/Services.jsx";

const ServicesPage = () => {
  return (
    <div className="dark:text-white">
      {/* Hero Section */}
      <section className="relative h-56 md:h-72 w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop)"
          }}
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">
              Services I Offer
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-3xl">
              Comprehensive software development services tailored to your business needs. 
              From web and mobile applications to AI-powered solutions and cloud infrastructure, 
              I deliver high-quality, scalable solutions that drive business growth.
            </p>
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
};

export default ServicesPage;


