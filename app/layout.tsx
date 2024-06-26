import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConvexClientProvider from "./ConvexClientProvider";
import { Header } from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compare Estimated vs Actual Waste Collected",
  description: "Technical test for podfather",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ConvexClientProvider>
          <Header />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}