"use client";
import { lazy, Suspense, useState } from "react";
import { motion, Variants } from "framer-motion";
import ModeCard from "./ModeCard";
import BattleModeSetupModal from "./gameSetup/BattleSetupModal";
import CollabModeSetupModal from "./gameSetup/CollabSetupModal";
import { GameMode } from "@/types/game/game";
import { modes } from "@/constants/modes";

const SoloMatchSetupModal = lazy(() => import("./gameSetup/SoloSetupModal"));

// Animation variants for the cards
const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50, // Start slightly below the final position
  },
  onscreen: {
    opacity: 1,
    y: 0, // Move to the final position
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ModesContainer = () => {
  const [isSetupModalOpen, setIsSetupModalOpen] = useState<"null" | GameMode>(
    "null"
  );

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col gap-6 w-full z-0">
        {modes.map((mode, index) => (
          <motion.div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } w-full`}
            initial="offscreen" // Initial animation state
            whileInView="onscreen" // Animation when in view
            viewport={{ once: true, amount: 0.5 }} // Trigger animation once
            variants={cardVariants} // Animation variants
          >
            <div className="w-full md:w-3/4 lg:w-2/3">
              <ModeCard
                {...mode}
                isHorizontal={true}
                onStartGame={(mode) => setIsSetupModalOpen(mode)}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <Suspense fallback={null}>
        <SoloMatchSetupModal
          isOpen={isSetupModalOpen === "solo"}
          onClose={() => setIsSetupModalOpen("null")}
        />
      </Suspense>
      <Suspense fallback={null}>
        <BattleModeSetupModal
          isOpen={isSetupModalOpen === "battle"}
          onClose={() => setIsSetupModalOpen("null")}
        />
      </Suspense>
      <Suspense fallback={null}>
        <CollabModeSetupModal
          isOpen={isSetupModalOpen === "collab"}
          onClose={() => setIsSetupModalOpen("null")}
        />
      </Suspense>
    </div>
  );
};

export default ModesContainer;
