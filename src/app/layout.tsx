import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home Page - CodeArena",
  description:
    "Master coding skills with CodeArena's challenges and competitions.",
  keywords: ["coding", "programming", "challenges", "CodeArena"],
  openGraph: {
    title: "Home Page - CodeArena",
    description:
      "Master coding skills with CodeArena's challenges and competitions.",
    images: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.className} dark `}>
      <head>
        {/* Favicon Link */}
        <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className="overflow-x-hidden md:px-24 px-6"
        style={{
          background:
            "linear-gradient(135deg, #011C37 0%, #012A4A 50%, #013A63 100%)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
