import { GameMode } from "@/types/game/game";
import { Award, Clock, Zap } from "lucide-react";

export const getModeBackground = (mode: GameMode) => {
  switch (mode) {
    case "solo":
      return "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20";
    case "battle":
      return "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20";
    case "collab":
      return "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20";
    case "save-the-code":
      return "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20";
    default:
      return "bg-light-background/90 dark:bg-dark-background/90";
  }
};

export const getModeStats = (mode: GameMode) => {
  switch (mode) {
    case "solo":
      return [
        { icon: Clock, value: "~20 min", label: "Avg. Session" },
        { icon: Award, value: "42", label: "Challenges" },
        { icon: Zap, value: "89%", label: "Success Rate" },
      ];
    case "battle":
      return [
        { icon: Clock, value: "~15 min", label: "Per Match" },
        { icon: Award, value: "5", label: "Win Streak" },
        { icon: Zap, value: "Gold", label: "Top League" },
      ];
    case "collab":
      return [
        { icon: Clock, value: "~45 min", label: "Avg. Session" },
        { icon: Award, value: "8", label: "Active Rooms" },
        { icon: Zap, value: "12", label: "Contributors" },
      ];
    case "save-the-code":
      return [
        { icon: Clock, value: "~30 min", label: "Avg. Session" },
        { icon: Award, value: "15", label: "Challenges" },
        { icon: Zap, value: "75%", label: "Success Rate" },
      ];
    default:
      return [];
  }
};
