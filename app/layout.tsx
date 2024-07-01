import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "LoreLoom - An AI Story teller.",
  description: " An AI story generating website that uses prompts to generate stories and its related images, illustrations and contents .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" flex flex-col min-h-screen" >
        <Header/>
        
        {children}</body>
    </html>
  );
}
