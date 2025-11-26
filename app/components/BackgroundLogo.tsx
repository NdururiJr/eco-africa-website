"use client";

import Image from "next/image";

export default function BackgroundLogo() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] opacity-[0.08]">
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
