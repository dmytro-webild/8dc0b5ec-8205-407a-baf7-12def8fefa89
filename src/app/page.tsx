"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import { Instagram, Briefcase, Zap, CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="solid"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Services", id: "services" },
        { name: "Process", id: "process" },
        { name: "Portfolio", id: "portfolio" },
        { name: "Pricing", id: "pricing" },
      ]}
      button={{ text: "Let's Chat", href: "#contact" }}
      brandName="Marcos Digital Studio"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{ variant: "plain" }}
      title="Modern Websites. Built Fast. Designed to Convert."
      description="I design and rebuild websites for businesses that want a clean, professional online presence — fast, simple, and stress-free."
      avatars={[
        { src: "https://img.b2bpic.net/free-photo/success-cooperation-people-hands-discussion-business_1418-65.jpg?id=1235725", alt: "User" }
      ]}
      avatarText="Trusted by growing brands"
      buttons={[
        { text: "Get a Website", href: "#contact" },
        { text: "View Work", href: "#portfolio" }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      title="About Marcos"
      tag="My Philosophy"
      useInvertedBackground={false}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="split-description"
      useInvertedBackground={true}
      title="Services"
      description="Premium web design solutions built for your business growth."
      features={[
        { tag: "Design", title: "Website Design", subtitle: "Custom Build", description: "Modern, responsive websites built from scratch.", imageSrc: "http://img.b2bpic.net/free-photo/bucharest-romania-july-30th-2024-corporate-leader-reading-daily-news-online_482257-116998.jpg" },
        { tag: "Transform", title: "Website Redesign", subtitle: "Transformation", description: "Transform outdated websites into high-converting sites.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-nutritional-counter-app_23-2149880598.jpg" },
        { tag: "Growth", title: "SEO Optimization", subtitle: "Strategy", description: "Improve visibility and help customers find you.", imageSrc: "http://img.b2bpic.net/free-vector/gradient-ui-ux-elements_23-2149061049.jpg" },
      ]}
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardEleven
      animationType="slide-up"
      title="Simple 3-Step Process"
      description="How I get your project from vision to launch."
      textboxLayout="split-description"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "01", title: "Discovery", description: "Contact me with your project goals.", imageSrc: "http://img.b2bpic.net/free-photo/mid-section-unrecognizable-man-taking-picture-work-plan-phone_1098-18712.jpg" },
        { id: "m2", value: "02", title: "Design", description: "I design a conversion-focused website.", imageSrc: "http://img.b2bpic.net/free-vector/flat-design-coworking-app-template_23-2150249509.jpg" },
        { id: "m3", value: "03", title: "Launch", description: "Launch your new digital home.", imageSrc: "http://img.b2bpic.net/free-vector/modern-infographic-element-collection_52683-1776.jpg" },
      ]}
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardOne
      animationType="slide-up"
      gridVariant="three-columns-all-equal-width"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Portfolio"
      description="Showcasing high-quality concept builds."
      products={[
        { id: "p1", name: "Tech Startup Site", price: "Concept", imageSrc: "https://img.b2bpic.net/premium-photo/digital-technology-global-internet-network-ai-artificial-intelligence-big-data-concept-computer-programmer-software-engineer-coding-laptop-global-network-cyber-security_928174-8320.jpg?id=382220369" },
        { id: "p2", name: "Local Gym Site", price: "Concept", imageSrc: "https://img.b2bpic.net/free-photo/unrecognizable-athletic-woman-tying-sports-shoe-health-club_637285-8468.jpg?id=26402468" },
        { id: "p3", name: "Real Estate UI", price: "Concept", imageSrc: "https://img.b2bpic.net/free-photo/modern-real-estate-website-interface_23-2149806451.jpg" },
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      title="Simple Pricing"
      description="Transparent, one-time payment options."
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        { id: "starter", tag: "Standard", price: "$500", period: "one-time", description: "Basic site for small brands.", button: { text: "Select Plan" }, featuresTitle: "Core Features", features: ["One-page site", "Mobile responsive", "Fast delivery"] },
        { id: "business", tag: "Advanced", price: "$800", period: "one-time", description: "Full site for growth.", button: { text: "Select Plan" }, featuresTitle: "Core Features", features: ["Multi-page site", "SEO setup", "Conversion optimized"] },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
        tag="Get in Touch"
        title="Let’s Build Your Website"
        description="Ready to start? I am accepting new projects."
        background={{ variant: "plain" }}
        useInvertedBackground={true}
        onSubmit={(email) => console.log(email)}
      />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Services", items: [{ label: "Design" }, { label: "SEO" }] },
        { title: "Legal", items: [{ label: "Privacy" }, { label: "Terms" }] },
      ]}
      bottomLeftText="© 2025 Marcos Digital Studio"
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
