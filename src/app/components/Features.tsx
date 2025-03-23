"use client";
import React, { ReactElement } from "react";
import { motion, Variants } from "framer-motion"; // Import Framer Motion
import { Brain, Trophy, Rocket } from "lucide-react";

interface FeatureCardProps {
  icon: ReactElement; // Expects a rendered React element (e.g., <Brain />)
  title: string;
  description: string;
  variants: Variants; // Add variants prop for animations
  custom: number; // Add custom prop for animation delay
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  variants,
  custom,
}) => {
  return (
    <motion.div
      className="relative transition-all duration-300 transform group"
      variants={variants} // Apply animation variants
      initial="offscreen" // Initial animation state
      whileInView="onscreen" // Animation when in view
      viewport={{ once: true, amount: 0.5 }} // Trigger animation once
      custom={custom} // Pass custom delay
    >
      {/* Animated border gradient - dimmed down */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500/40 to-purple-600/40 rounded-lg blur opacity-0 group-hover:opacity-70 transition-all duration-300 animate-gradient-xy`}
      />

      <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg border border-gray-800 backdrop-blur-sm transition-all duration-300 relative z-10 h-full group-hover:bg-gray-900 group-hover:bg-opacity-50">
        <div
          className="mb-4 text-blue-300 transition-all duration-300 transform group-hover:scale-105 group-hover:text-blue-200"
          style={{
            transformOrigin: "left",
          }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-medium text-blue-100 mb-2 transition-all duration-300 group-hover:translate-x-0.5">
          {title}
        </h3>
        <p className="text-blue-200 opacity-80 transition-all duration-300 group-hover:text-blue-100 group-hover:opacity-90">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain size={36} />,
      title: "AI-Powered Guidance",
      description:
        "Get personalized help from our intelligent AI that adapts to your coding style and learning pace.",
    },
    {
      icon: <Trophy size={36} />,
      title: "Competitive Challenges",
      description:
        "Test your skills against others in timed competitions with real-world programming problems.",
    },
    {
      icon: <Rocket size={36} />,
      title: "Learning Pathways",
      description:
        "Follow structured paths from beginner to expert in your chosen programming languages and domains.",
    },
  ];

  // Updated cardVariants with fade-in and scale-up animation
  const cardVariants: Variants[] = [
    {
      offscreen: {
        opacity: 0,
        scale: 0.9,
      },
      onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: 0.2,
        },
      },
    },
    {
      offscreen: {
        opacity: 0,
        scale: 0.9,
      },
      onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: 0.4,
        },
      },
    },
    {
      offscreen: {
        opacity: 0,
        scale: 0.9,
      },
      onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: 0.6,
        },
      },
    },
  ];

  return (
    <div className="py-12 relative z-10 mt-10" id="features">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
          Level Up Your Skills
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            {...feature}
            variants={cardVariants[i]} // Pass unique variants for each card
            custom={i} // Pass custom delay
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
