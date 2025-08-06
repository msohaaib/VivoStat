import React, { useEffect, useRef } from "react";

// Importing SVG images
import facebook from "../assets/HeroIcons/facebook.svg";
import instagram from "../assets/HeroIcons/instagram.svg";
import linkedin from "../assets/HeroIcons/linkedin.svg";
import pinterest from "../assets/HeroIcons/pinterest.svg";
import tiktok from "../assets/HeroIcons/tiktok.svg";
import twitter from "../assets/HeroIcons/twitter.svg";
import youtube from "../assets/HeroIcons/youtube.svg";

const ParallaxEffect = () => {
  // Refs for each icon layer
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);
  const layer5Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const _w = window.innerWidth / 2;
      const _h = window.innerHeight / 2;
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;

      const x1 = (_mouseX - _w) * 0.01;
      const y1 = (_mouseY - _h) * 0.01;
      const x2 = (_mouseX - _w) * 0.02;
      const y2 = (_mouseY - _h) * 0.02;
      const x3 = (_mouseX - _w) * 0.06;
      const y3 = (_mouseY - _h) * 0.06;
      const x4 = (_mouseX - _w) * 0.1;
      const y4 = (_mouseY - _h) * 0.1;
      const x5 = (_mouseX - _w) * 0.15;
      const y5 = (_mouseY - _h) * 0.15;

      // Move icons based on mouse position
      layer1Ref.current.style.transform = `translate(${x1}px, ${y1}px)`;
      layer2Ref.current.style.transform = `translate(${x2}px, ${y2}px)`;
      layer3Ref.current.style.transform = `translate(${x3}px, ${y3}px)`;
      layer4Ref.current.style.transform = `translate(${x4}px, ${y4}px)`;
      layer5Ref.current.style.transform = `translate(${x5}px, ${y5}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden bg-gray-100">
      <div className="absolute top-1/3 text-center content-center left-1/2 text-gray-900 font-bold uppercase text-5xl transform -translate-x-1/2 -translate-y-[47%] z-10 pr-30">
        <p>Empower Your Social Media Success</p>
      </div>

      {/* Layer 1 - Closest with low blur */}
      <img
        ref={layer1Ref}
        src={facebook}
        alt="Facebook"
        className="w-16 h-16 absolute top-[30%] left-[20%] transition-transform duration-75"
      />

      {/* Layer 2 - Slightly further with more blur */}
      <img
        ref={layer2Ref}
        src={instagram}
        alt="Instagram"
        className="w-20 h-20 absolute top-[20%] left-[50%] transition-transform duration-75"
      />

      {/* Layer 3 - Slightly larger icons with some blur */}
      <img
        ref={layer3Ref}
        src={linkedin}
        alt="linkedin"
        className="w-20 h-20 absolute top-[50%] left-[60%] transition-transform duration-75 "
      />

      {/* Layer 4 - Even further back with blur */}
      <img
        ref={layer4Ref}
        src={tiktok}
        alt="TikTok"
        className="w-28 h-28 absolute top-[40%] left-[80%] transition-transform duration-75 filter blur-[1px]"
      />

      {/* Layer 5 - Farthest with heavy blur */}
      <img
        ref={layer5Ref}
        src={youtube}
        alt="YouTube"
        className="w-32 h-32 absolute top-[30%] left-[70%] transition-transform duration-75 filter blur-[4px]"
      />
      <img
        ref={layer5Ref}
        src={twitter}
        alt="Twitter"
        className="w-32 h-32 absolute top-[40%] left-[40%] transition-transform duration-75 filter blur-[4px]"
      />
      <img
        ref={layer5Ref}
        src={pinterest}
        alt="Pinterest"
        className="w-32 h-32 absolute top-[60%] left-[10%] transition-transform duration-75 filter blur-[4px]"
      />
    </div>
  );
};

export default ParallaxEffect;
