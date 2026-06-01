import React from "react";
import SchemaMarkup from "@/components/SchemaMarkup";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import IntentClusters from "@/components/IntentClusters";
import ROICalculator from "@/components/ROICalculator";
import PainPoints from "@/components/PainPoints";
import AuditForm from "@/components/AuditForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Injects schema data blocks (LocalBusiness, Service, FAQPage) */}
      <SchemaMarkup />

      {/* Navigation Header */}
      <Navigation />

      <main className="flex-1 flex flex-col">
        {/* Hero Section containing "Google Ads Management Melbourne" H1 */}
        <Hero />

        {/* Metric Trust Strip */}
        <TrustStrip />

        {/* Search Intent Clusters: Management, Consultant, Agency */}
        <IntentClusters />

        {/* Interactive ROI Calculator */}
        <ROICalculator />

        {/* US vs THEM Comparison Pain points */}
        <PainPoints />

        {/* Conversion optimized Audit Intake Form */}
        <AuditForm />

        {/* AEO FAQ accordion panel */}
        <FAQSection />
      </main>

      {/* Physical Coordinates & Links Footer */}
      <Footer />

      {/* Floating WhatsApp Bubble */}
      <FloatingWhatsApp />
    </>
  );
}
