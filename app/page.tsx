import LandingPage from "@/components/landing-page";
import { contactEmail, siteName, siteUrl } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/headshot.jpg`,
  email: contactEmail,
  description:
    "Custom-coded websites, landing pages, technical SEO setup, hosting support, analytics setup, and ongoing maintenance for small businesses and local professionals.",
  founder: {
    "@type": "Person",
    name: "Curtis Bitton",
    jobTitle: "Software Engineer and Freelance Web Designer",
    image: `${siteUrl}/headshot.jpg`
  },
  areaServed: ["Rhode Island", "New England", "United States"],
  serviceType: [
    "Small business web design",
    "Landing page design and development",
    "Website redesigns",
    "Technical SEO setup",
    "Google Analytics setup",
    "Google Search Console setup",
    "Hosting and domain setup",
    "Custom web app development"
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "Python",
    "Technical SEO",
    "Performance optimization",
    "PostgreSQL",
    "Automation",
    "ETL"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
