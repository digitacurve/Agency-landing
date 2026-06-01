import React from "react";

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digitacurve",
    "image": "https://www.digitacurve.com/images/google-ads-melbourne-og.png",
    "@id": "https://www.digitacurve.com/google-ads-melbourne#localbusiness",
    "url": "https://www.digitacurve.com/google-ads-melbourne",
    "telephone": "+917572094201",
    "email": "sale@digitacurve.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 62",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201309",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6273",
      "longitude": "77.3725"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Melbourne"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Victoria"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Australia"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/digitacurve/",
      "https://www.facebook.com/profile.php?id=61586495587348",
      "https://www.linkedin.com/in/rishabhjaisal0425/",
      "https://share.google/IszwEKC0pok3prxtr"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Google Ads Management Melbourne",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Digitacurve",
      "url": "https://www.digitacurve.com/google-ads-melbourne"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Melbourne"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Business Owners"
    },
    "description": "High-ROI, performance-focused Google Ads and AdWords management services custom-tailored for businesses in Melbourne looking to grow leads and eliminate ad waste."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who manages Google Ads campaigns in Melbourne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digitacurve is an expert team of Melbourne-focused Google Ads specialists who construct, manage, and optimize performance-based campaigns to yield real-world business growth, leads, and high returns on investment."
        }
      },
      {
        "@type": "Question",
        "name": "What does a Google Ads agency do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A specialized Google Ads agency like Digitacurve handles end-to-end management of paid search. This includes performing in-depth keyword research, writing compelling ad copy, configuring conversion tracking, managing bids, executing landing page optimizations (CRO), and preventing wasted budget."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Google Ads management cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Ads pricing models vary based on campaign scope and monthly spend. At Digitacurve, we keep it straightforward with custom management structures tailored specifically to your budget and zero lock-in contracts."
        }
      },
      {
        "@type": "Question",
        "name": "How do I improve ROI from Google Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Improving Google Ads ROI requires eliminating non-converting search queries (negative keywords), improving landing page experience for higher conversion rates, boosting Google Ads Quality Scores to lower your average CPC, and targeting high-intent commercial keyword clusters."
        }
      },
      {
        "@type": "Question",
        "name": "Should I hire a PPC agency in Melbourne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, hiring a professional Melbourne PPC agency ensures that your advertising budget is actively managed by specialists rather than left on 'set-and-forget' auto-pilot, saving you up to 40% in wasted clicks and exponentially boosting your qualified leads."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
