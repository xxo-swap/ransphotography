"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CONTACT_INFO } from "@/data/site-data";

export default function BookingPage() {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".animate-in",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out" }
    );
  }, []);

  return (
    <main className="bg-dark min-h-screen pt-40 pb-20 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Side: Editorial Content */}
        <div className="space-y-12">
          <div className="animate-in">
            <span className="font-body text-[10px] uppercase tracking-[0.5em] text-primary block mb-4">
              Availability
            </span>
            <h1 className="font-display text-7xl md:text-8xl italic text-white leading-tight">
              Let&apos;s Create <br /> Your Legacy.
            </h1>
          </div>

          <p className="animate-in font-body text-white/40 leading-relaxed max-w-md">
            We only take on a limited number of weddings each year to ensure
            every film and gallery receives our full creative devotion. Tell us
            about your vision.
          </p>

          <div className="animate-in space-y-4 pt-10">
            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary">
              Direct Contact
            </p>
            <p className="font-title text-xl text-white/80">
              {CONTACT_INFO.email}
            </p>
            <p className="font-title text-xl text-white/80">
              {CONTACT_INFO.phone}
            </p>
            <p className="font-title text-xl text-white/80">
              {CONTACT_INFO.primaryAddress}
            </p>
            {/* This will only render if secondaryAddress exists in your data */}
            {CONTACT_INFO.secondaryAddress && (
              <p className="font-title text-xl text-white/80">
                {CONTACT_INFO.secondaryAddress}
              </p>
            )}
          </div>
        </div>

        {/* Right Side: The Inquiry Form */}
        <form
          ref={formRef}
          className="animate-in space-y-8 bg-white/5 p-10 border border-white/5 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] uppercase tracking-widest text-white/40">
                Full Name
              </label>
              <input
                type="text"
                className="bg-transparent border-b border-white/10 py-3 focus:border-primary outline-none transition-colors font-body text-sm"
                placeholder=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] uppercase tracking-widest text-white/40">
                Email Address
              </label>
              <input
                type="email"
                className="bg-transparent border-b border-white/10 py-3 focus:border-primary outline-none transition-colors font-body text-sm"
                placeholder=""
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] uppercase tracking-widest text-white/40">
                Wedding Date
              </label>
              <input
                type="date"
                className="bg-transparent border-b border-white/10 py-3 focus:border-primary outline-none transition-colors font-body text-sm text-white/60"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] uppercase tracking-widest text-white/40">
                Venue/Location
              </label>
              <input
                type="text"
                className="bg-transparent border-b border-white/10 py-3 focus:border-primary outline-none transition-colors font-body text-sm"
                placeholder=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-body text-[9px] uppercase tracking-widest text-white/40">
              Which services are you interested in?
            </label>
            <select className="bg-dark border border-white/10 p-3 focus:border-primary outline-none font-body text-sm text-white/60">
              <option>Cinematic Wedding Film</option>
              <option>Photography & Films (Full Suite)</option>
              <option>Pre-Wedding Story</option>
              <option>Candid Photography</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-body text-[9px] uppercase tracking-widest text-white/40">
              The Story (Tell us a bit about yourselves)
            </label>
            <textarea
              rows={4}
              className="bg-transparent border border-white/10 p-4 focus:border-primary outline-none transition-colors font-body text-sm resize-none"
              placeholder="We'd love to hear about your vision..."
            />
          </div>

          <button className="w-full bg-primary hover:bg-white hover:text-dark text-white font-body text-[10px] uppercase tracking-[0.5em] py-5 transition-all duration-500">
            Submit Inquiry
          </button>
        </form>
      </div>
    </main>
  );
}
