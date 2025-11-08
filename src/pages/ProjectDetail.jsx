import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <section className="container py-12 dark:text-white">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/projects" className="outline-btn">Back to projects</Link>
      </section>
    );
  }

  return (
    <section className="container py-12 dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-xl border border-gray-100 dark:border-gray-800" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-slate-600 dark:text-slate-300 mb-4">{project.details || project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {(project.tags || []).map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-secondary dark:bg-gray-800">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl ? <a href={project.liveUrl} className="primary-btn">Visit Site</a> : null}
            {project.downloadUrl ? <a href={project.downloadUrl} className="outline-btn">Download App</a> : null}
            <Link to="/projects" className="outline-btn">Back</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;


