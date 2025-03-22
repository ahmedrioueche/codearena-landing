import { modes } from "./modes";

export const faqs = [
  {
    question: "What is CodeArena?",
    answer:
      "CodeArena is a platform designed to help developers improve their coding skills through challenges, competitions, and structured learning paths.",
  },
  {
    question: "Does CodeArena support all programming languages?",
    answer:
      "Yes, CodeArena supports a wide range of programming languages, making it suitable for developers of all skill levels and backgrounds.",
  },
  {
    question: "How can I participate in coding challenges?",
    answer:
      "You can join coding challenges by selecting one of the game modes. You can start a challenge without needing to sign up!",
  },
  {
    question: "What are the main features of CodeArena?",
    answer: `CodeArena offers the following game modes: ${modes
      .map((mode) => `${mode.mode}: ${mode.description.join(" ")}`)
      .join(", ")}`,
  },
  {
    question: "Can multiple team members collaborate on CodeArena?",
    answer:
      "Yes, CodeArena supports team collaboration, allowing multiple members to work together on challenges and track their progress collectively.",
  },
];
