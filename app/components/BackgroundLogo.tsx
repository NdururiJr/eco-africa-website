"use client";

import Image from "next/image";

export default function BackgroundLogo() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] opacity-[0.04]">
        <Image
          src="/Logo.png"
          alt=""
          fill
          className="object-contain"
          priority
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
