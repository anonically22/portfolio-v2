import React from 'react';
import profilePic from '../assets/projects/anirbaan.jpg';

const B = '1px solid #1a1a1a';

const About = () => {
  return (
    <section id="about" className="border-b border-[#1a1a1a]">
      {/* Header Row */}
      <div className="border-b border-[#1a1a1a]">
        <div className="section-container py-16 lg:py-24">
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight">About</h2>
        </div>
      </div>

      {/* Content */}
      <div className="section-container section-py">
        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-12 md:gap-16 items-center">

          {/* Bio */}
          <div className="relative">
            <p className="text-[clamp(22px,2.5vw,32px)] font-normal leading-[1.35] tracking-tight text-[#333]">
              I'm Anirbaan Sarkar, a Full-Stack Product Designer and Developer building AI-powered products at the intersection of design and engineering. My edge lies in obsessive UI/UX execution and bringing intelligent digital experiences to life. Beyond shipping production-ready systems, I actively research cybersecurity and system architectures to ensure every product is as secure as it is beautiful.
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
