import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./modern.css";
import "./utils.scss";
import NavBar from "@/Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <NavBar />
        {children}
        </body>
    </html>
  );
}
