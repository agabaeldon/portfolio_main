import React from "react";
import Certifications from "../components/certifications/Certifications.jsx";

const CertificationsPage = () => {
  return (
    <div className="dark:text-white">
      <section className="relative h-48 md:h-64 w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)"
          }}
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
              Certifications
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Professional certifications and achievements
            </p>
          </div>
        </div>
      </section>
      <Certifications />
    </div>
  );
};

export default CertificationsPage;

