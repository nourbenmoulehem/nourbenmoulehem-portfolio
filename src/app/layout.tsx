import type { Metadata } from "next";
import { Oxanium , Poppins } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-oxanium'
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
}); 

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${oxanium.variable} font-oxanium`}
      >
        {/* Radial gradient background */}
        <div className=" top-0 left-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] fixed"></div>
        
        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
