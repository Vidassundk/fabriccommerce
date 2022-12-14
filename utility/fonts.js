import localFont from "@next/font/local";
import { Comfortaa, Inter } from "@next/font/google";

export const coolvetica = localFont({
  src: "../fonts/coolvetica.rg-regular.otf",
  display: "swap",
});

export const comfortaa = Comfortaa({
  weight: "700",
  preload: true,
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  weight: ["700", "400"],
  preload: true,
  subsets: ["latin"],
  display: "swap",
});
