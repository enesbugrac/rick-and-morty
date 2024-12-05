import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Bakici Bul Task",
  description: "Bakici Bul Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>Rick and Morty Character List</title>
    </head>
    <body className="bg-gray-900 text-gray-100">{children}</body>
  </html>
  );
}
