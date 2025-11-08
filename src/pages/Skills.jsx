import React from "react";
import Skills from "../components/skills/Skills.jsx";
import { 
  SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPython,
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiSass,
  SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiDocker, SiKubernetes, SiAmazonaws, SiGit,
  SiGraphql, SiExpress, SiNextdotjs, SiVuedotjs,
  SiFigma, SiAdobexd, SiGitlab, SiGithub, SiRedux, SiJest,
  SiFirebase, SiVercel, SiNetlify, SiNpm, SiYarn, SiWebpack,
  SiFlutter, SiPrisma,
  SiNginx, SiJenkins, SiTerraform
} from "react-icons/si";
import { 
  FaDatabase, FaServer, FaCode, FaTools, FaMobileAlt, 
  FaCloud, FaShieldAlt, FaRocket, FaChartLine, FaCog,
  FaPalette, FaLaptopCode, FaNetworkWired, FaLock, FaRoute,
  FaKey, FaUserShield, FaCodeBranch
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const skillsCategories = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-3xl" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    description: "Building modern, responsive, and interactive user interfaces with cutting-edge technologies",
    skills: [
      { name: "React", icon: <SiReact />, level: 90, description: "Building complex UIs with hooks, context, Redux, and state management. Experience with React Router, React Query, and custom hooks.", years: "5+ years", projects: "20+ projects" },
      { name: "TypeScript", icon: <SiTypescript />, level: 85, description: "Type-safe development for scalable applications. Advanced types, generics, and type inference patterns.", years: "4+ years", projects: "15+ projects" },
      { name: "JavaScript", icon: <SiJavascript />, level: 90, description: "ES6+, async/await, promises, modern JavaScript patterns, functional programming, and design patterns.", years: "6+ years", projects: "30+ projects" },
      { name: "HTML5", icon: <SiHtml5 />, level: 95, description: "Semantic markup, accessibility standards (WCAG 2.1), SEO optimization, and progressive enhancement.", years: "6+ years", projects: "All projects" },
      { name: "CSS3", icon: <SiCss3 />, level: 90, description: "Advanced styling, animations, transitions, flexbox, grid, CSS variables, and responsive design techniques.", years: "6+ years", projects: "All projects" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 88, description: "Utility-first CSS framework for rapid development. Custom configurations and plugin development.", years: "3+ years", projects: "18+ projects" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 80, description: "Server-side rendering, static site generation, API routes, image optimization, and deployment strategies.", years: "2+ years", projects: "8+ projects" },
      { name: "Vue.js", icon: <SiVuedotjs />, level: 75, description: "Progressive framework for building user interfaces. Vuex, Vue Router, and composition API.", years: "2+ years", projects: "5+ projects" },
      { name: "Redux", icon: <SiRedux />, level: 85, description: "State management with Redux Toolkit, middleware, async actions, and complex state architectures.", years: "4+ years", projects: "12+ projects" },
      { name: "React Router", icon: <FaRoute />, level: 85, description: "Client-side routing, nested routes, route guards, and navigation patterns.", years: "4+ years", projects: "15+ projects" },
    ]
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-3xl" />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    description: "Building scalable, secure, and performant server-side applications and APIs",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 85, description: "Server-side JavaScript runtime, event-driven architecture, streams, buffers, and performance optimization.", years: "4+ years", projects: "18+ projects" },
      { name: "Express.js", icon: <SiExpress />, level: 85, description: "RESTful APIs, middleware architecture, routing, error handling, and security best practices.", years: "4+ years", projects: "16+ projects" },
      { name: "GraphQL", icon: <SiGraphql />, level: 75, description: "Query language, schema design, resolvers, subscriptions, and Apollo Server/Client integration.", years: "2+ years", projects: "6+ projects" },
      { name: "Python", icon: <SiPython />, level: 70, description: "Backend scripting, automation, data processing, and API development with Flask/Django.", years: "2+ years", projects: "4+ projects" },
      { name: "Java", icon: <FaCode />, level: 65, description: "Enterprise application development, Spring Framework, and object-oriented programming.", years: "1+ years", projects: "2+ projects" },
      { name: "JWT", icon: <FaKey />, level: 80, description: "Authentication and authorization, token management, refresh tokens, and secure API access.", years: "3+ years", projects: "12+ projects" },
      { name: "Passport.js", icon: <FaUserShield />, level: 75, description: "Authentication middleware, OAuth strategies, and social login integration.", years: "2+ years", projects: "8+ projects" },
    ]
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt className="text-3xl" />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    description: "Cross-platform mobile app development for iOS and Android",
    skills: [
      { name: "React Native", icon: <TbBrandReactNative />, level: 80, description: "Cross-platform mobile development, native modules, navigation, and performance optimization.", years: "3+ years", projects: "6+ projects" },
      { name: "Flutter", icon: <SiFlutter />, level: 65, description: "Dart-based mobile framework, widget system, and state management.", years: "1+ years", projects: "2+ projects" },
      { name: "Firebase", icon: <SiFirebase />, level: 75, description: "Backend-as-a-Service, authentication, real-time database, cloud functions, and push notifications.", years: "2+ years", projects: "5+ projects" },
    ]
  },
  {
    title: "Databases & ORMs",
    icon: <FaDatabase className="text-3xl" />,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop",
    description: "Database design, optimization, and data modeling for scalable applications",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 80, description: "NoSQL database design, aggregation pipelines, indexing, sharding, and performance optimization.", years: "4+ years", projects: "14+ projects" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 75, description: "Relational database management, complex queries, transactions, and stored procedures.", years: "3+ years", projects: "10+ projects" },
      { name: "MySQL", icon: <SiMysql />, level: 75, description: "SQL database design, query optimization, indexing strategies, and administration.", years: "3+ years", projects: "8+ projects" },
      { name: "Redis", icon: <SiRedis />, level: 70, description: "Caching, session management, pub/sub, and real-time data structures.", years: "2+ years", projects: "6+ projects" },
      { name: "Mongoose", icon: <FaDatabase />, level: 80, description: "MongoDB object modeling, schemas, validation, and middleware.", years: "4+ years", projects: "12+ projects" },
      { name: "Prisma", icon: <SiPrisma />, level: 75, description: "Next-generation ORM, type-safe database access, and migrations.", years: "2+ years", projects: "5+ projects" },
      { name: "Sequelize", icon: <FaCodeBranch />, level: 70, description: "SQL ORM, migrations, associations, and query optimization.", years: "2+ years", projects: "4+ projects" },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud className="text-3xl" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    description: "Infrastructure automation, CI/CD, and cloud deployment strategies",
    skills: [
      { name: "Docker", icon: <SiDocker />, level: 80, description: "Containerization, Docker Compose, multi-stage builds, and image optimization.", years: "3+ years", projects: "15+ projects" },
      { name: "Kubernetes", icon: <SiKubernetes />, level: 70, description: "Container orchestration, deployments, services, and scaling strategies.", years: "2+ years", projects: "5+ projects" },
      { name: "AWS", icon: <SiAmazonaws />, level: 75, description: "EC2, S3, Lambda, RDS, CloudFront, IAM, and infrastructure management.", years: "3+ years", projects: "10+ projects" },
      { name: "Azure", icon: <FaCloud />, level: 70, description: "App Services, Functions, Cosmos DB, and cloud resource management.", years: "2+ years", projects: "4+ projects" },
      { name: "Terraform", icon: <SiTerraform />, level: 65, description: "Infrastructure as Code, resource provisioning, and state management.", years: "1+ years", projects: "3+ projects" },
      { name: "Jenkins", icon: <SiJenkins />, level: 70, description: "CI/CD pipelines, automated testing, and deployment automation.", years: "2+ years", projects: "6+ projects" },
      { name: "Nginx", icon: <SiNginx />, level: 75, description: "Reverse proxy, load balancing, SSL/TLS, and performance optimization.", years: "3+ years", projects: "8+ projects" },
    ]
  },
  {
    title: "Version Control & Tools",
    icon: <FaTools className="text-3xl" />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    description: "Development tools, version control, and workflow optimization",
    skills: [
      { name: "Git", icon: <SiGit />, level: 90, description: "Version control, branching strategies, merge conflicts, and collaborative workflows.", years: "6+ years", projects: "All projects" },
      { name: "GitHub", icon: <SiGithub />, level: 90, description: "Code hosting, pull requests, issues, Actions CI/CD, and project management.", years: "6+ years", projects: "All projects" },
      { name: "GitLab", icon: <SiGitlab />, level: 80, description: "DevOps platform, CI/CD pipelines, container registry, and repository management.", years: "3+ years", projects: "8+ projects" },
      { name: "NPM", icon: <SiNpm />, level: 85, description: "Package management, publishing, versioning, and dependency management.", years: "5+ years", projects: "All projects" },
      { name: "Yarn", icon: <SiYarn />, level: 80, description: "Fast, reliable package management and workspace management.", years: "3+ years", projects: "10+ projects" },
      { name: "Webpack", icon: <SiWebpack />, level: 75, description: "Module bundling, code splitting, and build optimization.", years: "3+ years", projects: "8+ projects" },
    ]
  },
  {
    title: "Testing & Quality",
    icon: <FaShieldAlt className="text-3xl" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description: "Ensuring code quality, reliability, and maintainability",
    skills: [
      { name: "Jest", icon: <SiJest />, level: 80, description: "Unit testing, integration testing, mocking, and test coverage.", years: "3+ years", projects: "12+ projects" },
      { name: "Testing", icon: <FaShieldAlt />, level: 75, description: "TDD, BDD, E2E testing, and quality assurance practices.", years: "3+ years", projects: "10+ projects" },
    ]
  },
  {
    title: "Design & UI/UX",
    icon: <FaPalette className="text-3xl" />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    description: "Creating beautiful, intuitive, and accessible user interfaces",
    skills: [
      { name: "Figma", icon: <SiFigma />, level: 85, description: "UI/UX design, prototyping, design systems, and collaboration tools.", years: "4+ years", projects: "15+ projects" },
      { name: "Adobe XD", icon: <SiAdobexd />, level: 75, description: "User experience design, wireframing, and interactive prototypes.", years: "2+ years", projects: "8+ projects" },
      { name: "Bootstrap", icon: <SiBootstrap />, level: 80, description: "Responsive CSS framework, components, and grid system.", years: "4+ years", projects: "12+ projects" },
      { name: "SASS", icon: <SiSass />, level: 75, description: "CSS preprocessor, variables, mixins, and modular styling.", years: "3+ years", projects: "10+ projects" },
    ]
  },
  {
    title: "Deployment & Hosting",
    icon: <FaRocket className="text-3xl" />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    description: "Deploying applications to production with reliability and performance",
    skills: [
      { name: "Vercel", icon: <SiVercel />, level: 85, description: "Next.js deployment, edge functions, and serverless functions.", years: "2+ years", projects: "8+ projects" },
      { name: "Netlify", icon: <SiNetlify />, level: 80, description: "Static site hosting, form handling, and edge functions.", years: "2+ years", projects: "6+ projects" },
      { name: "AWS Deployment", icon: <SiAmazonaws />, level: 75, description: "EC2, Elastic Beanstalk, and cloud infrastructure deployment.", years: "3+ years", projects: "10+ projects" },
    ]
  },
];

const SkillsPage = () => {
  return (
    <div className="dark:text-white">
      {/* Hero Section */}
      <section className="relative h-48 md:h-64 w-full overflow-hidden bg-gradient-to-r from-primary/20 to-primary/5">
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">My Skills</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              A comprehensive overview of my technical expertise and proficiency across various technologies and tools
            </p>
          </div>
        </div>
      </section>

      {/* Skills Component */}
      <Skills />

      {/* Detailed Skills Categories */}
      <section className="container py-12">
        <div className="space-y-16">
          {skillsCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              {/* Category Header with Image */}
              <div className="relative rounded-xl overflow-hidden mb-8">
                <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container">
                    <div className="flex items-center gap-4 text-white">
                      <div className="text-4xl">{category.icon}</div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">{category.title}</h2>
                        <p className="text-white/90 max-w-2xl">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl text-primary p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                          <span className="font-semibold text-primary">{skill.level}%</span>
                          {skill.years && <span>• {skill.years}</span>}
                          {skill.projects && <span>• {skill.projects}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-gray-700 h-2.5 rounded-full mb-4">
                      <div
                        className="h-2.5 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Skills Summary */}
      <section className="bg-gradient-to-br from-secondary via-secondary/90 to-primary/5 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Competencies</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Beyond technical skills, I bring expertise in methodologies, best practices, and soft skills that enhance project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {[
              { name: "REST APIs", icon: <FaNetworkWired /> },
              { name: "Microservices", icon: <FaServer /> },
              { name: "Agile/Scrum", icon: <FaChartLine /> },
              { name: "TDD", icon: <FaShieldAlt /> },
              { name: "Performance", icon: <FaRocket /> },
              { name: "Security", icon: <FaLock /> },
              { name: "Code Review", icon: <FaLaptopCode /> },
              { name: "Technical Writing", icon: <FaCode /> },
              { name: "Mentoring", icon: <FaTools /> },
              { name: "Project Management", icon: <FaCog /> },
              { name: "System Design", icon: <FaDatabase /> },
              { name: "API Design", icon: <FaNetworkWired /> },
            ].map((skill, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl text-primary mb-2 flex justify-center">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>

          {/* Skills Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-slate-600 dark:text-slate-300">Technologies</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-slate-600 dark:text-slate-300">Projects Delivered</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-slate-600 dark:text-slate-300">Years Experience</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-slate-600 dark:text-slate-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;


