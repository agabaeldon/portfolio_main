import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <section className="container py-12 dark:text-white">
        <h1 className="text-2xl font-bold mb-4">Service not found</h1>
        <Link to="/services" className="outline-btn">Back to services</Link>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <section className="container py-12 dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img src={service.image} alt={service.name} className="w-full h-80 object-cover rounded-xl border border-gray-100 dark:border-gray-800" />
        </div>
        <div>
          <div className="flex items-center gap-3 text-primary mb-2"><Icon className="text-3xl" /><h1 className="text-3xl font-bold">{service.name}</h1></div>
          <p className="text-slate-600 dark:text-slate-300 mb-4">{service.description}</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-1 mb-6">
            {service.bullets.map(b => (<li key={b}>{b}</li>))}
          </ul>
          <Link to="/services" className="outline-btn">Back</Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;


