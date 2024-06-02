import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ProDo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-light dark:bg-[#000213] dark:text-light-50 overflow-x-hidden text-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
