import { Geist, Geist_Mono } from "next/font/google";
import Provider from "../lib/redux/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Product Gallery",
  description: "Show and place order of those products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Provider>
          <Header/>
          {children}
          <Footer/>
        </Provider>        
      </body>
    </html>
  );
}
