import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advertise with BritishTurks | UK Turkish Community Media Platform",
  description:
    "Promote your brand, event or business to the UK Turkish community through BritishTurks Instagram advertising packages.",
  openGraph: {
    title: "Advertise with BritishTurks",
    description:
      "Promote your brand, event or business to the UK Turkish community through BritishTurks Instagram advertising packages.",
    siteName: "BritishTurks",
    type: "website",
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertise with BritishTurks",
    description:
      "Promote your brand, event or business to the UK Turkish community through BritishTurks Instagram advertising packages."
  },
  metadataBase: new URL("https://britishturks.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
