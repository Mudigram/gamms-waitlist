// components/JoinButton.tsx
"use client";

import React from "react";

export default function JoinButton({ loading }: { loading?: boolean }) {
    return (
        <button
            type="submit"
            disabled={loading}
            className={`relative rounded-full bg-red-800 text-white px-6 py-2 text-sm font-medium 
      transition-all duration-300 hover:scale-105 
      hover:shadow-[0_0_12px_rgba(255,0,0,0.6)] active:scale-95
      ${loading ? "opacity-50 cursor-not-allowed" : ""}
      `}
        >
            {loading ? "Joining..." : "Join the Movement"}
        </button>
    );
}
