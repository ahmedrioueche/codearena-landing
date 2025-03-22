"use client";
import { lazy, Suspense, useState } from "react";
import ModeCard from "./ModeCard";
import BattleModeSetupModal from "./gameSetup/BattleSetupModal";
import CollabModeSetupModal from "./gameSetup/CollabSetupModal";
import { GameMode } from "@/types/game/game";
import { modes } from "@/constants/modes";

const SoloMatchSetupModal = lazy(() => import("./gameSetup/SoloSetupModal"));

const ModesContainer = () => {
  const [isSetupModalOpen, setIsSetupModalOpen] = useState<"null" | GameMode>(
    "null"
  );

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col gap-6 w-full z-0">
        {modes.map((mode, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } w-full`}
          >
            <div className="w-full md:w-3/4 lg:w-2/3">
              <ModeCard
                {...mode}
                isHorizontal={true}
                onStartGame={(mode) => setIsSetupModalOpen(mode)}
              />
            </div>
          </div>
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
