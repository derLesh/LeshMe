import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { UmamiAnalytics } from "@/lib/analytics";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const interSans = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lesh - lesh.me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <UmamiAnalytics />
      </body>
    </html>
  );
}
