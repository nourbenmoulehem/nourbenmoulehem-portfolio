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
        <body className={`antialiased ${oxanium.variable} font-oxanium`}>

        <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
          {/* Radial gradient background */}
          {/* <div className=" top-0 left-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] fixed"></div> */}

          

          {/* <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> bg-slate-950*/}

          <div className="fixed inset-0  z-[-1]">
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>

          <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

          {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}

          <Toaster />

          <Navbar />
          {children}
          </ThemeProvider>

        </body>
    </html>
  );
}
