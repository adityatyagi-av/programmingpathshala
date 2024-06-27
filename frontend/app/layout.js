import { Inter } from "next/font/google";
import {ThemeProvider} from "next-themes"
import "./globals.css";
import Navbar from "@/components/layoutComponents/Navbar";
import Footer from "@/components/layoutComponents/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Programming Pathshala",
  description: "Programming Pathshala is a leading edtech company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} `}>
      <ThemeProvider attribute="class" defaultTheme="dark" >
        <Navbar/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
      
    </html>
  );
}
