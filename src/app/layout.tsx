import type { Metadata } from "next";
import '@fontsource/anuphan';
import "./globals.css";


export const metadata: Metadata = {
  title: "1Y Anniversary",
  description: "1 Year Anniversary",
  openGraph: {
    images: [
      {
        url: "/Screenshot.png",
        width: 1200,
        height: 630,
        alt: "1Y Anniversary Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
