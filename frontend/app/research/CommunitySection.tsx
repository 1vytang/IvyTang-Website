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
                src="/data_table.png"
                alt="Parsed BLE advertising data table"
                fill
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-1 text-[11px] text-gray-400 text-center">
              Parsed BLE advertising data from HelloTag PCAP captures
            </figcaption>
          </figure>

          {/* Text */}
          <div className="text-base md:text-lg leading-relaxed">
            <p>
              My research focuses on developing a device that can detect when an
              object is being tracked by an{" "}
              AirTag-like tracker and notify the user,{" "}
              <strong>independent of phone model or ecosystem</strong>.
            </p>

            <p className="mt-5">
              To support this goal, I built and validated a{" "}
              BLE capture pipeline using an{" "}
              ESP32, SDR hardware (B210), and{" "}
              <strong>controlled RF chamber experiments</strong>. Advertising
              traffic was collected from multiple tracker brands including{" "}
              <strong>AirTag, SmartTag, MiLi, HelloTag, Chipolo, and AirPods</strong>.
            </p>

            <p className="mt-5">
              I captured and parsed <strong>PCAP data</strong> across{" "}
              connected, nearby, and{" "}
              lost states, extracting metadata such as{" "}
              <strong>packet length</strong>, <strong>header length</strong>,{" "}
              <strong>RSSI</strong>, <strong>frequency offset</strong>,{" "}
              <strong>MAC address</strong>, and{" "}
              <strong>manufacturer-specific payloads</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="px-6 md:px-12 lg:px-20 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="text-base md:text-lg leading-relaxed order-2 lg:order-1">
            <p>
              Through statistical and{" "}
              structural analysis of thousands of BLE packets,
              I identified clear and repeatable patterns that
              distinguish <strong>nearby</strong> versus{" "}
              <strong>lost tracking states</strong> across multiple brands. Using this data,
               devices can be fingerprinted by CFO and distinguished if it has been with the user for an extended period of time.
            </p>

            <p className="mt-5">
              Lost-mode trackers consistently transmit{" "}
              structurally rigid BLE advertisements with{" "}
              <strong>fixed packet, header, and payload lengths</strong>, while
              nearby modes exhibit{" "}
              <strong>higher variability and payload rotation</strong>.
            </p>

            <p className="mt-5">
              By visualizing packet distributions,{" "}
              entropy, and{" "}
              MAC address frequency histograms, I demonstrated
              that <strong>state differentiation is driven by payload structure</strong>
              , not channel usage. These results show that{" "}
              <strong>passive BLE analysis</strong> can reliably detect{" "}
              <strong>long-term tracking behavior</strong>.
            </p>
          </div>

          {/* Image */}
          <figure className="flex flex-col items-center order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/graph.png"
                alt="Packet histogram comparison across tracker states"
                fill
                className="object-contain"
              />
            </div>
            <figcaption className="mt-1 text-[11px] text-gray-400 text-center">
              Packet distribution histogram comparing tracker states
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
            <figcaption className="mt-1 text-[11px] text-gray-400 text-center">
              Collecting data around Boston with the team!
            </figcaption>
          </figure>

          {/* Text */}
          <div>
            <h2 className="text-[28px] md:text-[34px] font-bold leading-tight">
              The paper detailing this research is currently{" "}
              <strong>under peer review</strong>.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
