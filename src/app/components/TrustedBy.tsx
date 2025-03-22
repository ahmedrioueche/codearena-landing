// components/TrustedBy.tsx
import React from "react";

const TrustedBy = () => {
  const companies = [
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
    { name: "Visa", logo: "/logos/visa.png" },
  ];

  return (
    <section className="py-4">
      <div className="container flex flex-col items-center mx-auto px-4">
        <h2 className="text-4xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-glow">
          Trusted by Many Businesses
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <CompanyCard key={index} logo={company.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

interface CompanyCardProps {
  logo: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ logo }) => {
  return (
    <div
      className="rounded-lg p-8 shadow-lg hover:shadow-2xl hover:border-accentPrimary transition-shadow duration-500 ease-in-out  border border-secondary/10  w-48"
      style={{
        background:
          "linear-gradient(135deg, #001122 0%, #001A2F 50%, #00253D 100%)",
      }}
    >
      <div className="flex items-center justify-center">
        <img
          src={logo}
          className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          alt="Company Logo"
        />
      </div>
    </div>
  );
};
