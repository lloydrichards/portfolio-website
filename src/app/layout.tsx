import { Footer } from "@/components/layout/footer/Footer";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Inter, Josefin_Sans, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Lloyd Richards Design",
  description:
    "Digital playground of Lloyd Richards, a designer and developer.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lloydrichardsdesign.com",
    title: "Lloyd Richards Design",
    description:
      "Digital playground of Lloyd Richards, a designer and developer.",
    images: [
      {
        url: "/images/lloyd_richards_portrait.png",
        width: 400,
        height: 600,
        alt: "Lloyd Richards Portrait",
      },
    ],
    site_name: "Lloyd Richards Design",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${josefin_sans.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
