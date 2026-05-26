'use client';

import { useEffect, useRef, useState } from 'react';
import Carousel from '../components/Carousel';
import './homepage.css';

type BannerOffsets = {
  imgY: number;
  textY: number;
};

export default function Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const bannerRef = useRef<HTMLElement | null>(null);

  const [reveal, setReveal] = useState(false);
  const [bannerOffsets, setBannerOffsets] = useState<BannerOffsets>({
    imgY: 0,
    textY: 0,
  });

  useEffect(() => {
    const revealTimer = window.setTimeout(() => {
      setReveal(true);
    }, 1500);

    return () => {
      clearTimeout(revealTimer);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    let animationFrame: number | null = null;

    const handleScroll = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const section = bannerRef.current;

        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = scrollY + rect.top;
          const localScroll = Math.max(0, scrollY - sectionTop);

          setBannerOffsets({
            imgY: localScroll * 0.2,
            textY: localScroll * -0.1,
          });
        }

        animationFrame = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      <section className={`hero ${reveal ? 'hero--reveal' : ''}`} aria-label="Hero">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          poster="/hero-poster.jpg"
        >
          <source src="/asia_photos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-dimmer" />

        <div className="hero-content">
          <h1 className="hero-title">Ivy Tang</h1>

          <p className="hero-sub">
            Hi! I&apos;m Ivy, an aspiring Cybersecurity Analyst at Northeastern University
          </p>

          <p className="hero-note">*All photos are my own ◡̈</p>
        </div>
      </section>

      <Carousel />

      <section className="section why" aria-labelledby="why-heading">
        <div className="why-wrap">
          <h2 id="why-heading" className="why-hero">
            I'm interested in quality assurance, security vulnerabilities, and systems.
          </h2>

          <figure className="why-figure">
            <img src="/ivy.png" alt="Ivy smiling." />
          </figure>

          <div className="why-cols why-cols--aud">
            <article className="why-card">
              <h3 className="why-col-title">Relevant Coursework</h3>

              <p>
                Introduction to Cybersecurity,
                Computer Systems, Object Oriented Design, Systems Security, Network Fundamentals
              </p>
            </article>

            <article className="why-card">
              <h3 className="why-col-title">Languages & Tools</h3>

              <p className="why-col-body">
                Java, C/C++, Python, React, Linux, JavaScript, Git, HTML/CSS,
                VS Code, SQL, Google Suite, Microsoft Office
              </p>
            </article>

            <article className="why-card">
              <h3 className="why-col-title">Academics</h3>

              <p className="why-col-body">
                Northeastern University: Dean&apos;s List, Madrid study abroad, VICEROY Scholar
              </p>

              <p className="why-col-body">
                Lexington High School: Honor Roll
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="full-bleed image-banner"
        aria-label="Personal interests banner"
        ref={bannerRef}
      >
        <img
          src="/cafe.png"
          alt="Snow and sparkle themed cafe in Tokyo, Japan."
          className="banner-image"
          style={{ transform: `translateY(${bannerOffsets.imgY}px)` }}
        />

        <div
          className="banner-overlay"
          style={{ transform: `translateY(${bannerOffsets.textY}px)` }}
        >
          <h2 className="banner-text">You also can find me...</h2>

          <p className="banner-caption">
          ★ Running a 5-star pet-sitting business with 60+ previous customers.
          </p>

          <p className="banner-caption">
          ★ Competing in silly challenges, including
            winning a local spicy eating competition.
          </p>

          <p className="banner-caption">
          ★ Maintaining a Pinterest Account documenting my food and
            cultural experiences.
          </p>
        </div>
      </section>
    </>
  );
}