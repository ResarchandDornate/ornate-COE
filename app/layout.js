import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "B.K. Bhattacharyya Centre of Excellence | Ornate Solar",
  description:
    "Centre of Excellence in Power Electronics & Clean Energy Systems at Ornate Solar — indigenous design, innovation and excellence. Inverters, solar pump controllers and clean energy systems engineered in India.",
  keywords: [
    "Power Electronics",
    "Centre of Excellence",
    "Ornate Solar",
    "Solar Inverter",
    "Clean Energy",
    "Indigenous R&D",
    "B.K. Bhattacharyya",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white font-sans text-navy-800">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
