import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { CeoProfile } from "@/components/site/ceo-profile";
import { Services } from "@/components/site/services";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { SkillsTimeline } from "@/components/site/skills-timeline";
import { Projects } from "@/components/site/projects";
import { Gallery } from "@/components/site/gallery";
import { VideoShowcase } from "@/components/site/video-showcase";
import { Certifications } from "@/components/site/certifications";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Honourableak Venture (HAKV) — Premium Aluminum Fabrication & Glass Installation in Nigeria",
      },
      {
        name: "description",
        content:
          "Nigeria's trusted specialists in aluminum windows, doors, curtain wall systems, frameless glass, office partitioning and custom fabrication. 16+ years delivering premium projects.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Honourableak Venture — Premium Aluminum & Glass Solutions in Nigeria",
      },
      {
        property: "og:description",
        content:
          "Premium aluminum fabrication and architectural glass installation across Nigeria. Residential, commercial and industrial projects delivered end-to-end.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Honourableak Venture — Premium Aluminum & Glass Solutions",
      },
      {
        name: "twitter:description",
        content:
          "Aluminum windows, curtain walls, frameless glass, office partitioning — engineered and installed to a premium standard across Nigeria.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Honourableak Venture",
          alternateName: "HAKV",
          description:
            "Premium aluminum fabrication and architectural glass installation company serving residential, commercial and industrial projects across Nigeria.",
          founder: { "@type": "Person", name: "Sanusi Hakeem Segun" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "No. 60 Oladun Street, Powerline Bus Stop",
            addressLocality: "Isheri",
            addressCountry: "NG",
          },
          telephone: ["+2348141263424", "+2348144064827"],
          email: "SanusiHakeem48@gmail.com",
          areaServed: "Nigeria",
          knowsAbout: [
            "Aluminum Fabrication",
            "Curtain Wall Systems",
            "Frameless Glass Installation",
            "Office Partitioning",
            "Aluminum Windows",
            "Aluminum Doors",
            "Shower Glass",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <CeoProfile />
      <Services />
      <WhyChooseUs />
      <SkillsTimeline />
      <Projects />
      <Gallery />
      <VideoShowcase />
      <Certifications />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
