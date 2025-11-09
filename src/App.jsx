import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import ServicesPage from "./pages/Services.jsx";
import SkillsPage from "./pages/Skills.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import ContactPage from "./pages/Contact.jsx";
import TestimonialsPage from "./pages/Testimonials.jsx";
import CertificationsPage from "./pages/Certifications.jsx";
import BlogPage from "./pages/Blog.jsx";
// Individual service detail pages
import WebApplicationsDetail from "./pages/services/WebApplicationsDetail.jsx";
import MobileAppsDetail from "./pages/services/MobileAppsDetail.jsx";
import BackendApisDetail from "./pages/services/BackendApisDetail.jsx";
import UiUxDesignDetail from "./pages/services/UiUxDesignDetail.jsx";
import DevopsCicdDetail from "./pages/services/DevopsCicdDetail.jsx";
import SecurityPerformanceDetail from "./pages/services/SecurityPerformanceDetail.jsx";
// Individual project detail pages
import EyitMediaDetail from "./pages/projects/EyitMediaDetail.jsx";
import KashfloDetail from "./pages/projects/KashfloDetail.jsx";
import PepasDetail from "./pages/projects/PepasDetail.jsx";
import EcommercePlatformDetail from "./pages/projects/EcommercePlatformDetail.jsx";
import AnalyticsDashboardDetail from "./pages/projects/AnalyticsDashboardDetail.jsx";
import MobileSuperAppDetail from "./pages/projects/MobileSuperAppDetail.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/web-applications" element={<WebApplicationsDetail />} />
        <Route path="/services/mobile-apps" element={<MobileAppsDetail />} />
        <Route path="/services/backend-apis" element={<BackendApisDetail />} />
        <Route path="/services/ui-ux-design" element={<UiUxDesignDetail />} />
        <Route path="/services/devops-cicd" element={<DevopsCicdDetail />} />
        <Route path="/services/security-performance" element={<SecurityPerformanceDetail />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/eyit-media" element={<EyitMediaDetail />} />
        <Route path="/projects/kashflo" element={<KashfloDetail />} />
        <Route path="/projects/pepas" element={<PepasDetail />} />
        <Route path="/projects/ecommerce-platform" element={<EcommercePlatformDetail />} />
        <Route path="/projects/analytics-dashboard" element={<AnalyticsDashboardDetail />} />
        <Route path="/projects/mobile-super-app" element={<MobileSuperAppDetail />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
