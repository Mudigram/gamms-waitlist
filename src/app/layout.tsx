import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// ✅ SEO & Social Meta
export const metadata: Metadata = {
  title: "GammsApp — Get Early Access",
  description:
    "Join the first 1000 people to get verified on GammsApp. Be part of the community, contribute, and get rewarded as we launch.",
  keywords: [
    "GammsApp",
    "waitlist",
    "early access",
    "community",
    "verified",
    "Web3",
  ],
  authors: [{ name: "GammsApp Team" }],
  openGraph: {
    title: "GammsApp — Get Early Access",
    description:
      "Be among the first to join GammsApp. Verified users. Community-driven. Rewarding contributions.",
    url: "https://gammsapp.vercel.app/",
    siteName: "GammsApp",
    images: [
      {
        url: "/og-image.jpg", // ✅ upload this in your /public folder
        width: 1200,
        height: 630,
        alt: "GammsApp Early Access Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GammsApp",
    title: "GammsApp — Get Early Access",
    description:
      "Join the first 1000 people verified on GammsApp. Contribute, earn, and grow with the community.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico", // ✅ Place your 1:1 logo version here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
