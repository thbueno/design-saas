import type { Metadata } from "next";
import { Onest, Shrikhand } from "next/font/google";
import "./globals.css";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap",
//   axes: ["opsz"],
// });

// const jetbrains = JetBrains_Mono({
//   variable: "--font-jetbrains",
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
// });

// const gabarito = Gabarito({
//   variable: "--font-gabarito",
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400", "500", "600", "700", "800", "900"],
// });

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const shrikhand = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shrikhand",
});

export const metadata: Metadata = {
  title: "Esthalo Comunicação",
  description: "Uma agência experiente especializada em inovar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" scroll-behavior="smooth">
      <body
        className={`${onest.variable} ${shrikhand.variable} font-sans antialiased bg-stone-200 text-stone-700 tracking-tighter`}
      >
        {children}
      </body>
    </html>
  );
}
