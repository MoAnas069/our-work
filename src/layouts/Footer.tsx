"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/[0.03] bg-[#050505] py-10 px-6 md:px-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-neonGreen/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Intellex Logo */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-2 border-neonGreen flex items-center justify-center">
            <div className="w-2 h-2 bg-neonGreen" />
          </div>
          <span className="font-neuropol text-base font-bold tracking-widest uppercase text-white">
            INTELLEX
          </span>
        </div>

        {/* Copyright */}
        <span className="text-xs text-white/30 font-mono">
          © {new Date().getFullYear()} Intellex. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
