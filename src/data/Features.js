const tabs = [
  { id: "All", label: "All Features" },
  { id: "Core", label: "Core Features" },
  { id: "Top", label: "Top Features" },
];

const features = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    description:
      "Organize, schedule, and track your social media performance in one unified dashboard.",
    icon: "📊",
    category: "Core Features",
  },
  {
    id: 2,
    name: "Social Media Scheduling",
    link: "/scheduling",
    description:
      "Plan and schedule posts ahead of time to stay consistent across all platforms.",
    icon: "⏰",
    category: "Core Features",
  },
  {
    id: 3,
    name: "Analytics and Report",
    link: "/analytics",
    description:
      "Measure performance with detailed insights and generate easy-to-understand reports.",
    icon: "📈",
    category: "Core Features",
  },
  {
    id: 4,
    name: "Image Editor",
    link: "/image-editor",
    description:
      "Quickly resize, crop, and optimize visuals to fit every social media platform.",
    icon: "🖼️",
    category: "Top Features",
  },
  {
    id: 5,
    name: "AI Assistance",
    link: "/ai-assistance",
    description:
      "Get AI-powered captions, trending hashtags, and content ideas instantly.",
    icon: "🤖",
    category: "Top Features",
  },
];

export default features;
export { tabs };
