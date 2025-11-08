import React from "react";
import { Link } from "react-router-dom";
import { FaCalendar, FaClock, FaArrowRight } from "react-icons/fa";

const BlogPreview = () => {
  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for creating maintainable and performant React applications that scale with your business needs.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      category: "React",
    },
    {
      title: "Modern Backend Architecture Patterns",
      excerpt: "Exploring microservices, serverless, and API design patterns for building robust backend systems.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      date: "Dec 10, 2023",
      readTime: "7 min read",
      category: "Backend",
    },
    {
      title: "Mobile App Development Best Practices",
      excerpt: "Essential tips and strategies for developing cross-platform mobile applications that users love.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      date: "Dec 5, 2023",
      readTime: "6 min read",
      category: "Mobile",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
            Latest Insights
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Tech insights, tutorials, and development tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendar /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read more <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

