import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bella & Danny | 5 Oct Wedding",
  description: "You're invited — details for Sunday 5 October at Chateau Wyuna.",
  openGraph: {
    title: "Bella & Danny — Wedding Day",
    description:
      "Key info, timing, attire, gifts and transport — Sunday 5 Oct, 2pm at Chateau Wyuna.",
    type: "website",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
        <div className="decor-bg">
          <div className="decor-layer absolute inset-0" />
        </div>
        {children}
      </body>
    </html>
  );
}
