// components/TrustedByCTA.tsx
import React from "react";
import { Rocket } from "lucide-react";
import { useTranslator } from "@/langs";

const TrustedByCTA = () => {
  const translator = useTranslator();

  const companies = [
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
  ];

  return (
    <section className="relative overflow-hidden z-10">
      {/* Localized Lighting Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 40%)",
        }}
      ></div>

      {/* TrustedBy Section */}
      <div className="py-4 relative z-10">
        <div className="container flex flex-col items-center mx-auto px-4">
          <h2 className="text-3xl mb-8 font-bold text-foreground animate-glow">
            Trusted by Many Businesses
          </h2>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companies.map((company, index) => (
              <CompanyCard key={index} logo={company.logo} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-foreground py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          {/* Heading with Glow Effect */}
          <h2 className="text-3xl mb-8 font-bold text-foreground animate-glow">
            {translator("cta_title")}
          </h2>

          {/* Subheading */}
          <p className="text-text-primary mb-8">{translator("cta_subtitle")}</p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {/* Get Started Button */}
            <button className="relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden bg-gradient-to-r from-accentPrimary to-accentSecondary group w-full sm:w-auto">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accentPrimary to-accentSecondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative px-6 sm:px-8 md:py-2 py-4 rounded-full bg-background transition-all duration-300 ease-out group-hover:bg-transparent text-sm font-medium text-foreground group-hover:text-white w-full h-full flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5" />
                {translator("get_started_for_free")}
              </span>
            </button>

            {/* Watch Video Button */}
            <button className="bg-background text-text-primary border border-text-primary px-6 sm:px-10 py-2 sm:py-4 rounded-full hover:bg-foreground hover:text-background transition-colors duration-300 text-sm font-medium flex items-center justify-center gap-2 w-full sm:w-auto relative overflow-hidden">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accentPrimary to-accentSecondary opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">▶</span>
                {translator("watch_video")}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByCTA;

// CompanyCard Component
interface CompanyCardProps {
  logo: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ logo }) => {
  return (
    <div className="rounded-lg p-4 bg-black shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out border border-secondary/10 w-36 h-20 flex items-center justify-center">
      <div className="flex items-center justify-center">
        <img
          src={logo}
          className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          alt="Company Logo"
        />
      </div>
    </div>
  );
};
