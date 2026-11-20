"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { ShieldCheck, Check, X } from "lucide-react";

export function ConsentAnalyticsProvider() {
  const [consentStatus, setConsentStatus] = useState<"pending" | "granted" | "declined">("pending");
  const [mounted, setMounted] = useState<boolean>(false);

  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-PLACEHOLDER";

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("dmbilal_analytics_consent");
    if (saved === "granted" || saved === "declined") {
      setConsentStatus(saved);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("dmbilal_analytics_consent", "granted");
    setConsentStatus("granted");

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("dmbilal_analytics_consent", "declined");
    setConsentStatus("declined");

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Google Analytics 4 Script (Loads gracefully only when configured) */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                'analytics_storage': '${consentStatus === "granted" ? "granted" : "denied"}',
                'ad_storage': 'denied'
              });
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `}
          </Script>
        </>
      )}

      {/* Lightweight, Non-Intrusive Privacy & Telemetry Notice */}
      {consentStatus === "pending" && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-4 bg-surface-deep hairline-all shadow-2xl font-mono text-xs text-type-secondary space-y-3">
          <div className="flex items-center space-x-2 text-type-primary font-bold">
            <ShieldCheck className="w-4 h-4 text-accent-clay" />
            <span>PRIVACY & CONVERSION TELEMETRY</span>
          </div>
          <p className="text-[11px] font-sans leading-relaxed text-type-tertiary">
            This portfolio measures section navigation, service interests, and project brief interactions using privacy-conscious telemetry. No personal identification data or third-party ad trackers are used.
          </p>
          <div className="flex items-center justify-end space-x-2 pt-1">
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 bg-surface-base hairline-all text-type-secondary hover:text-type-primary text-[10px] uppercase transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 bg-type-primary text-surface-base hairline-all font-semibold text-[10px] uppercase hover:bg-accent-zinc transition-colors"
            >
              Accept Telemetry
            </button>
          </div>
        </div>
      )}
    </>
  );
}