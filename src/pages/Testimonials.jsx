import React from "react";
import Testimonials from "../components/testimonials/Testimonials.jsx";

const TestimonialsPage = () => {
  return (
    <div className="dark:text-white">
      <section className="relative h-48 md:h-64 w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop)"
          }}
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
              Testimonials
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              What clients say about working with me
            </p>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default TestimonialsPage;

