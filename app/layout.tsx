import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/providers/provider";

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
      <ReduxProvider>
        <body className="bg-gray-900 text-gray-100">{children}</body>
      </ReduxProvider>
    </html>
  );
}
