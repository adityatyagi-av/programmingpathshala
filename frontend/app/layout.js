import { Inter } from "next/font/google";
import {ThemeProvider} from "next-themes"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Programming Pathshala",
  description: "Programming Pathshala is a leading edtech company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="dark" >
        {children}
        </ThemeProvider>
        </body>
      
    </html>
  );
}
