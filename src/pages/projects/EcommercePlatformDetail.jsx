import React from "react";
import { Link } from "react-router-dom";
import { ecommercePlatformData } from "../../data/projects/ecommercePlatform";
import { FiCheck, FiExternalLink } from "react-icons/fi";

const EcommercePlatformDetail = () => {
  const project = ecommercePlatformData;

  return (
    <div className="dark:text-white">
      <section className="relative h-64 md:h-96 w-full overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                {project.status}
              </span>
              <span className="text-white/70 text-sm">{project.year}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
            <p className="text-white/90 text-lg max-w-2xl">{project.detailedDescription}</p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">About the Project</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                    <div className="p-1 rounded-full bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                      <FiCheck className="text-lg" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {project.images && project.images.length > 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.slice(1).map((img, idx) => (
                    <img key={idx} src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-64 object-cover rounded-xl border border-gray-100 dark:border-gray-800" />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Status</p>
                  <p className="font-semibold">{project.status}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Year</p>
                  <p className="font-semibold">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Type</p>
                  <p className="font-semibold">{project.type === "both" ? "Web & Mobile" : project.type === "web" ? "Web Application" : "Mobile App"}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
              <h3 className="text-xl font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-secondary dark:bg-gray-800 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow">
              <h3 className="text-xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded bg-primary/10 text-primary text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full primary-btn">
                  <FiExternalLink /> Visit Site
                </a>
              )}
              <Link to="/projects" className="block w-full text-center outline-btn">
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommercePlatformDetail;

