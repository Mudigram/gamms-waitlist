"use client";

import Image from "next/image";
import CountdownTimer from "../components/Countdown";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// ✅ Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Handle Supabase submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("subscribers")
        .insert([{ email }]);

      if (error) {
        console.error("Supabase error:", error.message);
        alert("Something went wrong! Please try again.");
      } else {
        setSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 sm:px-8 lg:px-12 text-white font-sans">
      <div className="w-full max-w-md bg-black/50 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 sm:p-10 text-center space-y-8 relative mt-10 mb-10">
        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-lime-400/30 to-transparent blur-lg -z-10"></div>

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.jpg"
            alt="GammsApp Logo"
            width={64}
            height={64}
            className="rounded-xl"
            priority
          />
        </div>

        {/* Tag */}
        <span className="text-lime-400 text-xs uppercase tracking-wider font-semibold block">
          Available in Early 2025
        </span>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
          Get Early Access
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Be amongst the first to experience{" "}
          <span className="text-lime-400 font-semibold">GammsApp</span> and
          launch a viral waitlist. Sign up to be notified when we launch!
        </p>

        {/* Join Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-3 w-full"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-black/70 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 text-white placeholder-gray-500 w-full"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full sm:w-auto py-3 px-6 rounded-full font-semibold transition-all duration-300 ${loading
              ? "bg-lime-700 cursor-not-allowed"
              : "bg-lime-400 hover:shadow-[0_0_12px_#a3e635] hover:scale-[1.03]"
              }`}
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        {/* Social Proof */}
        <div className="flex flex-col items-center space-y-3 pt-4">
          <div className="flex -space-x-3">
            <Image
              src="/avatars/mudi.jpg"
              alt="User 4"
              width={32}
              height={32}
              className="rounded-full border border-black"
            />
            <Image
              src="/avatars/david.jpg"
              alt="User 1"
              width={32}
              height={32}
              className="rounded-full border border-black"
            />
            <Image
              src="/avatars/lisa.jpg"
              alt="User 2"
              width={32}
              height={32}
              className="rounded-full border border-black"
            />
            <Image
              src="/avatars/david2.jpg"
              alt="User 3"
              width={32}
              height={32}
              className="rounded-full border border-black"
            />
          </div>
          <p className="text-gray-500 text-xs">
            Join{" "}
            <span className="text-lime-400 font-medium">1,000+</span> others on
            the waitlist
          </p>
        </div>

        {/* Dynamic Countdown */}
        <div className="px-6 sm:px-0">
          <CountdownTimer targetDate="2025-10-25T00:00:00" />
        </div>

        {/* Success Modal */}
        {submitted && (
          <div className="flex flex-col items-center text-center">
            <p className="text-lg font-semibold">🎉 You are on the waitlist!</p>
            <p className="text-sm text-gray-300 mb-4">
              Thanks for registering, we will notify you when we launch.
            </p>

            {/* Twitter Share Button */}
            <div className="mt-4 flex justify-center">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "🚀 I just joined the @GammsApp waitlist! Can’t wait to see what’s coming next. #GammsApp"
                )}&url=${encodeURIComponent("https://gammsapp.vercel.app")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-transform duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.27 4.27 0 001.88-2.37 8.6 8.6 0 01-2.72 1.05 4.24 4.24 0 00-7.23 3.86A12 12 0 013 4.79a4.23 4.23 0 001.31 5.66 4.22 4.22 0 01-1.92-.53v.05a4.24 4.24 0 003.4 4.15 4.27 4.27 0 01-1.91.07 4.25 4.25 0 003.96 2.94A8.51 8.51 0 012 19.54a12 12 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.72 8.72 0 0024 5.1a8.47 8.47 0 01-2.54.7z" />
                </svg>
                Share on Twitter
              </a>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="w-full text-center py-6 mt-4 text-gray-500 text-sm border-t border-neutral-800">
          © 2025 GammsApp. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
