import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./modern.css";
import "./utils.scss";

export const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

// export const open = Open_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

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
      <body className={montserrat.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
