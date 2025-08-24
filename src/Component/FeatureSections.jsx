import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import PrimaryButton from "./PrimaryButton";
import facebook from "../assets/featureSection/facebook.jpg";
import Instagram from "../assets/featureSection/Instagram.jpg";
import linkedin from "../assets/featureSection/linkedin.jpg";
import tiktok from "../assets/featureSection/Tiktok.jpg";
import twitter from "../assets/featureSection/twitter.jpg";
import youtube from "../assets/featureSection/Youtube.jpg";
import threads from "../assets/featureSection/threads.jpg";
import pinterest from "../assets/featureSection/pinterest.jpg";

motion;

const ChannelsSection = () => {
  const channels = [
    {
      imgUrl: facebook,
      subheading: "Real-Time Audience Insights",
      heading: "Facebook",
      path: "/channel/facebook",
    },
    {
      imgUrl: Instagram,
      subheading: "Visual Performance Tracking",
      heading: "Instagram",
      path: "/channel/instagram",
    },
    {
      imgUrl: linkedin,
      subheading: "Professional Network Analytics",
      heading: "LinkedIn",
      path: "/channel/linkedin",
    },
    {
      imgUrl: tiktok,
      subheading: "Trend-Driven Engagement",
      heading: "TikTok",
      path: "/channel/tiktok",
    },
    {
      imgUrl: twitter,
      subheading: "Instant Trend Monitoring",
      heading: "Twitter",
      path: "/channel/twitter",
    },
    {
      imgUrl: youtube,
      subheading: "Video Performance Metrics",
      heading: "YouTube",
      path: "/channel/youtube",
    },
    {
      imgUrl: threads,
      subheading: "Conversation Analytics",
      heading: "Threads",
      path: "/channel/threads",
    },
    {
      imgUrl: pinterest,
      subheading: "Visual Inspiration Insights",
      heading: "Pinterest",
      path: "/channel/pinterest",
    },
  ];

  return (
    <div className="bg-[rgb(255,255,250)]">
      {channels.map((channel, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={channel.imgUrl}
          subheading={channel.subheading}
          heading={channel.heading}
        >
          <ChannelContent path={channel.path} />
        </TextParallaxContent>
      ))}
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy subheading={subheading} heading={heading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-[rgb(33,49,48)]/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-[rgb(255,255,250)]"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ChannelContent = ({ path }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold text-[rgb(33,49,48)] md:col-span-4">
      About This Channel
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-[rgb(33,49,48)] md:text-2xl">
        Explore detailed analytics and management tools for this platform. Track
        performance, schedule posts, and gain actionable insights to boost your
        social media presence.
      </p>
      <PrimaryButton
        to={path}
        aria-label={`Learn more about ${path.split("/").pop()} channel`}
      >
        Learn More <FiArrowUpRight className="inline" />
      </PrimaryButton>
    </div>
  </div>
);

export default ChannelsSection;
