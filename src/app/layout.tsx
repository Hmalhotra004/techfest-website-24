import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./modern.css";
import "./utils.scss";

export const open = Open_Sans({
  subsets: ["latin"],
});

export const mons = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NMTechFest'24",
  description: "TechFest of NM College",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mons.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
