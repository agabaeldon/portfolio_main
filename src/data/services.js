import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";
import { BiServer } from "react-icons/bi";
import { SiGithubactions } from "react-icons/si";

export const services = [
  {
    slug: "web-applications",
    name: "Web Applications",
    summary: "High‑performance web apps with modern tooling.",
    description: "React + TypeScript frontends with strong state management, routing, caching, and accessibility.",
    image: "https://picsum.photos/seed/web/1200/700",
    icon: HiMiniComputerDesktop,
    bullets: ["Design systems", "SSR/Code‑splitting", "A11y"],
  },
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    summary: "Cross‑platform React Native apps.",
    description: "Fast, stable mobile experiences with offline support and push notifications.",
    image: "https://picsum.photos/seed/mobile/1200/700",
    icon: MdOutlinePhoneAndroid,
    bullets: ["iOS & Android", "App Store readiness", "Analytics"],
  },
  {
    slug: "backend-apis",
    name: "Backend & APIs",
    summary: "Secure REST/GraphQL APIs.",
    description: "Scalable services, data modeling, auth, and integrations with robust observability.",
    image: "https://picsum.photos/seed/backend/1200/700",
    icon: BiServer,
    bullets: ["Auth & RBAC", "Caching", "Migrations"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    summary: "User‑centered design & systems.",
    description: "Wireframes to component libraries that ship quickly and scale.",
    image: "https://picsum.photos/seed/ux/1200/700",
    icon: AiFillLayout,
    bullets: ["Wireframes", "Design tokens", "Prototyping"],
  },
  {
    slug: "devops-cicd",
    name: "DevOps & CI/CD",
    summary: "Automation and reliable releases.",
    description: "Dockerized apps, pipelines, and cloud infra with monitoring and rollback strategies.",
    image: "https://picsum.photos/seed/devops/1200/700",
    icon: SiGithubactions,
    bullets: ["Pipelines", "Docker", "Cloud"],
  },
  {
    slug: "security-performance",
    name: "Security & Performance",
    summary: "Audits and hardening.",
    description: "Threat modeling, performance budgets, and best practices for safety and speed.",
    image: "https://picsum.photos/seed/security/1200/700",
    icon: MdSecurity,
    bullets: ["OWASP", "Perf profiling", "Monitoring"],
  },
];


