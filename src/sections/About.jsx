import React from 'react';
import profilePic from '../assets/projects/anirbaan.jpg';

const B = '1px solid #1a1a1a';

const About = () => {
  return (
    <section id="about" className="border-b border-black">
      {/* Header Row */}
      <div className="border-b border-black">
        <div className="section-container py-16 lg:py-24">
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight text-black">About</h2>
        </div>
      </div>

      {/* Content */}
      <div className="section-container section-py">
        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-12 md:gap-16 items-center">

          {/* Bio */}
          <div className="relative">
            <p className="text-[clamp(22px,2.5vw,32px)] font-normal leading-[1.35] tracking-tight text-neutral-600 text-justify">
              I’m Anirbaan Sarkar — a full-stack developer and product designer focused on building AI-driven web applications.
              <br /><br />
              I enjoy creating clean, functional interfaces and turning ideas into usable products through code and design.
            </p>
          </div>

          {/* Portrait */}
          <div className="w-full aspect-[4/5] overflow-hidden bg-[#e5e4e0]">
            <img
              src={profilePic}
              alt="Anirbaan Sarkar - Full-Stack Product Designer"
              loading="lazy"
              decoding="async"
              width="500"
              height="600"
              className="w-full h-full object-cover opacity-100"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
