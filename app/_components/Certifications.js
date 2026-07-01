"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

// ─────────────────────────────────────────────
// Add your certificates here.
// Drop the image files into  public/certs/
// then add an entry below with the filename.
// ─────────────────────────────────────────────
const certificationsData = [
  {
    id: 1,
    image: "mongodb-intro.png",           // public/certs/mongodb-intro.png
    title: "Introduction to MongoDB",
    issuer: "MongoDB Inc. / Coursera",
    date: "Apr 6, 2024",
    credentialUrl: "https://coursera.org/verify/29MFDE6ZGNAH",
  },
  // Add more certificates below:
  // {
  //   id: 2,
  //   image: "aws-saa.png",
  //   title: "AWS Certified Solutions Architect",
  //   issuer: "Amazon Web Services",
  //   date: "2024",
  //   credentialUrl: "https://...",
  // },
];

export default function Certifications() {
  const [current, setCurrent] = useState(0);
  const total = certificationsData.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const cert = certificationsData[current] ?? certificationsData[0];

  if (!cert) return null;

  return (
    <div className="mt-16 select-none">
      <div className="flex items-center justify-center gap-4 lg:gap-8">

        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous certificate"
          className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:bg-primary-500 hover:border-primary-500 group transition-colors"
        >
          <ChevronLeftIcon className="size-5 text-gray-600 group-hover:text-white" />
        </button>

        {/* Certificate display */}
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-4xl">

          {/* Image */}
          <div className="w-full lg:w-3/5 rounded-xl overflow-hidden shadow-[0_20px_60px_0_rgba(43,56,76,0.14)] border border-gray-100 bg-white">
            <div className="relative w-full aspect-[800/618]">
              {cert.image ? (
                <Image
                  key={cert.id}
                  src={`/certs/${cert.image}`}
                  alt={cert.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
                  No image
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-2/5 flex flex-col gap-4 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-500 bg-[#edd8ff50] px-3 py-1 rounded-full">
                Certified
              </span>
            </div>
            <h3 className="text-gray-900 font-semibold text-2xl leading-snug">
              {cert.title}
            </h3>
            <p className="text-gray-500 text-base font-medium">{cert.issuer}</p>
            <p className="text-gray-400 text-sm">{cert.date}</p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 text-sm font-medium transition-colors mx-auto lg:mx-0"
              >
                <ArrowTopRightOnSquareIcon className="size-4" />
                Verify Credential
              </a>
            )}
            {/* Counter */}
            <p className="text-gray-300 text-sm mt-2">
              {current + 1} / {total}
            </p>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next certificate"
          className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:bg-primary-500 hover:border-primary-500 group transition-colors"
        >
          <ChevronRightIcon className="size-5 text-gray-600 group-hover:text-white" />
        </button>
      </div>

      {/* Dot indicators */}
      {total > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {certificationsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to certificate ${i + 1}`}
              className={`transition-all rounded-full ${
                i === current
                  ? "bg-primary-500 w-6 h-2"
                  : "bg-gray-300 w-2 h-2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
