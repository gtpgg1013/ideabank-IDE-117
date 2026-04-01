import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IdeaBank IDE-117",
  description: "Next.js bootstrap with service metadata and password gate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
