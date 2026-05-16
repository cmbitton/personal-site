import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const googleAnalyticsId = "G-RDCEX3BX11";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Curtis Bitton Web Design | Fast Modern Websites for Small Businesses",
    template: "%s | Curtis Bitton Web Design"
  },
  description:
    "Custom-coded websites for small businesses, local professionals, and service providers. Built fast, modern, SEO-ready, and handled end to end.",
  applicationName: siteName,
  authors: [{ name: "Curtis Bitton" }],
  creator: "Curtis Bitton",
  publisher: siteName,
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
    title: siteName,
    description:
      "Fast, modern, custom-coded websites for small businesses that need to look professional and turn visitors into calls, bookings, and leads.",
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Curtis Bitton Web Design"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Fast, modern, custom-coded websites for small businesses and local professionals.",
    images: ["/opengraph-image"]
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
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
