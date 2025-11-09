import React from "react";
import { Link } from "react-router-dom";
import { FaCalendar, FaClock, FaArrowRight, FaLightbulb, FaRocket, FaChartLine } from "react-icons/fa";

const BlogPreview = () => {
  const posts = [
    {
      title: "Building AI-Powered Marketing Platforms: EYIT Media App Journey",
      excerpt: "How we built a comprehensive marketing platform that connects businesses with social media influencers, enabling targeted campaigns and real-time analytics for maximum engagement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      category: "Case Study",
      icon: <FaRocket />,
    },
    {
      title: "Financial Technology for SMEs: KashFlo App Development",
      excerpt: "Exploring the challenges and solutions in creating a comprehensive financial management system that helps small businesses track inventory, manage debts, and access credit facilities.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop",
      date: "Jan 10, 2024",
      readTime: "10 min read",
      category: "FinTech",
      icon: <FaChartLine />,
    },
    {
      title: "Transforming Education with AI: PEPAS Platform",
      excerpt: "Leveraging artificial intelligence to improve student outcomes in primary education through personalized learning resources, teacher support, and real-time performance tracking.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
      date: "Jan 5, 2024",
      readTime: "7 min read",
      category: "EdTech",
      icon: <FaLightbulb />,
    },
    {
      title: "Full Stack Development: React & Node.js Best Practices",
      excerpt: "Essential patterns and techniques for building scalable web applications using modern JavaScript frameworks, including state management, API design, and performance optimization.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      date: "Dec 28, 2023",
      readTime: "6 min read",
      category: "Development",
      icon: <FaRocket />,
    },
    {
      title: "Cross-Platform Mobile Development with React Native",
      excerpt: "Building native mobile experiences for iOS and Android from a single codebase. Learn about navigation, state management, and native module integration.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      date: "Dec 20, 2023",
      readTime: "9 min read",
      category: "Mobile",
      icon: <FaRocket />,
    },
    {
      title: "Database Design for Scalable Applications",
      excerpt: "Choosing between SQL and NoSQL databases, optimizing queries, implementing caching strategies, and designing schemas that support business growth and high traffic.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "Backend",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
            Latest Insights & Articles
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Sharing knowledge on software development, project experiences, and technology trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-full flex items-center gap-1.5 shadow-lg">
                    <span className="text-sm">{post.icon}</span>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <FaCalendar className="text-primary" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaClock className="text-primary" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-800 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group-hover:translate-x-1"
                >
                  Read full article <FaArrowRight className="group-hover:animate-pulse" />
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

