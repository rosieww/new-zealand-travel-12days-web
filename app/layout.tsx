import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "向南，去紐西蘭｜肉c 的南島 12 天旅記",
  description: "2025 冬季南島自駕 12 天：每日行程、住宿心得與真實花費。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="antialiased">{children}</body>
    </html>
  );
}
