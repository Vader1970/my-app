import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Import Inter font with specified subsets and assign it to a CSS variable for sans-serif font
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Metadata object containing information about the website
export const metadata: Metadata = {
  title: "Next.js e-commerce site", // Title of the website
  description: "Next.js e-commerce site with Typescript, Tailwind and Stripe", // Description of the website
};

// RootLayout component defines the layout structure for the entire application
export default function RootLayout({
  children, // ReactNode representing the content to be displayed within the layout
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Renders the HTML document with language set to English
  return (
    <html lang='en'>
      {/* Renders the body with specified classes and applies Inter font */}
      <body className={cn("bg-background min-h-screen font-sans antialiased", inter.variable)}>
        {children} {/* Renders the children components within the body */}
      </body>
    </html>
  );
}
