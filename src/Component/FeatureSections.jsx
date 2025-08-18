import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ChannelsSection = () => {
  const channels = [
    {
      imgUrl: "/src/assets/HeroIcons/facebook.svg",
      subheading: "Real-Time Analytics",
      heading: "Facebook",
      path: "/channel/facebook",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subheading: "Visual Engagement",
      heading: "Instagram",
      path: "/channel/instagram",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subheading: "Professional Insights",
      heading: "LinkedIn",
      path: "/channel/linkedin",
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
      <Link
        to={path}
        className="inline-block rounded bg-[rgb(33,49,48)] px-6 py-3 text-xl text-[rgb(255,255,250)] transition-colors hover:bg-blue-600 md:w-fit"
        aria-label={`Learn more about ${path.split("/").pop()} channel`}
      >
        Learn More <FiArrowUpRight className="inline" />
      </Link>
    </div>
  </div>
);

export default ChannelsSection;
