import localFont from "next/font/local";
import "./globals.css";
import NavWrapper from "./Shared/NavWrapper";
import { Kanit, Open_Sans, Poppins } from "next/font/google";
import FooterWrapper from "./Shared/FooterWrapper";
import Loader from "./loader";
const fontName = Kanit({ subsets: ["latin"], weight: "400" });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "HijiBusy",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body
        data-theme="light"
        className={`${fontName.className} antialiased my-2`}
      >
        <NavWrapper /> <Loader> {children} </Loader> <FooterWrapper />
      </body>
    </html>
  );
}
