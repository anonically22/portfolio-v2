import React from 'react';
import profilePic from '../assets/projects/anirbaan.jpg';

const B = '1px solid #1a1a1a';

const About = () => {
  return (
    <section id="about" style={{ borderBottom: B }}>
      {/* Header Row */}
      <div style={{ borderBottom: B }}>
        <div className="section-container" style={{ paddingTop: '3rem', paddingBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Poiret One, system-ui, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 'bold', letterSpacing: '-0.02em', lineHeight: 1 }}>About</h2>
        </div>
      </div>

      {/* Content */}
      <div className="section-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-12 md:gap-16 items-center">

          {/* Bio */}
          <div style={{ position: 'relative' }}>
            <p style={{ fontSize: 'clamp(22px, 2.5vw, 40px)', fontWeight: 300, lineHeight: 1.35, letterSpacing: '-0.02em', color: '#333', textAlign: 'justify', hyphens: 'auto' }}>
              Hi, I'm Anirbaan Sarkar, a Computer Science student at Techno India University. I'm deeply passionate about the intersection of high-performance logic and seamless human-centric design. While my foundation is in robust backend systems and full-stack architecture, my true edge lies in obsessive UI/UX execution and bringing digital experiences to life. Beyond shipping production-ready interfaces, I actively research cybersecurity, diving into vulnerability assessment to ensure the web remains as secure as it is beautiful.
            </p>
            {/* Black dot indicator */}
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1a1a1a',
                position: 'absolute',
                right: '-2.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'none',
              }}
              className="md:block"
            />
          </div>

          {/* Portrait */}
          <div style={{ height: '500px', overflow: 'hidden', backgroundColor: '#e5e4e0' }}>
            <img
              src={profilePic}
              alt="Portrait"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
