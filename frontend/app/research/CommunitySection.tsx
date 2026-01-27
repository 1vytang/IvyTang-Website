"use client";

import Image from "next/image";
import React from "react";

export default function CommunitySection() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Title */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="bg-gradient-to-r from-[#959595] to-[#65B4D0] inline-block text-transparent bg-clip-text font-bold text-[42px] md:text-[56px] font-manrope">
            Airtag Research
          </h1>
        </div>
      </section>

      {/* Section 1 */}
      <section className="px-6 md:px-12 lg:px-20 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <figure className="flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/data_table1.png"
                alt="Parsed BLE advertising data table"
                fill
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-1 text-[11px] text-gray-400 text-center">
              CFO Boxplots of Observed Tags
            </figcaption>
          </figure>

          {/* Text */}
          <div className="text-base md:text-lg leading-relaxed">
            <p className="mt-5">
              My research currently focuses on network privacy and security. Specifically, we are developing a device that can detect when an
              individual is being tracked by an{" "}
              AirTag-like tracker and notify the user,{" "}
              independent of phone model or ecosystem.
            </p>

            <p className="mt-5">
              We built and validated a{" "}
              BLE traffic capture module using an{" "}
              ESP32. We also collected advertising
              traffic from multiple tracker brands including{" "}
              AirTag, SmartTag, MiLi, HelloTag, Chipolo, and AirPods.
            </p>

            <p className="mt-5">
              After capturing and parsing traffic from
              connected, nearby, and{" "}
              lost states of surrounding tags, we extracted important metadata such as{" "}
              Carrier frequency offset (CFO),{" "}
              MAC address, and{" "}
              manufacturer-specific payloads.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="px-6 md:px-12 lg:px-20 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="text-base md:text-lg leading-relaxed order-2 lg:order-1">
            <p className="mt-[6rem]">
              Through statistical and{" "}
              structural analysis of thousands of BLE packets,
              we identify stable and distinguishable CFO based fingerprints that
              distinguish persistant and nearby adversary tags from the background lost state devices.
            </p>

            <p className="mt-5">
              By storing observed fingerprints and looking at their long-term persistance, we can identify long-term trackers even though they change their identifiers quickly.
            </p>
          </div>

          {/* Image */}
          <figure className="flex flex-col items-center order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/graph2.png"
                alt="Packet histogram comparison across tracker states"
                fill
                className="object-contain"
              />
            </div>
            <figcaption className="text-[11px] text-gray-400 text-center">
            CFO Violin Plot of Observed Tags
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Section 3 */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <figure className="flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/research_team.png"
                alt="RF chamber testing setup"
                fill
                className="object-contain"
              />
            </div>
            <figcaption className="mt-5 text-[11px] text-gray-400 text-center">
              Collecting data around Boston with the team!
            </figcaption>
          </figure>

          {/* Text */}
          <div>
            <h2 className="text-[28px] md:text-[34px] font-bold leading-tight">
              The paper detailing this research is currently{" "}
              under peer review.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
