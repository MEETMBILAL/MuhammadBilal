"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Capabilities", href: "#capabilities", index: "01" },
    { label: "Work", href: "#work", index: "02" },
    { label: "Process", href: "#process", index: "03" },
    { label: "Experience", href: "#experience", index: "04" },
    { label: "FAQ & Discovery", href: "#faq", index: "05" },
    { label: "Contact", href: "#contact", index: "06" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-base/90 backdrop-blur-md hairline-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-4 sm:px-6 lg:px-8">
        {/* Identity & Status */}
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="font-mono text-xs tracking-wider uppercase text-type-primary hover:text-accent-zinc transition-colors"
          >
            M. BILAL <span className="text-type-tertiary hidden sm:inline">// FULL STACK</span>
          </Link>

          <div className="hidden md:flex items-center space-x-2 pl-4 hairline-l">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-clay animate-pulse" />
            <span className="font-mono text-[10px] tracking-wider uppercase text-type-secondary">
              Available for Remote Projects
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-mono">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => trackEvent("nav_click", { section_name: item.label })}
              className="text-type-secondary hover:text-type-primary transition-colors py-1 flex items-center space-x-1"
            >
              <span className="text-type-tertiary text-[10px]">{item.index}</span>
              <span>{item.label}</span>
            </a>
          ))}

          <a
            href="https://linkedin.com/in/meetmbilal"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("linkedin_click", { location: "navigation" })}
            className="text-type-secondary hover:text-type-primary transition-colors flex items-center space-x-0.5 py-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-type-tertiary" />
          </a>

          <a
            href="#contact"
            onClick={() => trackEvent("nav_click", { section_name: "Initiate Contact Button" })}
            className="ml-2 px-3 py-1.5 bg-surface-elevated hairline-all text-type-primary text-xs font-mono tracking-wide hover:bg-type-primary hover:text-surface-base transition-all duration-150"
          >
            Initiate Contact
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center space-x-3">
          <a
            href="#contact"
            className="px-2.5 py-1 bg-surface-elevated hairline-all text-type-primary text-[11px] font-mono"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-type-secondary hover:text-type-primary"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden hairline-t bg-surface-base px-4 py-6 space-y-4 font-mono text-sm">
          <div className="flex items-center space-x-2 pb-3 hairline-b">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
            <span className="text-xs uppercase text-type-secondary">
              Available for Remote Projects
            </span>
          </div>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-type-secondary hover:text-type-primary hairline-b"
            >
              <span>{item.label}</span>
              <span className="text-type-tertiary text-xs">{item.index}</span>
            </a>
          ))}
          <a
            href="https://linkedin.com/in/meetmbilal"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-2 text-type-secondary hover:text-type-primary hairline-b"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}