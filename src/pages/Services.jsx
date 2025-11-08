import React from "react";
import Services from "../components/services/Services.jsx";
import { Link } from "react-router-dom";
import { services } from "../data/services";

const ServicesPage = () => {
  return (
    <div>
      <Services />
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">What I offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s => {
            const Icon = s.icon;
            return (
              <article key={s.slug} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow hover:shadow-lg transition overflow-hidden">
                <div className="h-32 bg-center bg-cover" style={{ backgroundImage: `url(${s.image})` }} />
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-3 text-primary"><Icon className="text-3xl" /><h3 className="text-xl font-semibold">{s.name}</h3></div>
                  <p className="text-slate-600 dark:text-slate-300">{s.summary}</p>
                  <ul className="text-sm text-slate-500 dark:text-slate-400 list-disc pl-5 space-y-1">
                    {s.bullets.map(b => (<li key={b}>{b}</li>))}
                  </ul>
                  <Link to={`/services/${s.slug}`} className="inline-block mt-2 outline-btn">Read more</Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;


