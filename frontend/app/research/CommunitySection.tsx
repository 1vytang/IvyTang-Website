"use client";

import Image from "next/image";
import React from "react";

export default function CommunitySection() {
  return (
    <div className="w-full bg-black min-h-screen" style={{ margin: 0, padding: 0 }}>
      <style jsx global>{`
        html,
        body {
          background-color: black !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>

      {/* Intro */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-black">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div
              className="lg:col-span-6 lg:pl-8 text-center lg:text-left"
              style={{ marginTop: "80px", marginBottom: "-300px", marginLeft: "90px" }}
            >
              <h1 className="bg-gradient-to-r from-[#959595] to-[#65B4D0] inline-block text-transparent bg-clip-text mb-6 md:mb-4 font-bold text-[40px] md:text-[56px] font-manrope">
                Airtag Research
              </h1>
            </div>

            <div className="hidden lg:block lg:col-span-6" />
          </div>
        </div>
      </div>

      {/* Panel 1 (Image Left, Text Right) */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-black">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Image Left */}
            <div className="lg:col-span-6 lg:pl-8 flex justify-center lg:justify-start">
              <div className="relative w-full h-[600px] max-w-[600px]">
                <Image
                  src="/data_table.png"
                  alt="Table of Hellotag pcap data"
                  fill
                  className="object-contain rounded-[14px]"
                  priority
                />
              </div>
            </div>

            {/* Text Right */}
            <div className="lg:col-span-6 text-white flex flex-col items-center lg:items-start">
              <div className="w-full text-center lg:text-left">
                <p className="text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                My research focuses on developing a device that can detect when an object is being tracked by an AirTag-like device and notify the user, regardless of phone model or ecosystem. To support this goal, I built and tested a BLE capture pipeline using an ESP32, SDR hardware (B210), and controlled RF chamber experiments to collect advertising traffic from multiple tracker brands, including AirTag, SmartTag, MiLi, HelloTag, Chipolo, and AirPods. I captured and parsed PCAP data across multiple states including connected, nearby, and lost. I extracted key metadata such as packet length, header length, RSSI, frequency offset, MAC address, and manufacturer-specific payloads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel 2 (Text Left, Image Right) */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 mb-20 bg-black">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Text Left */}
            <div className="lg:col-span-6 lg:pl-8 text-white flex flex-col items-center lg:items-start">
              <div className="w-full text-center lg:text-left" style={{ marginLeft: "90px" }}>
                <p className="text-base md:text-lg leading-relaxed md:leading-[1.9] mb-6">
                Through statistical and structural analysis of thousands of BLE packets, I identified clear, repeatable patterns that distinguish nearby versus lost tracking states across brands. In particular, lost-mode trackers consistently transmit structurally rigid BLE advertisements with fixed packet, header, and payload lengths, while nearby modes exhibit higher variability and lower payload rotation. By visualizing packet distributions, entropy, and MAC address frequency histograms, I showed that state differentiation is driven by payload structure rather than channel usage. These findings demonstrate that passive BLE analysis can reliably detect long-term tracking behavior and form the foundation for a cross-platform, privacy-preserving anti-tracking device.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full h-[500px] max-w-[500px]">
                <Image
                  src="/graph.png"
                  alt="Histogram of packets for Airtag in different states"
                  fill
                  className="object-contain rounded-[14px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel 3 (Image Left, Text Right) */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-black">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Image Left */}
            <div className="lg:col-span-6 lg:pl-8 flex justify-center lg:justify-start">
              <div className="relative w-full h-[560px] max-w-[560px]">
                <Image
                  src="/research_team.png"
                  alt="Research image"
                  fill
                  className="object-contain rounded-[14px]"
                />
              </div>
            </div>

            {/* Text Right */}
            <div className="lg:col-span-6 text-white flex flex-col items-center lg:items-start">
              <div className="w-full text-center lg:text-left">
                <h2 className="text-white text-[40px] md:text-[56px] leading-tight font-bold mb-6">
                  Paper expected by Summer 2026...
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
