import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectsPage = () => {
  return (
    <section className="container py-12 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="bg-white dark:bg-gray-900 rounded-xl shadow border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition">
            {/* Mobile: Round border, Desktop: Rectangular but smaller */}
            <div className="flex justify-center items-center py-6 bg-transparent md:hidden">
              <img src={p.image} alt={p.title} className="w-32 h-32 rounded-full object-cover border-4 border-primary/20" />
            </div>
            <img src={p.image} alt={p.title} className="hidden md:block w-full h-36 object-cover" />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-center md:text-left">{p.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 text-center md:text-left">{p.description}</p>
              <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-secondary dark:bg-gray-800">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-3 flex gap-2 justify-center md:justify-start flex-wrap">
                {p.liveUrl ? <a href={p.liveUrl} className="primary-btn text-sm px-3 py-1.5">Visit Site</a> : null}
                {p.downloadUrl ? <a href={p.downloadUrl} className="outline-btn text-sm px-3 py-1.5">Download App</a> : null}
                <Link to={`/projects/${p.slug}`} className="outline-btn text-sm px-3 py-1.5">Read more</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;


