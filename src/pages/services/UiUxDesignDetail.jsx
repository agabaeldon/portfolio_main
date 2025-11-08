import React from "react";
import { Link } from "react-router-dom";
import { uiUxDesignData } from "../../data/services/uiUxDesign";
import { FiCheck } from "react-icons/fi";

const UiUxDesignDetail = () => {
  const service = uiUxDesignData;
  const Icon = service.icon;

  return (
    <div className="dark:text-white">
      {/* Hero Section with Image */}
      <section className="relative h-64 md:h-96 w-full overflow-hidden">
        <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-8">
            <div className="flex items-center gap-4 text-white mb-4">
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                <Icon className="text-4xl" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold">{service.name}</h1>
            </div>
            <p className="text-white/90 text-lg max-w-2xl">{service.summary}</p>
          </div>
        </div>
      </section>

      {/* Main Content - Customize this section's styling as needed */}
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                {service.detailedDescription || service.description}
              </p>
            </div>

            {/* Features Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                    <div className="p-1 rounded-full bg-primary/10 text-primary mt-0.5">
                      <FiCheck className="text-lg" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
              <h3 className="text-xl font-bold mb-4">Service Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Service Type</p>
                  <p className="font-semibold">{service.name}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Category</p>
                  <p className="font-semibold">{service.bullets.join(", ")}</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            {service.technologies && (
              <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
                <h3 className="text-xl font-bold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-secondary dark:bg-gray-800 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <Link to="/services" className="block w-full text-center outline-btn">
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UiUxDesignDetail;

