"use client";

import Image from "next/image";
import React, { useEffect, useRef } from 'react';
import { StaticImageData } from "next/image";

const images = [
    '/pb_gbh.png',
    '/pb_group.png',
    '/steam_team.png'
];

/**
 * Image carousel
 * @constructor
 */
const ImageCarousel = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let pos = 0;

        const scroll = () => {
            if (!container) return;

            pos += 1;
            if (pos >= container.scrollWidth / 2) {
                pos = 0;
            }

            container.style.transform = `translateX(-${pos}px)`;
            requestAnimationFrame(scroll);
        };

        const animationId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="overflow-hidden w-full">
            <div
                ref={scrollRef}
                className="flex gap-12 items-center"
                style={{width: "max-content"}}
            >
                {[...images, ...images, ...images].map((logo, i) => (
                    <Image
                        key={i}
                        src={logo}
                        alt="extracurricular images"
                        width={200}
                        height={200}
                        className="object-contain h-[200px] w-auto"
                    />
                ))}
            </div>
        </div>
    );
}

export default function ProductPage() {
    return (
        <div className="w-full bg-black min-h-screen" style={{ margin: 0, padding: 0 }}>
            <style jsx global>{`
                html, body {
                    background-color: black !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
            `}</style>
            
            {/* Intro */}
            <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-black">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Left column */}
                <div className="lg:col-span-6 lg:pl-8 text-center lg:text-left" style={{ marginTop: '100px', marginBottom: '-60px', marginLeft: '90px' }}>
                    <h1 className="bg-gradient-to-r from-[#959595] to-[#65B4D0] inline-block text-transparent bg-clip-text mb-6 md:mb-4 font-bold text-[40px] md:text-[56px] font-manrope">
                    Extracurriculars
                    </h1>
                </div>

                {/* Right column */}
                <div className="hidden lg:block lg:col-span-6" />
                </div>
            </div>
            </div>


            {/* Panel 1 */}
            <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-black">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                
                {/* Image Left */}
                <div className="lg:col-span-6 lg:pl-8 flex justify-center lg:justify-start">
                    <div className="relative w-full h-[600px] max-w-[600px]">
                    <Image
                        src="/scout_spotlight.png"
                        alt="newsletter feature"
                        fill
                        className="object-contain rounded-[14px]"
                        priority
                    />
                    </div>
                </div>

                {/* Text Right */}
                <div className="lg:col-span-6 text-white flex flex-col items-center lg:items-start">
                    <div className="w-full text-center lg:text-left">
                    <h1 className="text-white text-[40px] md:text-[56px] leading-tight font-bold mb-6">
                        Scout
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                        During the Fall semester, I worked as a junior programmer on an interactive marketing website for the snow sports company Flowmersion (also known as Baseline Tech).
                        Collaborating closely with designers and fellow developers, I helped build a polished, client-facing site that showcased their snowboard analytics product and supported
                        multiple design iterations driven by client feedback.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                        Through this experience, I strengthened my ability to work within a diverse team, communicate technical decisions clearly, and translate client requirements
                        into functional and maintainable code. The final website successfully supported Flowmersion’s product marketing efforts and public launch.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed md:leading-[1.9]">
                        In Spring 2026, I was promoted to Senior Developer, where I now lead a team of programmers responsible for delivering a new client project for Superpower Mentors.
                        In this role, I manage team members, coordinate technical deliverables, and ensure the timely development of a high-quality product. Additional technical details about this
                        project and the previous one can be found on the{" "}
                        <a href="./projects" className="text-blue-400 underline hover:text-blue-300 transition">
                        Projects
                        </a>{" "}
                        page.
                    </p>
                    </div>
                </div>

                </div>
            </div>
            </div>



            {/* Panel 2 */}
            <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 mb-20 bg-black">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

                {/* Text Left */}
                <div className="lg:col-span-6 lg:pl-8 text-white flex flex-col items-center lg:items-start">
                    <div className="w-full text-center lg:text-left" style={{ marginLeft: '90px' }}>
                    <h1 className="text-white text-[40px] md:text-[56px] leading-tight font-bold mb-6">
                        WiCyS
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                    I joined Women in CyberSecurity (WiCyS) in Spring 2025 and was elected Secretary in Fall 2025.
                    WiCyS is important to me because I am passionate about increasing access and representation for gender minorities in STEM and cybersecurity.
                    This is a continuation of a childhood of such activities which were what allowed me to pursue cybersecurity in the first place including Girl Scouts and serving as Captain of an all-girls FIRST Robotics team.
                    Through these activities, I saw firsthand how mentorship and opportunity help talented students thrive. Our team&apos;s mission was featured by Boston radio station GBH{" "}
                    <a
                        href="https://www.wgbh.org/news/national/2023-04-04/lexington-robotics-team-engineers-space-for-girls-to-thrive-in-stem"
                        className="text-blue-400 underline hover:text-blue-300 transition"
                        target="_blank"
                        rel="noreferrer"
                    >
                        (GBH Article!)
                    </a>
                    .
                    </p>

                    <p className="text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                    As WiCyS Secretary, I continue the mission of inclusion by collaborating with the executive board to plan technical workshops, community-building events,
                    and networking opportunities—including collaborations like our annual CTF with NU Security Club and speaker events with
                    professionals across the cybersecurity industry. I also write a weekly newsletter for 200+ members highlighting upcoming
                    events and national WiCyS opportunities, and I helped recruit 30+ new members during the 2025–2026 academic year through
                    outreach and club fairs. You can see our recent events on our {" "}
                    <a
                        href="https://www.instagram.com/nuwicys/"
                        className="text-blue-400 underline hover:text-blue-300 transition"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram.
                    </a>
                    </p>

                    </div>
                </div>

                {/* Image Right */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end">
                    <div className="relative w-full h-[500px] max-w-[500px]">
                    <Image
                        src="/wicys_post.png"
                        alt="WiCyS feature"
                        fill
                        className="object-contain rounded-[14px]"
                    />
                    </div>
                </div>

                </div>
            </div>
            </div>

            {/* Panel 4*/}
            <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-black">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
                        {/* Text Left */}
                        <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
                        <h2 className="bg-gradient-to-r from-[#959595] to-[#65B4D0] inline-block text-transparent bg-clip-text mb-6 md:mb-4 font-bold text-[40px] md:text-[56px] font-manrope">
                            High School Highlights
                        </h2>

                        <p className="text-white text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                            Captain of FIRST Robotics Team, The Parity Bits. Our team earned awards at the Massachusetts State Championships during the 2023 and 2024 seasons.{" "}
                            <a
                            href="https://www.instagram.com/theparitybits/"
                            className="text-blue-400 underline hover:text-blue-300 transition"
                            target="_blank"
                            rel="noreferrer"
                            >
                            Instagram
                            </a>
                        </p>

                        <p className="text-white text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                            Built and launched a fundraising webpage to support Lexington, Massachusetts local library renovation project.{" "}
                            <a
                            href="https://youthsteaminitiative.org/chirp.html"
                            className="text-blue-400 underline hover:text-blue-300 transition"
                            target="_blank"
                            rel="noreferrer"
                            >
                            More details here
                            </a>
                        </p>
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6 md:gap-8 items-center lg:pr-8">
                            <ImageCarousel/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}