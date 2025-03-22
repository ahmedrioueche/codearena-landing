import { useTranslator } from "@/langs";
import { Rocket } from "lucide-react";
import React from "react";

const CTASection = () => {
  const translator = useTranslator();

  return (
    <section className="text-foreground py-20 relative overflow-hidden z-10 mt-12">
      {/* Light Beam Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 60%)",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Heading with Glow Effect */}
        <h2 className="text-4xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-glow">
          {translator("cta_title")}
        </h2>

        {/* Subheading */}
        <p className="text-text-primary mb-8">{translator("cta_subtitle")}</p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {/* Get Started Button */}
          <button className="relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden bg-gradient-to-r from-accentPrimary to-accentSecondary group w-full sm:w-auto">
            {/* Shiny Border Effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accentPrimary to-accentSecondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative px-6 sm:px-8 md:py-2 py-4 rounded-full bg-background transition-all duration-300 ease-out group-hover:bg-transparent text-sm font-medium text-foreground group-hover:text-white w-full h-full flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              {translator("get_started_for_free")}
            </span>
          </button>

          {/* Watch Video Button */}
          <button className="bg-background text-text-primary border border-text-primary px-6 sm:px-10 py-2 sm:py-4 rounded-full hover:bg-foreground hover:text-background transition-colors duration-300 text-sm font-medium flex items-center justify-center gap-2 w-full sm:w-auto relative overflow-hidden">
            {/* Shiny Border Effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accentPrimary to-accentSecondary opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="text-2xl">▶</span>
              {translator("watch_video")}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
