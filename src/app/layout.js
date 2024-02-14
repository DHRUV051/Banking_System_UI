import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[rgb(18,18,18)] text-white font-lex">
          <Header />
          <div className="relative bg-[hsl(0,0%,7%)] px-[16px] py-[30px]  large:px-[50px] large:py-[80px] extraL:px-[50px] extraL:py-[80px] ">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
