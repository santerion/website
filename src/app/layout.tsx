import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { getPublicPath } from "@/lib/path-utils"
import "./globals.css";

const quicksandFont = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Santerion | Software Development",
  description: "Software on budget & on time",
  icons: {
    icon: getPublicPath('/icon_violet.avif'),
    apple: getPublicPath('/icon_violet.avif'),
  },
  openGraph: {
    title: "Santerion | Software Development",
    description: "Software on budget & on time",
    images: [
      {
        url: getPublicPath('/logo_violet_light.avif'),
        width: 1200,
        height: 630,
        alt: "Santerion Logo",
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Santerion | Software Development",
    description: "Software on budget & on time",
    images: [getPublicPath('/logo_violet_light.avif')],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${quicksandFont.variable} font-sans antialiased`}
        className='font-sans antialiased'
        suppressHydrationWarning={true}
      >
        {children}
        {/* 100% privacy-first analytics */}
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </body>
    </html>
  );
}
