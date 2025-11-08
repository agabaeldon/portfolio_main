import React from "react";
import BlogPreview from "../components/blog/BlogPreview.jsx";

const BlogPage = () => {
  return (
    <div className="dark:text-white">
      <section className="relative h-48 md:h-64 w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop)"
          }}
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
              Blog & Insights
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Tech insights, tutorials, and development tips
            </p>
          </div>
        </div>
      </section>
      <BlogPreview />
    </div>
  );
};

export default BlogPage;

