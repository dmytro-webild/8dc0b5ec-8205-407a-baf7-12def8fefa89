"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SplitAbout from '@/components/sections/about/SplitAbout';
import { Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Services",          id: "services"},
        {
          name: "Process",          id: "process"},
        {
          name: "Portfolio",          id: "portfolio"},
        {
          name: "Pricing",          id: "pricing"},
      ]}
      button={{
        text: "Contact",        href: "#contact"}}
      brandName="Marcos Digital Studio"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "sparkles-gradient"}}
      title="Modern Websites. Built Fast. Designed to Convert."
      description="I design and rebuild websites for businesses that want a clean, professional online presence — fast, simple, and stress-free."
      buttons={[
        { 
           text: "Get a Website", 
           href: "#contact", 
           onClick: () => {
             const el = document.getElementById('contact');
             el?.scrollIntoView({ behavior: 'smooth' });
           }
        },
        { 
           text: "View Work", 
           href: "#portfolio",           onClick: () => {
             const el = document.getElementById('portfolio');
             el?.scrollIntoView({ behavior: 'smooth' });
           }
        },
      ]}
      imageSrc="https://img.b2bpic.net/free-photo/success-cooperation-people-hands-discussion-business_1418-65.jpg?id=1235725"
      imageClassName="hover:scale-105 transition-all duration-1000 ease-in-out transform scale-100 hover:rotate-2"
      buttonClassName="hover:scale-110 transition-transform duration-300 ease-in-out"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="About Marcos"
      description="I’m a freelance web designer focused on building clean, modern websites for businesses that need a stronger online presence. My approach is simple: fast communication, clean design, and results-focused work. I keep everything straightforward — no complicated agency process, no delays, just high-quality websites delivered quickly."
      bulletPoints={[
        {
          title: "Fast Communication",          description: "Responsive and quick answers."},
        {
          title: "Modern Designs",          description: "High-converting, clean interfaces."},
        {
          title: "Simple Process",          description: "No stress, just delivery."},
      ]}
      imageSrc="https://img.b2bpic.net/free-photo/close-up-glowing-computer-screen_23-2148700057.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",          title: "Website Design",          author: "Custom Build",          description: "Modern, responsive websites built from scratch.",          tags: [
            "New Business",            "High Tech"],
          imageSrc: "http://img.b2bpic.net/free-photo/bucharest-romania-july-30th-2024-corporate-leader-reading-daily-news-online_482257-116998.jpg"},
        {
          id: "f2",          title: "Website Redesign",          author: "Transformation",          description: "Transform outdated websites into high-converting sites.",          tags: [
            "Redesign",            "Conversion"],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-nutritional-counter-app_23-2149880598.jpg"},
        {
          id: "f3",          title: "SEO Optimization",          author: "Growth",          description: "Improve visibility and help customers find you.",          tags: [
            "Visibility",            "SEO"],
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-ui-ux-elements_23-2149061049.jpg"},
      ]}
      title="Services"
      description="Premium web design solutions built for your business growth."
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Simple 3-Step Process"
      tag="How I Work"
      metrics={[
        {
          id: "m1",          value: "01",          description: "Contact me with your project goals."},
        {
          id: "m2",          value: "02",          description: "I design a conversion-focused website."},
        {
          id: "m3",          value: "03",          description: "Launch your new digital home."},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="why-me" data-section="why-me">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "w1",          title: "Fast Turnaround",          author: "Efficiency",          description: "Fast delivery, no stress.",          tags: [
            "Speed",            "Quick"],
          imageSrc: "http://img.b2bpic.net/free-photo/mid-section-unrecognizable-man-taking-picture-work-plan-phone_1098-18712.jpg"},
        {
          id: "w2",          title: "Premium Design",          author: "Aesthetics",          description: "Looks professional and modern.",          tags: [
            "Design",            "High End"],
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-coworking-app-template_23-2150249509.jpg"},
        {
          id: "w3",          title: "Simple Pricing",          author: "Transparency",          description: "One-time payment, no contracts.",          tags: [
            "Pricing",            "Clear"],
          imageSrc: "http://img.b2bpic.net/free-vector/modern-infographic-element-collection_52683-1776.jpg"},
      ]}
      title="Why Work With Me?"
      description="You get a website that looks like a premium agency build — without the agency price."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Tech Startup Site",          price: "Concept",          variant: "Minimal",          imageSrc: "https://img.b2bpic.net/free-photo/ui-ux-design-template-website-development_23-2149592476.jpg"},
        {
          id: "p2",          name: "Local Gym Site",          price: "Concept",          variant: "Modern",          imageSrc: "https://img.b2bpic.net/free-photo/fitness-app-website-ui-design_23-2149633974.jpg"},
        {
          id: "p3",          name: "Real Estate UI",          price: "Concept",          variant: "Clean",          imageSrc: "https://img.b2bpic.net/free-photo/modern-real-estate-website-interface_23-2149806451.jpg"},
        {
          id: "p4",          name: "Creative Studio",          price: "Concept",          variant: "Futuristic",          imageSrc: "https://img.b2bpic.net/free-photo/creative-studio-portfolio-web-layout_23-2149863489.jpg"},
        {
          id: "p5",          name: "Restaurant Concept",          price: "Concept",          variant: "Modern",          imageSrc: "https://img.b2bpic.net/free-photo/restaurant-website-interface-design_23-2149725983.jpg"},
        {
          id: "p6",          name: "SaaS Platform",          price: "Concept",          variant: "Dark",          imageSrc: "https://img.b2bpic.net/free-photo/saas-dashboard-ui-design_23-2149889502.jpg"},
      ]}
      title="Portfolio"
      description="Showcasing high-quality concept builds."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "starter",          name: "Starter",          price: "Starter $500",          buttons: [
            {
              text: "Contact",              href: "#contact"},
          ],
          features: [
            "One-page site",            "Fast delivery",            "Responsive design"],
        },
        {
          id: "business",          name: "Business",          price: " Basic $800",          buttons: [
            {
              text: "Contact",              href: "#contact"},
          ],
          features: [
            "Multi-page site",            "SEO setup",            "Optimized layout"],
        },
        {
          id: "premium",          name: "Premium",          price: "Premium $1,200",          buttons: [
            {
              text: "Contact",              href: "#contact"},
          ],
          features: [
            "Advanced design",            "Full branding",            "Custom animations"],
        },
      ]}
      title="Simple Pricing"
      description="One-time payment options available. No confusing contracts."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Let’s Build Your Website"
      description="If you need a modern, clean, and professional website, I can build it fast."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Describe your project...",        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/minimalist-spacious-interior-design_23-2150378904.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Digital Excellence"
      copyrightText="© 2025 | Marcos Digital Studio"
      socialLinks={[
        {
          icon: Instagram,
          href: "https://instagram.com/marcoswebdesigns",          ariaLabel: "Instagram"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
