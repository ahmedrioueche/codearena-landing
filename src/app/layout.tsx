import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeArena",
  description:
    "Master coding skills with CodeArena's challenges and competitions.",
  keywords: ["coding", "programming", "challenges", "CodeArena"],
  openGraph: {
    title: "CodeArena",
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
    <html lang="en" className={`${oswald.className} dark`}>
      <head>
        {/* Viewport Meta Tag for Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon Link */}
        <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className="md:px-24 px-10"
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
