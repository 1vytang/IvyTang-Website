"use client";

import Image from "next/image";
import React, { useEffect, useRef } from 'react';
const images = [
    '/pb_gbh.png',
    '/pb_group.png',
    '/steam_team.png',
    '/steam_team2.png'
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
            <div className="w-full px-6 md:px-12 lg:px-20 pt-24 md:pt-32 lg:pt-40 pb-8 bg-black">
                <div className="w-full max-w-7xl mx-auto">
                    <h1 className="text-center lg:text-left text-white font-semibold text-[44px] md:text-[64px] font-manrope lg:pl-8 tracking-tight">
                        <span className="inline-block pb-3">
                            Extracurriculars
                        </span>
                        <span className="block h-[2px] w-full max-w-[560px] mx-auto lg:mx-0 bg-gradient-to-r from-transparent via-blue-400/80 to-transparent lg:from-blue-400/80 lg:via-blue-400/50 lg:to-transparent rounded-full" />
                    </h1>
                </div>
            </div>

            {/* Panel 1 */}
            <div className="w-full px-6 md:px-12 lg:px-20 pt-4 md:pt-8 pb-6 md:pb-10 bg-black">
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
                    <h1 className="text-white text-[40px] md:text-[56px] leading-tight font-medium mb-6">
                        Scout
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                        Previously, I was junior developer on an interactive marketing website for the snow sports company Flowmersion (also known as Baseline Tech).
                        Collaborating closely with designers and fellow developers, I helped build a polished, client-facing site that showcased their snowboard analytics product and supported
                        multiple design iterations driven by client feedback.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                        Through this experience, I strengthened my ability to work within a diverse team, communicate technical decisions clearly, and translate client requirements
                        into functional and maintainable code. The final website successfully supported Flowmersion’s product marketing efforts and public launch.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed md:leading-[1.9]">
                        This past semester I served as Senior Developer, where I lead a team of programmers responsible for delivering a new client project for Superpower Mentors.
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
            <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 mb-5 bg-black">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

                {/* Text Left */}
                <div className="lg:col-span-6 lg:pl-8 text-white flex flex-col items-center lg:items-start">
                    <div className="w-full text-center lg:text-left lg:ml-[90px]">
                    <h1 className="text-white text-[40px] md:text-[56px] leading-tight font-medium mb-6">
                        WiCyS
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                    I joined Women in CyberSecurity (WiCyS) in Spring 2025 and was elected Secretary in Fall 2025.
                    WiCyS is important to me because I am passionate about increasing access and representation for gender minorities in STEM and cybersecurity.
                    This is a continuation of a childhood of such activities which were what allowed me to pursue cybersecurity in the first place including Girl Scouts and serving as Captain of an all-girls FIRST Robotics team.
                    Through these activities, I saw firsthand how mentorship and opportunity help talented students thrive.
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

            {/* Panel 4 */}
            <div className="w-full px-6 md:px-12 lg:px-20 pt-6 md:pt-8 pb-12 md:pb-20 bg-black">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                        {/* Text Left */}
                        <div className="lg:col-span-6 lg:pl-8 text-center lg:text-left text-white">
                            <h2 className="text-white mb-8 md:mb-6 font-semibold text-[44px] md:text-[64px] leading-tight font-manrope tracking-tight">
                                <span className="inline-block pb-3">
                                    High School Highlights
                                </span>
                                <span className="block h-[2px] w-full max-w-[640px] mx-auto lg:mx-0 bg-gradient-to-r from-transparent via-blue-400/80 to-transparent lg:from-blue-400/80 lg:via-blue-400/50 lg:to-transparent rounded-full" />
                            </h2>

                            <p className="text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                                I was a Captain of FIRST Robotics Team, The Parity Bits. Our team earned awards at the Massachusetts State Championships during the 2023 and 2024 seasons. Our team was featured by Boston radio station {" "}
                    <a
                        href="https://www.wgbh.org/news/national/2023-04-04/lexington-robotics-team-engineers-space-for-girls-to-thrive-in-stem"
                        className="text-blue-400 underline hover:text-blue-300 transition"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GBH!
                    </a>
                
                            </p>

                            <p className="text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
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

                        <div className="lg:col-span-6 w-full overflow-hidden flex items-center lg:pr-8">
                            <ImageCarousel />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}