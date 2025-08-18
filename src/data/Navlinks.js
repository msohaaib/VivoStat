import facebook from "../assets/NavbarIcons/facebook.svg";
import instagram from "../assets/NavbarIcons/instagram.svg";
import linkedin from "../assets/NavbarIcons/linkedin.svg";
import pinterest from "../assets/NavbarIcons/pinterest.svg";
import tiktok from "../assets/NavbarIcons/tiktok.svg";
import twitter from "../assets/NavbarIcons/twitter.svg";
import youtube from "../assets/NavbarIcons/youtube.svg";
import threads from "../assets/NavbarIcons/threads.svg";
import Analysis from "../assets/NavbarIcons/Analysis.png";
import Report from "../assets/NavbarIcons/report.png";
import Scedular from "../assets/NavbarIcons/socialMediaSchedular.png";
import MultiChannelComparison from "../assets/NavbarIcons/multiChannelComparison.png";
import CustomizeDashboard from "../assets/NavbarIcons/CustomizeDashboard.png";
import AIPoweredSuggestion from "../assets/NavbarIcons/AIPoweredSuggestions.png";

const NavLink = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Features",
    path: "/features",
    dropdown: [
      {
        name: "Real-Time Analytics",
        icons: Analysis,
        description:
          "Display live metrics (likes, followers, engagement) for connected social media channels.",
      },
      {
        name: "Custom Report Generator",
        icons: Report,
        description:
          "Allow users to create and download PDF reports for selected channels and date ranges.",
      },
      {
        name: "Social Media Scheduler",
        icons: Scedular,
        description:
          "Schedule posts across channels with a calendar view and preview.",
      },
      {
        name: "Multi-Channel Comparison",
        icons: MultiChannelComparison,
        description:
          "Compare metrics (e.g., growth, engagement) across channels in a single chart.",
      },
      {
        name: "User Dashboard Customization",
        icons: CustomizeDashboard,
        description:
          "Let users customize their dashboard layout and save preferences for quick access.",
      },
      {
        name: "AI-Powered Content Boost",
        icons: AIPoweredSuggestion,
        description:
          "Suggests tailored content ideas and trending hashtags for each channel to enhance engagement.",
      },
    ],
  },
  {
    id: 3,
    name: "Channels",
    path: "/channels",
    dropdown: [
      {
        name: "Facebook",
        icons: facebook,
        description: "Connect with Facebook for social media insights.",
      },
      {
        name: "Instagram",
        icons: instagram,
        description: "Engage with your audience on Instagram.",
      },
      {
        name: "LinkedIn",
        icons: linkedin,
        description: "Professional networking and insights.",
      },
      {
        name: "TikTok",
        icons: tiktok,
        description: "Leverage TikTok for creative marketing.",
      },
      {
        name: "YouTube",
        icons: youtube,
        description: "Video marketing and analytics.",
      },
      {
        name: "Twitter",
        icons: twitter,
        description: "Stay updated with Twitter trends.",
      },
      {
        name: "Pinterest",
        icons: pinterest,
        description: "Visual discovery and inspiration.",
      },
      {
        name: "Threads",
        icons: threads,
        description: "Connect with your audience on Threads.",
      },
    ],
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Pricing",
    path: "/pricing",
  },
];

export default NavLink;
