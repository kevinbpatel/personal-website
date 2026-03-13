import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";

export const baseURL = "https://kevinbpatel.com";

export const routes: Record<string, boolean> = {
  "/": true,
  "/about": false,
  "/work": true,
  "/gallery": true,
};

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const fonts = {
  sora,
  dmSans,
  jetbrainsMono,
};
