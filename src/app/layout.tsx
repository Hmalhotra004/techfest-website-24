import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import type { Metadata } from "next";
import { Chelsea_Market, Inter, Poppins } from "next/font/google";
import "./modern.css";
import "./utils.scss";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--pop",
});

const chelsea = Chelsea_Market({
  subsets: ["latin"],
  weight: "400",
  variable: "--chelsea",
});

export const metadata: Metadata = {
  title: "NMTechFest'24",
  description: "TechFest of NM College",
};

const font = `${poppins.variable} ${chelsea.variable}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
