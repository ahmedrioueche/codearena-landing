import React from "react";

// Define the Plan type
type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  payAsYouGo?: boolean;
};

// Define the plans array
const plans: Plan[] = [
  {
    name: "Basic",
    price: "$200",
    description: "Plan description",
    features: ["Feature 01", "Feature 02", "Feature 03"],
  },
  {
    name: "Pro",
    price: "$200",
    description: "Plan description",
    features: ["Feature 01", "Feature 02", "Feature 03"],
  },
  {
    name: "Organization",
    price: "$200",
    description: "Plan description",
    features: ["Feature 01", "Feature 02", "Feature 03"],
    payAsYouGo: true,
  },
];

// PlanCard component
const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <div
      className="flex flex-col p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-200 animate-float-cards h-full"
      style={{
        background:
          "linear-gradient(135deg, #001122 0%, #001A2F 50%, #00253D 100%)",
      }}
    >
      {/* Top Section: Name and Description */}
      <div className="text-left">
        <button
          disabled
          className="text-xl bg-font-bold bg-gradient-to-r from-accentPrimary to-secondary px-4 py-1 rounded-xl text-foreground w-fit"
        >
          {plan.name}
        </button>
        <p className="text-md text-text-primary mt-4">{plan.description}</p>
      </div>

      {/* Middle Section: Price and Additional Description */}
      <div className="my-6 text-left">
        <div className="flex flex-row space-x-4">
          <p className="text-3xl font-bold text-secondary">{plan.price}</p>
          {plan.payAsYouGo && (
            <p className="text-base text-accentSecondary mt-2">Pay As You Go</p>
          )}
        </div>

        <p className="text-md text-text-primary mt-2">
          Perfect for {plan.name.toLowerCase()} users.
        </p>
      </div>

      {/* Bottom Section: Features, Button, and Footer Text */}
      <div className="flex flex-col flex-grow">
        {/* Features List */}
        <ul className="space-y-2 text-left">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-accentPrimary">✔</span>
              <span className="ml-2 text-text-primary">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Spacer to push button to the bottom */}
        <div className="flex-grow"></div>

        {/* Start Free Trial Button */}
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-accentPrimary to-secondary text-foreground rounded-lg hover:from-accentSecondary hover:to-accentPrimary hover:text-white hover:shadow-lg hover:scale-105 transition-transform transition-colors duration-300 w-full">
          Start free 14-day Trial
        </button>

        {/* No Credit Card Required Text */}
        <p className="text-sm text-text-primary mt-2 text-center">
          No credit card required
        </p>
      </div>
    </div>
  );
};

// PricingPlans component
const PricingPlans: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden z-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-glow">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
