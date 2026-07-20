import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fluent English Digital Academy",
  description:
    "Learn Spoken English, IELTS, Writing Skills and Professional Communication with Ms. Misbah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
