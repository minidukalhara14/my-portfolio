import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalhara | Full Stack Developer Portfolio",
  description: "Explore the professional portfolio of Kalhara, a developer specializing in Next.js, React, and Web Technologies. Experience  modern web development.",
  keywords: ["Kalhara", "Web Developer Sri Lanka", "Next.js Portfolio", "React Developer", ],
  authors: [{ name: "Kalhara" }],
  icons: {
    icon: "/title.ico", 
  },
  openGraph: { 
    title: "Kalhara | Web Developer Portfolio",
    description: "Check out my latest projects and professional experience in web development.",
    url: "https://your-domain-name.vercel.app", 
    siteName: "Kalhara Portfolio",
    images: [
      {
        url: "/heroImg.jpg", 
        width: 1200,
        height: 630,
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
  suppressHydrationWarning 
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
  <body className="min-h-full flex flex-col">
    {children}
  </body>
</html>
  );
}
