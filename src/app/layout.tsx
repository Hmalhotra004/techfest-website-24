import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import type { Metadata } from "next";
import { Chelsea_Market, Inter, Montserrat, Open_Sans, Poppins } from "next/font/google";
import "./modern.css";
import "./utils.scss";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--pop",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--montserrat",
});

const open = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--open",
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

const fonts = `${poppins.variable} ${chelsea.variable} ${montserrat.variable} ${open.variable} ${inter.className}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
