"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Preload video metadata for faster initial paint
    video.preload = "metadata";

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener("canplay", handleCanPlay);

    // Start loading video immediately since it's above the fold
    video.load();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <header className="relative w-full h-[720px] overflow-hidden">
      {/* Placeholder background while video loads */}
      <div
        className={`absolute inset-0 bg-zinc-950 transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video Background */}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        // Poster for immediate visual feedback
        poster="/video-poster.jpg"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
        Twoja przeglądarka nie obsługuje odtwarzacza wideo.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 max-w-5xl mx-auto gap-8 pt-20">
        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl sm:text-7xl md:text-5xl font-bold tracking-tight text-white">
            ZACZNIJ{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-500">
              TRENOWAĆ
            </span>
          </h1>
          <p className="text-lg sm:text-lg md:text-lg text-zinc-300 max-w-2xl mx-auto font-light">
            Przekraczaj granice swoich możliwości. Profesjonalne wsparcie w
            drodze do wymarzonej sylwetki.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          <Link
            href="#offer"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-zinc-200 transition-all transform hover:scale-105"
          >
            Sprawdź ofertę
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/10 text-white font-semibold text-base backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            Umów konsultację
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-3xl border-2 border-white/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </header>
  );
}
