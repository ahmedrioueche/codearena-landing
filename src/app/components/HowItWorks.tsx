import React from "react";
import { Rocket, Settings, Play, Zap } from "lucide-react";

type StepCardProps = {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats?: {
    value: string;
    label: string;
  }[];
};

const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  icon,
  stats,
}) => {
  return (
    <div
      className="flex flex-col items-center p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-200 animate-float-cards z-20 w-full md:max-w-sm max-w-screen relative min-h-[260px]" // Changed md:max-w-xs to md:max-w-sm
      style={{
        background:
          "linear-gradient(135deg, #001122 0%, #001A2F 50%, #00253D 100%)",
      }}
    >
      {/* Step Number Circle */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accentPrimary to-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
        {step}
      </div>

      {/* Icon */}
      <div className="mt-6 mb-4 text-accentPrimary">{icon}</div>

      {/* Content */}
      <h2 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-glow">
        {title}
      </h2>
      <p className="text-sm font-light text-text-primary mb-6 text-center">
        {description}
      </p>

      {/* Stats Grid */}
      {stats && (
        <div className="grid grid-cols-2 gap-4 w-full mt-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-text-primary">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Quick Setup",
      description:
        "Get started in minutes with our streamlined onboarding process. No complex configurations needed.",
      icon: <Rocket size={40} className="animate-bounce" />,
      stats: [
        { value: "5 min", label: "Setup Time" },
        { value: "100%", label: "Success Rate" },
      ],
    },
    {
      step: 2,
      title: "Customize Your Space",
      description:
        "Personalize your dashboard and configure settings to match your workflow perfectly.",
      icon: <Settings size={40} className="animate-spin-slow" />,
      stats: [
        { value: "20+", label: "Features" },
        { value: "Endless", label: "Possibilities" },
      ],
    },
    {
      step: 3,
      title: "Start Your Journey",
      description:
        "Launch your project with confidence. Access all features and start achieving your goals.",
      icon: <Play size={40} className="animate-pulse" />,
      stats: [
        { value: "24/7", label: "Support" },
        { value: "100%", label: "Reliability" },
      ],
    },
    {
      step: 4,
      title: "Boost Productivity",
      description:
        "Leverage advanced tools and integrations to maximize your efficiency.",
      icon: <Zap size={40} className="animate-ping" />,
      stats: [
        { value: "2x", label: "Efficiency" },
        { value: "99%", label: "Satisfaction" },
      ],
    },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen py-20 relative overflow-hidden z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-glow">
            How It Works
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative mx-auto max-w-sm md:max-w-4xl">
          {" "}
          {/* Adjusted md:gap-16 to md:gap-12 and md:max-w-none to md:max-w-4xl */}
          {/* Connector Lines for Desktop */}
          <div className="absolute hidden md:block w-full h-full top-0 left-0 pointer-events-none z-0">
            {/* Line from Card 1 to Card 2 */}
            <div className="absolute top-[25%] left-[25%] w-[50%] h-1 bg-gradient-to-r from-accentPrimary to-accentSecondary animate-line-grow" />

            {/* Line from Card 2 to Card 4 */}
            <div className="absolute top-[25%] left-[75%] w-1 h-[50%] bg-gradient-to-b from-accentPrimary to-accentSecondary animate-line-grow-vertical" />

            {/* Line from Card 4 to Card 3 */}
            <div className="absolute top-[75%] left-[25%] w-[50%] h-1 bg-gradient-to-r from-accentPrimary to-accentSecondary animate-line-grow" />
          </div>
          {/* Cards */}
          <div className="md:order-1">
            <StepCard {...steps[0]} />
          </div>
          <div className="md:order-2 md:translate-y-12">
            <StepCard {...steps[1]} />
          </div>
          <div className="md:order-4 md:mt-20">
            <StepCard {...steps[2]} />
          </div>
          <div className="md:order-3 md:translate-y-12">
            <StepCard {...steps[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
