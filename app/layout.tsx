import type { Metadata, Viewport } from "next";
import "./globals.css";

// TODO: Replace this with the final production domain before launch.
const siteUrl = "https://curtisbittonwebdesign.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Curtis Bitton Web Design | Fast Modern Websites for Small Businesses",
    template: "%s | Curtis Bitton Web Design"
  },
  description:
    "Premium custom-coded websites for small businesses, local professionals, and service providers. Built fast, modern, SEO-ready, and handled end to end.",
  applicationName: "Curtis Bitton Web Design",
  authors: [{ name: "Curtis Bitton" }],
  creator: "Curtis Bitton",
  publisher: "Curtis Bitton Web Design",
  keywords: [
    "Rhode Island web designer",
    "small business web design",
    "freelance web designer",
    "custom coded websites",
    "technical SEO",
    "local business websites",
    "Next.js web design"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg"
  },
  openGraph: {
    title: "Curtis Bitton Web Design",
    description:
      "Fast, modern, custom-coded websites for small businesses that need to look professional and turn visitors into calls, bookings, and leads.",
    url: "/",
    siteName: "Curtis Bitton Web Design",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/headshot.jpg",
        width: 400,
        height: 400,
        alt: "Curtis Bitton"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Curtis Bitton Web Design",
    description:
      "Fast, modern, custom-coded websites for small businesses and local professionals.",
    images: ["/headshot.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#070806"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
