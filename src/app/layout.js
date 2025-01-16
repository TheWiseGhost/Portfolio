import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-gs",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-gm",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aditya Byju",
  description: "Everything about Aditya Byju",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
