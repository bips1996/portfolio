import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const displaySerif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.biplaba.me"),
  title: "Biplaba Samantaray | Software Engineer",
  description:
    "Software Engineer specializing in scalable backend systems, platform engineering, and full-stack applications.",
  keywords: [
    "Software Engineer",
    "Platform Engineer",
    "Backend Engineer",
    "Spring Boot",
    "Node.js",
    "TypeScript",
    "AWS",
  ],
  openGraph: {
    title: "Biplaba Samantaray Portfolio",
    description:
      "Senior software engineer portfolio focused on backend systems, platform engineering, and full-stack delivery.",
    url: "https://www.biplaba.me",
    siteName: "Biplaba Portfolio",
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${displaySerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
