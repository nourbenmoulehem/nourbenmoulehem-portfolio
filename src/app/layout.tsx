import type { Metadata } from "next";
import { Oxanium, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { Toaster } from "@/components/Toaster";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nour Ben Moulehem",
  description: "This is Nour Ben Moulehem's coolest portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="beforeInteractive"
          async
        />
      </head>
      <body className={`antialiased ${oxanium.variable} font-oxanium `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          

          {/* layering */}

          <div style={{ backgroundColor: 'var(--background)' }} className="fixed inset-0 z-0">
            {/* Layer 1: Grid Effect */}

            {/* small grid */}
            {/* <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}

            {/* large grid */}
            <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            {/* dots */}
            {/* <div className="absolute top-0 -z-10 h-screen w-screen bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}



            {/* Layer 2: Radial Gradient with Transparency */}
            <div className="absolute inset-0 z-20 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(0,0,0,0.1)_40%,#63e_100%)]"></div>
          </div>

          

          <div className="relative z-20">
            <Toaster />

            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
