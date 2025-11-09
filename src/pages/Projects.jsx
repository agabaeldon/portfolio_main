import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectsPage = () => {
  return (
    <div className="dark:text-white">
      {/* Hero Section */}
      <section className="relative h-56 md:h-72 w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop)"
          }}
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">
              My Projects
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-3xl">
              Innovative solutions transforming ideas into impactful digital products. 
              From AI-powered platforms to enterprise applications, each project showcases 
              expertise in full-stack development and cutting-edge technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-white dark:bg-gray-900 rounded-xl shadow border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Mobile: Round border, Desktop: Rectangular but smaller */}
              <div className="flex justify-center items-center py-6 bg-transparent md:hidden">
                <img src={p.image} alt={p.title} className="w-40 h-40 rounded-full object-cover border-4 border-primary/20" />
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
                  {p.liveUrl ? <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="primary-btn text-sm px-3 py-1.5">Visit Site</a> : null}
                  {p.downloadUrl ? <a href={p.downloadUrl} target="_blank" rel="noopener noreferrer" className="outline-btn text-sm px-3 py-1.5">Download App</a> : null}
                  <Link to={`/projects/${p.slug}`} className="outline-btn text-sm px-3 py-1.5">Read more</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;


