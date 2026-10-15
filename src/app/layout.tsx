import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans, Mulish } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drmayareynolds.com"),
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description:
    "Evidence-based therapy for anxiety, trauma, panic, and burnout in Santa Monica, California. Specializing in CBT, EMDR, and somatic healing for high-achieving adults.",
  keywords: [
    "Santa Monica therapist",
    "clinical psychologist Santa Monica",
    "anxiety therapy Santa Monica",
    "EMDR therapy California",
    "burnout counseling professionals",
    "trauma psychologist CA",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist Santa Monica",
    description:
      "A calm, grounding space for healing anxiety, trauma, and burnout in Santa Monica, California.",
    url: "https://drmayareynolds.com",
    siteName: "Dr. Maya Reynolds Therapy",
    images: [
      {
        url: "/images/maya/dr-maya-reynolds.png",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${jakarta.variable} ${mulish.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/fsc1wsd.css" />
      </head>
      <body className="min-h-screen bg-sand-50 font-sans text-ink-900 selection:bg-clay-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

