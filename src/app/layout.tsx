import * as React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOSProvider from "./components/AOSProvider";

export const metadata = {
  title: "BFS Computer Science Honor Society",
  description: "The BFS Computer Science Honor Society website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <AOSProvider>
          <Navbar />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
