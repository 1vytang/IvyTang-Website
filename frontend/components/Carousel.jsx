'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

export default function Carousel() {
  const firstSlide = {
    title: 'Extracurriculars',
    headline: 'What does it mean to be\n a Leader at Northeastern?',
    body:
      'Learn about my involvement on campus as the Secretary of Women in Cybersecurity and a Senior developer on Scout.',
    cta: 'Learn More',
    img: '/wicys.png',
    href: '/extracurriculars',
  };
  const secondSlide = {
    title: 'Research',
    headline: 'Real impact backed by \nreal research.',
    body:
      'Learn about my research on airtags under Professor Guevara Noubir and Doctor Abhi Mishra.',
    cta: 'Learn More',
    img: '/airtag.png', 
    href: '/research',
  };
  const thirdSlide = {
    title: 'Projects',
    headline: 'Functional projects with unlimited possibilities',
    body:
      'Learn about my projects with potential for real-world use.',
    cta: 'Learn More', 
    img: '/StartGame.png', 
    href: '/projects',
  };
  const slides = [firstSlide, secondSlide, thirdSlide];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const AUTOPLAY_MS = 6000;

  const goTo = (i) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  };

  return (
    <section
      className="carousel full-bleed"
      aria-label="Featured slides"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
    <div className="carousel-topfade" />
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s, i) => (
          <article
          className="slide"
          key={i}
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${slides.length}`}
        >
          <Link href={s.href} className="slide-link">
            <div className="slide-inner">
              <div className="slide-copy">
                <h1 className="slide-title">{s.title}</h1>
        
                <h3 className="slide-headline">
                  {s.headline.split('\n').map((line, li) => (
                    <span key={li}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>
        
                <p className="slide-body">{s.body}</p>
        
                {/* CTA is now just visual, not a link */}
                <span className="button-59 banner-cta">
                  {s.cta}
                </span>
              </div>
        
              <figure className="slide-asset">
                <img src={s.img} alt={s.title} />
              </figure>
            </div>
          </Link>
        </article>
        
        ))}
      </div>

      <button className="nav prev" aria-label="Previous slide" onClick={prev} onFocus={pause} onBlur={resume}>‹</button>
      <button className="nav next" aria-label="Next slide" onClick={next} onFocus={pause} onBlur={resume}>›</button>

      <div className="dots" role="tablist" aria-label="Slide selectors">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            className={`dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            onFocus={pause}
            onBlur={resume}
          />
        ))}
      </div>
    </section>
  );
}
