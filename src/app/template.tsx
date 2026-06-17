"use client";

import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-appear flex flex-col min-h-screen w-full">
      {children}
    </div>
  );
}
