import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Google Ads Management Melbourne | Digitacurve PPC Agency",
  description: "Stop wasting ad spend. Digitacurve is Melbourne's leading Google Ads agency delivering high-ROI, lead-focused campaign management & expert PPC audits with no lock-in contracts. Claim your free campaign audit today!",
  keywords: [
    "google ads agency melbourne",
    "google ads management melbourne",
    "google ads consultant melbourne",
    "google ads expert melbourne",
    "adwords management melbourne",
    "adwords consultant melbourne",
    "ppc agency melbourne",
    "sem agency melbourne",
    "melbourne paid search experts",
    "reduce google ads wasted spend",
    "roi focused marketing agency"
  ],
  authors: [{ name: "Digitacurve Team" }],
  alternates: {
    canonical: "https://www.digitacurve.com/google-ads-melbourne",
  },
  openGraph: {
    title: "Google Ads Management Melbourne | Digitacurve PPC Experts",
    description: "Melbourne's premium, ROI-driven Google Ads agency. Custom strategies, live reporting, and zero locked contracts. Get a free AdWords campaign audit.",
    url: "https://www.digitacurve.com/google-ads-melbourne",
    siteName: "Digitacurve",
    images: [
      {
        url: "https://www.digitacurve.com/images/google-ads-melbourne-og.png",
        width: 1200,
        height: 630,
        alt: "Digitacurve Melbourne Google Ads Management Services",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Management Melbourne | Digitacurve",
    description: "Convert high-intent search traffic into paying leads. Work with Melbourne's expert Google Ads consultants. Free campaign audit included.",
    images: ["https://www.digitacurve.com/images/google-ads-melbourne-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${outfit.variable} ${inter.variable} h-full antialiased dark`}
    >


      <head>
        {/* Google Tag Manager - Script Injection */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5LKLDWTZ');
            `,
          }}
        />
      </head>

      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-orange-500 selection:text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LKLDWTZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
