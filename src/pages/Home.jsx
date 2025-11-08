import React from "react";
import Hero from "../components/hero/Hero.jsx";
import Services from "../components/services/Services.jsx";
import Skills from "../components/skills/Skills.jsx";
import About from "../components/about/About.jsx";
import StatsCounter from "../components/stats/StatsCounter.jsx";
import SubscribeForm from "../components/subscribe/SubscribeForm.jsx";
import Testimonials from "../components/testimonials/Testimonials.jsx";
import Certifications from "../components/certifications/Certifications.jsx";
import BlogPreview from "../components/blog/BlogPreview.jsx";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <section className="container py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/about" className="outline-btn">Explore About</Link>
          <Link to="/projects" className="outline-btn">Explore Projects</Link>
          <Link to="/services" className="outline-btn">Explore Services</Link>
          <Link to="/skills" className="outline-btn">Explore Skills</Link>
          <Link to="/contact" className="primary-btn">Contact Me</Link>
        </div>
      </section>
      <About />
      <Skills />
      <Services />
      <Testimonials />
      <Certifications />
      <BlogPreview />
      <StatsCounter />
      <SubscribeForm />
    </div>
  );
};

export default HomePage;


