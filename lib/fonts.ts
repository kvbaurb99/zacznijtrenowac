import { Inter, Outfit } from "next/font/google";

// Główny font - Inter: bardzo czytelny, profesjonalny, idealny dla treści
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Font dla nagłówków - Outfit: nowoczesny, dynamiczny, sportowy charakter
export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const fontVariables = `${inter.variable} ${outfit.variable}`;
