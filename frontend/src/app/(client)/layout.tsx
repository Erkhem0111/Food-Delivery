"use client";

import { Toaster } from "sonner";
import { Header } from "./_components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Toaster position="top-center" />
    </div>
  );
}
