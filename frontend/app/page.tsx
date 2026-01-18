'use client';
import { useEffect, useRef, useState } from 'react';
import Carousel from '../components/Carousel';
import "./homepage.css";

type BannerOffsets = { imgY: number; textY: number };

export default function Page() {
  // HERO REVEAL 
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onEnded = () => {
      setReveal(true);
      try { v.pause(); } catch {}
    };

    // Fallback: reveal anyway
    const fallback = window.setTimeout(() => setReveal(true), 9000);

    v.addEventListener('ended', onEnded);
    return () => {
      v.removeEventListener('ended', onEnded);
      clearTimeout(fallback);
    };
  }, []);

  // BANNER PARALLAX 
  const bannerRef = useRef<HTMLElement | null>(null);
  const [bannerOffsets, setBannerOffsets] = useState<BannerOffsets>({ imgY: 0, textY: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let raf: number | null = null;

    const onScroll = () => {
      if (raf !== null) return;
      raf = window.requestAnimationFrame(() => {
        const y = window.scrollY;
        document.documentElement.style.setProperty('--px', `${y * 0.25}px`);

        const section = bannerRef.current;
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTopInDoc = y + rect.top;
          const local = Math.max(0, y - sectionTopInDoc);
          const imgY = local * 0.20;
          const textY = local * -0.10;
          setBannerOffsets({ imgY, textY });
        }
        raf = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
   <>
      {/* HERO */}
      <section className={`hero ${reveal ? 'hero--reveal' : ''}`} aria-label="Hero">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          preload="metadata"
          // no loop: we only want one playthrough
          poster="/hero-poster.jpg"
        >
          <source src="/asia_photos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dimmer that fades in after video ends */}
        <div className="hero-dimmer" />

        {/* Content that fades/slides in after video ends */}
        <div className="hero-content">
          <h1 className="hero-title">
            Ivy Tang
          </h1>
          <p className="hero-sub">
            Hi! I&apos;m Ivy, an aspiring Cybersecurity Analyst at Northeastern University
          </p>
          <p className="hero-note">
            *All photos were taken during my travels in Asia
          </p>
        </div>
      </section>

      <Carousel />

      {/* SECTION 2 — Centered “Why us” */}
      <section className="section why" aria-labelledby="why-heading">
        <div className="why-wrap">
        <h2 className="why-hero">
          Defense in soccer for 8 years, predicting my teachers&apos; questions on tests for 9, and arguing with my sister for 18, I guess you could say that I have been analyzing, anticipating, and responding to different attacks for a while.
        </h2>
        <h2 className="why-hero">
          The result was my decision to concentrate my interest in computer science on threat detection, systems security, and risk assessment.
        </h2>
          <figure className="why-figure">
            <img src="/ivy.png" alt="Smiling girl with black hair." />
          </figure>

          <div className="why-cols why-cols--aud">
          <div className="why-card">
            <h3 className="why-col-title">Relevant Coursework</h3>
            <p>
              <strong>Completed:</strong> Introduction to Cybersecurity (A), Computer Systems (A-), Object Oriented Design (A)
            </p>
            <p>
              <strong>Ongoing:</strong> Systems Security, Network Fundamentals, Introduction to Law
            </p>
          </div>

          <div className="why-card">
            <h3 className="why-col-title">Languages & Tools</h3>
            <p className="why-col-body">
              Java, C, Racket, Python, React, Linux, JavaScript, Git, HTML/CSS, VSCode, IntelliJ, Eclipse, SQL
            </p>
          </div>

          <div className="why-card">
            <h3 className="why-col-title">Academics</h3>
            <p className="why-col-body">
              <strong> Northeastern University: </strong> 3.66/4.0 GPA, Deans List
            </p>
            <p className="why-col-body">
              Cybersecurity Major, Madrid Study Abroad Experience
            </p>
            <p className="why-col-body">
              <strong> Lexington High School: </strong> 3.93/4.0 GPA, Honor Roll
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="full-bleed image-banner" aria-label="Banner image" ref={bannerRef}>
        <img
          src="/cafe.png"
          alt="Beautiful snow and sparkle themed cafe in Tokyo, Japan"
          className="banner-image"
          style={{ transform: `translateY(${bannerOffsets.imgY}px)` }}
        />
        <div
          className="banner-overlay"
          style={{ transform: `translateY(${bannerOffsets.textY}px)` }}
        >
          <h2 className="banner-text">Besides academics...</h2>
          <p className="banner-caption"> - I run a 5 star pet-sitting business and have taken care of 60+ pets from geckos to bunnies </p>
          <p className="banner-caption"> - I enjoy new experiences and competitive challenges, including winning a local spicy food competition </p>
          <p className="banner-caption"> - I maintain a Pinterest Business Account documenting my food and cultural experiences </p>
        </div>
      </section>
    </>
  );
}
