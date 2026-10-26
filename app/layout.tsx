import type { Metadata } from "next";
import "../styles/globals.css";
import { JsonLd } from "@/components/shared/json-ld";

export const metadata: Metadata = {
  title: "SV Technologies — Building for the World.",
  description:
    "SV Technologies is a software company based in Dillibazar, Kathmandu. We design and build websites, mobile apps, POS systems, e-commerce stores, and custom software.",
  keywords: [
    "SV Technologies",
    "SV Technologies Nepal",
    "Web Development Dillibazar",
    "Mobile Apps Nepal",
    "POS Systems Nepal",
    "Software Company Kathmandu",
    "Invoice Studio",
  ],
  authors: [{ name: "SV Technologies Pvt. Ltd." }],
  creator: "SV Technologies Pvt. Ltd.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  metadataBase: new URL("https://svtechnologies.com.np"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://svtechnologies.com.np",
    title: "SV Technologies — Building for the World.",
    description:
      "SV Technologies is a software company based in Dillibazar, Kathmandu. We design and build websites, mobile apps, POS systems, and custom software.",
    siteName: "SV Technologies Pvt. Ltd.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SV Technologies — Building for the World.",
    description: "Software Company in Dillibazar, Kathmandu.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="font-sans bg-[#f4f1ea] text-[#131311] antialiased selection:bg-[#0943c2] selection:text-white">
        {children}
      </body>
    </html>
  );
}
