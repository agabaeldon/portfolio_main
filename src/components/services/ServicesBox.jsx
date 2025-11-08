import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";

const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.slug} className="group rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow hover:shadow-lg transition">
              <div className="relative h-40 bg-center bg-cover" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  <Icon className="text-3xl" />
                  <h2 className="text-xl font-semibold text-inherit">{service.name}</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 list-disc pl-5 space-y-1">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <Link to={`/services/${service.slug}`} className="inline-block mt-4 primary-btn">
                  Read more
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesBox;
